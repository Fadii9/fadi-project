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
  let meal, imageUrl, showIngs;
  let estTime = 0;
  let ingredients: string[] = [];
  let mealIngs: string[] = [];
  let availableIngs:boolean = true;
  let preparedAllMeals:boolean = false;
  let producing: boolean = false;
  let availableDelivery
  let availableDeliveryIndex
  const [startTime, setStartTime] = useState(0);
  const slot = useSelector((state: RootState) => { return state.slotsSlice[slotNumber] })
  const emptySlot = !slot.id

  const deliveriesState = useSelector((state: RootState) => state.deliveriesSlice);
  const deliveriesStatesArray = buildDeliveriesArray(deliveriesState, deliveriesNumber)

  for (let i = 0; i < deliveriesNumber; i++) {
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
    producing = true;
    let meals = slot.order;
    if (meals.length > 0) {
      meal = meals[0];
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) {
          mealIngs = mealsData[i].ingredients;
          imageUrl = mealsData[i].imageUrl;
        }
      }
      mealIngs.map((ing) => ingsData.map((ingData) => {
        ing == ingData.ing && ingredients.push(ingData.ing);
        if (ing == ingData.ing && ingData.amount == 0) {
          availableIngs = false}
      }))

      showIngs = mealIngs.join(" ");


      mealIngs.map((ing: string) => {
        estTime += ingsData.find((o) => o.ing === ing)!.prepTime;
      });
      estTime -= time - startTime;
    } else {
      preparedAllMeals = true;
    }

    if (estTime === 0) {
      meals = meals.slice(1);
      dispatch(
      slotsActions.addToSlot({
        slot: slotNumber,
        customer: { ...slot, order: meals },
      })
      );
    }
  }

  !availableIngs && time == startTime + 5 && dispatch(slotsActions.addToSlot({slot: slotNumber,
    customer:{ ...slot, order: slot.order.slice(1) }}));

  const finishedProducingMeal: boolean = !emptySlot && producing && preparedAllMeals && estTime === 0;
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
        {meal} <br />
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
