import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";
import { deliveriesActions } from "../../store/deliveries";

type SlotNumber = "1" | "2" | "3";
type SlotState = `slot${SlotNumber}State`;

type DeliveryNumber = 1 | 2 | 3;
type DeliveryState = `addToDelivery${DeliveryNumber}`;

const SlotCard: React.FC<{
  inUse: boolean;
  time: number;
  slotNumber: SlotNumber;
}> = ({ inUse, time, slotNumber }) => {
  const dispatch = useDispatch();
  let meal;
  let image;
  let showIngs;
  let queue = [];
  let icons: string[] = [];
  let estTime = 0;
  let producing = false;
  let availableIngs = true;
  let preparedAllMeals = false;
  let mealIngs: string[] = [];
  const [startTime, setStartTime] = useState(0);
  const slotName: SlotState = `slot${slotNumber}State`;
  const slot = useSelector((state: RootState) => state.slotsSlice[slotName]);
  let emptySlot = !slot.id;

  //queues states
  const queue1 = useSelector(
    (state: RootState) => state.queuesSlice.queue1State
  );
  const queue2 = useSelector(
    (state: RootState) => state.queuesSlice.queue2State
  );
  const queue3 = useSelector(
    (state: RootState) => state.queuesSlice.queue3State
  );
  const allQueues = [queue1, queue2, queue3];

  //available delivery state
  let deliveryNumber: DeliveryNumber = useSelector(
    (state: RootState) => state.deliveriesSlice.availbleDeliveryState
  );

  //check if there is a customer in each queue
  const [cusInQ1, cusInQ2, cusInQ3] = [
    queue1.length > 0,
    queue2.length > 0,
    queue3.length > 0,
  ];

  // find the queue with the first customer that got in
  if (cusInQ1 && !cusInQ2 && !cusInQ3) {
    queue = queue1;
  } else if (cusInQ1 && cusInQ2 && !cusInQ3) {
    queue1[0].addedTime < queue2[0].addedTime
      ? (queue = queue1)
      : (queue = queue2);
  } else if (cusInQ1 && cusInQ2 && cusInQ3) {
    queue = [queue1, queue2, queue3].reduce(function (prev, curr) {
      return prev[0].addedTime < curr[0].addedTime ? prev : curr;
    });
  }

  // removing first customer in line, and adding to preparation slot
  if (queue.length > 1 && emptySlot && time % 2 == 0) {
    dispatch(slotsActions[`addToSlot${slotNumber}`](queue[0]));
    localStorage.setItem(`slot${slotNumber}`, JSON.stringify(queue[0]));

    switch (queue) {
      case queue1:
        dispatch(queuesActions.removeFromQueue1());

        break;
      case queue2:
        dispatch(queuesActions.removeFromQueue2());

        break;
      case queue3:
        dispatch(queuesActions.removeFromQueue3());

        break;
    }
  }

  // set statring meal preperation time
  useEffect(() => {
    setStartTime(time);
  }, [slot]);

  // getting meals ingredients & image
  if (!emptySlot) {
    producing = true;
    let meals = slot.order;
    if (meals.length > 0) {
      meal = meals[0];
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) {
          mealIngs = mealsData[i].ingredients;
          image = mealsData[i].imageUrl;
        }
      }
      mealIngs.map((ing) => ingsData.map((ingData) => {
        ing == ingData.ing && icons.push(ingData.icon);
        if (ing == ingData.ing && ingData.amount == 0) {
          availableIngs = false}
      }))

      showIngs = mealIngs.join(" ");


      // calculating meal preparation time according to the ingredients
      mealIngs.map((ing: string) => {
        estTime += ingsData.find((o) => o.ing === ing)!.prepTime;
      });
      estTime -= time - startTime;
    } else {
      preparedAllMeals = true; // if finished preparing all meals ,set preparedAllMeals to true
    }

    // if finished a meal, remove it from meals list, and start preparing the next meal
    if (estTime === 0) {
      meals = meals.slice(1);
      dispatch(
        slotsActions[`addToSlot${slotNumber}`]({ ...slot, order: meals })
      );
    }
  }

  //if meal is canceled, remove it from the queue after 5 seconds
  !availableIngs && time == startTime + 5 && dispatch(slotsActions[`emptySlot${slotNumber}`]());



  // checking if finished preparing all meals and send to available delivery
  if (!emptySlot && producing && preparedAllMeals) {
    producing = false;

    let DeliveryAction: DeliveryState = `addToDelivery${deliveryNumber}`;
    dispatch(deliveriesActions[DeliveryAction](slot));
    localStorage.setItem(`delivery${deliveryNumber}`, JSON.stringify(slot));

    dispatch(slotsActions[`emptySlot${slotNumber}`]());
    localStorage.setItem(`slot${slotNumber}`, JSON.stringify({}));
  }

  return inUse ? (
    <div className={availableIngs? slot.vip ? "slot vip-slot" : "slot" : "slot canceled-slot"}>
      <div className={"slot_image_container"}>
        {emptySlot ? (
          "Empty Slot"
        ) : (
          <img src={image} alt="Preparing!" className={"slot_image"} />
        )}
      </div>
      <div className={"slot_details"}>
        <span className={"title"}>Order ID: </span>
        {slot.id} <br />
        <span className={"title"}>Producing: </span>
        {meal} <br />
        <span className={"title"}>Estimated Time: </span>{" "}
        {estTime > 0 && availableIngs && `${estTime} Seconds`}
      </div>
      {availableIngs?
        <div className={"slot_status"}>
          {slot.vip && <div className={"vip-customer"}>&#11088; VIP &#11088;</div> }
          <div className={"slot_status_text"}>Production Status:</div>
          <div className={"slot_status_ings"}>{showIngs}</div>
       </div>
          :
      <div className={"canceled"}>&#10060; Canceled Meal &#10060;<br/> Out of ingredients!</div>
      }
      </div>
  ) : (
    <div className={"slot"}>Not In Use</div>
  );
};

export default SlotCard;
