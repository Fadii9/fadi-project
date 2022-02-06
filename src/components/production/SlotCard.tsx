import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer, RootState } from "../../store/index";
import { deliveriesNumber } from "../../data/stationsNumber";

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { SLOT_TEXT } from "./constants/strings";

import { slotsActions } from "../../store/slots";
import { deliveriesActions } from "../../store/deliveries";
import { buildDeliveriesArray } from "../utils/functions";

const SlotCard: React.FC<{
  key: number;
  inUse: boolean;
  time: number;
  slotNumber: number;
}> = ({ key, inUse, time, slotNumber }) => {
  const dispatch = useDispatch();
  let imageUrl, showIngs;
  let estTime = 0;
  let availableDelivery
  let availableDeliveryIndex
  let producing: boolean = false;
  const [startTime, setStartTime] = useState(0);
  const slot = useSelector((state: RootState) => { return state.slotsSlice[slotNumber] })
  const emptySlot = !slot.id

  const deliveriesState = useSelector((state: RootState) => state.deliveriesSlice);
  const deliveriesStatesArray = buildDeliveriesArray(deliveriesState, deliveriesNumber)

  for (let i = 0; i <= deliveriesNumber; i++) {
    if (JSON.stringify(deliveriesStatesArray[i]) == "{}") {
      availableDelivery = true;
      availableDeliveryIndex = i + 1;
      break;
    } else {
      availableDelivery = false;
    }
  }

  useEffect(() => {
    setStartTime(time);
  }, [slot]);

  if (!emptySlot) {
    const products = slot.order;

    const mealsIngs = products.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName === meal) return mealsData[i].ingredients;
      }
    });

    const image = products.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName === meal) return mealsData[i];
      }
    });
    imageUrl = image[0]?.imageUrl;

    showIngs = mealsIngs.join(",");

    mealsIngs[0]?.map((ingredient: string) => {
      estTime += ingsData.find((meal) => meal.ing === ingredient)!.prepTime;
    });

    estTime -= time - startTime;

    producing = true;
  }

  const finishedProducingMeal: boolean = !emptySlot && producing && estTime === 0;
  if (finishedProducingMeal && availableDelivery) {
    producing = false;
    dispatch(
      deliveriesActions.addToDelivery({
        delivery: availableDeliveryIndex,
        customer: slot,
      })
    );
    dispatch(slotsActions.emptySlot({ slot: slotNumber }));
  }
  return inUse ? (
    <div className={"slot"}>
      <div className={"slot_image_container"}>
        {emptySlot ? (
          "Empty Slot"
        ) : (
          <img src={imageUrl} alt="Preparing!" className={"slot_image"} />
        )}
      </div>
      <div className={"slot_details"}>
        <span className={"title"}>{SLOT_TEXT.ORDER_ID_TITLE}</span>
        {slot.id} <br />
        <span className={"title"}>{SLOT_TEXT.PRODUICONG_TITLE}</span>
        {slot.order} <br />
        <span className={"title"}>{SLOT_TEXT.EST_TIME_TITLE}</span>{" "}
        {estTime > 0 && `${estTime} Seconds`}
      </div>
      <div className={"slot_status"}>
        <div className={"slot_status_text"}>
          {SLOT_TEXT.PRODUCTION_STATUS_TITLE}
        </div>
        <div className={"slot_status_ings"}>{showIngs}</div>
      </div>
    </div>
  ) : (
    <div className={"slot"}>{SLOT_TEXT.NOT_IN_USE}</div>
  );
};

export default SlotCard;
