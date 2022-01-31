import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./SlotCard.css";


import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import { slot1Actions } from "../../store/slot1";
import { queue1Actions } from "../../store/queue1";
import { delivery1Actions } from "../../store/delivery1";

const SlotCard: React.FC<{ inUse: boolean; time: number }> = ({
  inUse,
  time,
}) => {
  const dispatch = useDispatch();
  let estTime = 0;
  let receivedTime = 0;
  let producing = false;
  let showIngs;
  const [startTime, setStartTime] = useState(0);
  const slot1 = useSelector((state: RootState) => state.slot1Slice.slot1State);
  const delivery1 = useSelector(
    (state: RootState) => state.delivery1Slice.delivery1State
  );
  const queue1 = useSelector(
    (state: RootState) => state.queue1Slice.queue1State
  );

  useEffect(() => {
    setStartTime(time);
  }, [slot1]);

  let emptySlot = JSON.stringify(slot1) === "{}";

  if (queue1.length > 1 && emptySlot && time % 3 == 0) {
    dispatch(slot1Actions.addToSlot(queue1[0]));
    dispatch(queue1Actions.removeFromQueue1());
  }

  if (!emptySlot) {
    let meals = slot1.order;
    let mealsIngs = meals.map((meal: string) => {
      for (let i in mealsData) {
        if (mealsData[i].mealName == meal) return mealsData[i].ingredients;
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
    estTime == 0 &&
    JSON.stringify(delivery1) === "{}"
  ) {
    producing = false;
    dispatch(delivery1Actions.addToDelivery1(slot1));
    dispatch(slot1Actions.emptySlot());
  }

  return inUse ? (
    <div className={"slot"}>
      <div className={"slot_image_container"}>
        {emptySlot ? (
          "Empty Slot"
        ) : (
          <img
            src="https://granddigital.com.au/wp-content/uploads/2017/08/Hamburger-Thumbnail-1.jpg"
            alt="Preparing!"
            className={"slot_image"}
          />
        )}
      </div>
      <div className={"slot_details"}>
        <span className={"title"}>Order ID: </span>
        {slot1.id} <br />
        <span className={"title"}>Producing: </span>
        {slot1.order} <br />
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
