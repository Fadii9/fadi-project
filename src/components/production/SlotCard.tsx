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
  let image;
  let queue = [];
  let showIngs;
  let estTime = 0;
  let receivedTime = 0;
  let producing = false;
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

  // removing first customer in line, and adding to preperation slot
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

  // getting meals ingredients & detailes
  if (!emptySlot) {
    producing = true;
    let meals = slot.order;
    let mealsIngs = meals.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) return mealsData[i].ingredients;
      }
    });

    // find image according to the meal
    image = meals.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) return mealsData[i];
      }
    });
    showIngs = mealsIngs.join(",");

    // calculating meal preperation time according to the ingredients
    mealsIngs[0].map((ing: string) => {
      estTime += ingsData.find((o) => o.ing === ing)!.prepTime;
    });
    estTime -= time - startTime;
  }

  // checking if finished preparing meal and send to available delivery
  if (
    !emptySlot &&
    producing &&
    estTime == 0
  ) {
    producing = false;

    let DeliveryAction: DeliveryState = `addToDelivery${deliveryNumber}`;
    dispatch(deliveriesActions[DeliveryAction](slot));
    localStorage.setItem(`delivery${deliveryNumber}`, JSON.stringify(slot));

    dispatch(slotsActions[`emptySlot${slotNumber}`]());
    localStorage.setItem(`slot${slotNumber}`, JSON.stringify({}));

  }

  return inUse ? (
    <div className={"slot"}>
      <div className={"slot_image_container"}>
        {emptySlot ? (
          "Empty Slot"
        ) : (
          <img
            src={image[0].imageUrl}
            alt="Preparing!"
            className={"slot_image"}
          />
        )}
      </div>
      <div className={"slot_details"}>
        <span className={"title"}>Order ID: </span>
        {slot.id} <br />
        <span className={"title"}>Producing: </span>
        {slot.order} <br />
        <span className={"title"}>Estimated Time: </span>{" "}
        {estTime > 0 && `${estTime} Seconds`}
      </div>
      <div className={"slot_status"}>
        <div className={"slot_status_text"}>Production Status:</div>
        <div className={"slot_status_ings"}>{showIngs}</div>
      </div>
    </div>
  ) : (
    <div className={"slot"}>Not In Use</div>
  );
};

export default SlotCard;
