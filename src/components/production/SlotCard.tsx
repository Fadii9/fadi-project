import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer, RootState } from "../../store/index";
import { deliveriesNumber } from "../../data/stationsNumber";

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { slotsActions } from "../../store/slots";
import { deliveriesActions } from "../../store/deliveries";
import { buildDeliveriesArray } from "../utils/functions";

const SlotCard: React.FC<{
  key: number;
  time: number;
  slotNumber: number;
}> = ({ key, time, slotNumber }) => {
  const dispatch = useDispatch();
  let meal, imageUrl, showIngs, availableDelivery, availableDeliveryIndex;
  let estTime = 0;
  let ingredients: string[] = [];
  let mealIngredients: string[] = [];
  let availableIngs: boolean = true;
  let preparedAllMeals: boolean = false;
  let producing: boolean = false;
  const [startTime, setStartTime] = useState(0);
  const [editing, setEditing] = useState(false);

  const slot = useSelector((state: RootState) => state.slotsSlice[slotNumber]);
  const deliveriesState = useSelector(
    (state: RootState) => state.deliveriesSlice
  );
  const deliveriesStatesArray = buildDeliveriesArray(
    deliveriesState,
    deliveriesNumber
  );
  const emptySlot = !slot.id;

  for (let i = 0; i < deliveriesNumber; i++) {
    const emptyDelivery: boolean = JSON.stringify(deliveriesStatesArray[i]) === "{}"
    if (emptyDelivery) {
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
        if (mealsData[i].mealName === meal) {
          mealIngredients = mealsData[i].ingredients;
          imageUrl = mealsData[i].imageUrl;
        }
      }

      mealIngredients.map((ing) =>
        ingsData.map((ingData) => {
          ing === ingData.ing && ingredients.push(ingData.ing);
          if (ing === ingData.ing && ingData.amount === 0) {
            availableIngs = false;
          }
        })
      );

      showIngs = mealIngredients.join(" ");

      mealIngredients.map((mealIngredient: string) => {
        estTime += ingsData.find(
          (ingredientsData) => ingredientsData.ing === mealIngredient
        )!.prepTime;
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

  !availableIngs &&
    time === startTime + 5 &&
    dispatch(
      slotsActions.emptySlot({
        slot: slotNumber,
      })
    );

  const finishedProducingMeal: boolean =
    !emptySlot && producing && preparedAllMeals && estTime === 0;
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

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const cancelSlot = () => {
    dispatch(slotsActions.emptySlot({ slot: slotNumber }));
    setEditing((prev) => !prev);
  };

  const slotClass = availableIngs
    ? !slot.vip
      ? !emptySlot
        ? "slot producing-slot"
        : "slot"
      : "slot vip-slot"
    : "slot canceled-slot";

  return !editing? (
    <div className={slotClass} onClick={() => {
      producing && availableIngs && !slot.vip && toggleEditing();
    }}>
      <div className={"slot_image_container"}>
        {emptySlot ? (
          "Empty Slot"
        ) : (
          <img src={imageUrl} alt="Preparing!" className={"slot_image"} />
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
      {availableIngs ? (
        <div className={"slot_status"}>
          {slot.vip && (
            <div className={"vip-customer"}>&#11088; VIP &#11088;</div>
          )}
          <div className={"slot_status_text"}>Production Status:</div>
          <div className={"slot_status_ings"}>{showIngs}</div>
        </div>
      ) : (
        <div className={"canceled"}>
          &#10060; Canceled Meal &#10060;
          <br /> Out of ingredients!
        </div>
      )}
    </div>
  ): (
      <div className={"slot"}><button
          className={"slot-button"}
          onClick={() => {
            toggleEditing();
          }}
      >
        Back
      </button>
        <button
            className={"slot-button"}
            onClick={() => {
              cancelSlot();
            }}
        >
          Cancel Order
        </button></div>
  )
};

export default SlotCard;
