import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { slotText } from "../../data/stringsFile";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";
import { deliveriesActions } from "../../store/deliveries";

type SlotNumber = number;
type SlotState = `slot${SlotNumber}State`;

const SlotCard: React.FC<{
  inUse: boolean;
  time: number;
  slotNumber: SlotNumber;
}> = ({ inUse, time, slotNumber }) => {
  const dispatch = useDispatch();
  let image;
  let showIngs;
  let estTime = 0;
  let receivedTime = 0;
  let producing = false;
  const [startTime, setStartTime] = useState(0);
  const slotName: SlotState = `slot${slotNumber}State`;
  // @ts-ignore
  const slot = useSelector((state: RootState) => state.slotsSlice[slotName]);
  let emptySlot = !slot.id;

  // @ts-ignore
  const queue = useSelector((state: RootState) => state.queuesSlice[`queue${slotNumber}State`]);
  // @ts-ignore
  const delivery = useSelector((state: RootState) => state.deliveriesSlice[`delivery${slotNumber}State`]);
  let emptyDelivery = !delivery.id;

  useEffect(() => {
    setStartTime(time);
  }, [slot]);

  if (queue.length > 1 && emptySlot && time % 2 == 0) {
    // @ts-ignore
    dispatch(slotsActions.addToSlot({ slot: slotName, customer: queue[0] }));
    // @ts-ignore
    dispatch(
      queuesActions.removeFromQueue({ queue: `queue${slotNumber}State` })
    );
  }
  if (!emptySlot) {
    let meals = slot.order;
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

  if (!emptySlot && producing && estTime == 0) {
    producing = false;
    // @ts-ignore
    dispatch(deliveriesActions[`addToDelivery${slotNumber}`](slot));
    // @ts-ignore
    dispatch(slotsActions.emptySlot({ slot: slotName }));
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
        <span className={"title"}>{slotText.ORDER_ID_TITLE}</span>
        {slot.id} <br />
        <span className={"title"}>{slotText.PRODUICONG_TITLE}</span>
        {slot.order} <br />
        <span className={"title"}>{slotText.EST_TIME_TITLE}</span>{" "}
        {estTime > 0 && `${estTime} Seconds`}
      </div>
      <div className={"slot_status"}>
        <div className={"slot_status_text"}>{ slotText.PRODUCTION_STATUS_TITLE }</div>
        <div className={"slot_status_ings"}>{showIngs}</div>
      </div>
    </div>
  ) : (
    <div className={"slot"}>{ slotText.NOT_IN_USE }</div>
  );
};

export default SlotCard;
