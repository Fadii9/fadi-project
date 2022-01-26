import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";
import { deliveriesActions } from "../../store/deliveries";

type SlotNumber = '1' | '2' | '3';
type SlotState = `slot${SlotNumber}State`;

const SlotCard: React.FC<{ inUse: boolean; time: number, slotNumber: SlotNumber }> = ({
  inUse,
  time,
  slotNumber
}) => {
  const dispatch = useDispatch();
  let image;
  let showIngs;
  let estTime = 0;
  let receivedTime = 0;
  let producing = false;
  const [startTime, setStartTime] = useState(0);
  const slotName: SlotState = `slot${slotNumber}State`;
  const slot = useSelector((state: RootState) => state.slotsSlice[slotName]);
  let emptySlot = JSON.stringify(slot) === "{}";
  const queue = useSelector((state: RootState) => state.queuesSlice[`queue${slotNumber}State`]);
  const delivery1 = useSelector((state: RootState) => state.deliveriesSlice[`delivery${slotNumber}State`]);
  const emptyDelivery = JSON.stringify(delivery1) === "{}";

  useEffect(() => {
    setStartTime(time);
  }, [slot]);


  if (queue.length > 1 && emptySlot && time % 2 == 0) {
    dispatch(slotsActions[`addToSlot${slotNumber}`](queue[0]));
    dispatch(queuesActions[`removeFromQueue${slotNumber}`]());
  }
  if (!emptySlot) {
    let meals = slot.order
    let mealsIngs = meals.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) return mealsData[i].ingredients;
      }
    });

     image = meals.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) return mealsData[i];
      }
    });

    showIngs = mealsIngs.join(",");

    mealsIngs[0].map((ing: string) => {
      estTime += ingsData.find((o) => o.ing === ing)!.prepTime;
    });

    estTime -= time - startTime;

    producing = true;
  }

  if (
    !emptySlot &&
    producing &&
    estTime == 0
  ) {
    producing = false;
    dispatch(deliveriesActions[`addToDelivery${slotNumber}`](slot));
    dispatch(slotsActions[`emptySlot${slotNumber}`]());
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
