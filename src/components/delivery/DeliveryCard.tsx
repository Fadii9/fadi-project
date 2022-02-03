import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./DeliveryCard.css";

import { DELIVERIES_CARD_TEXT } from "./constants/strings";
import { deliveriesActions } from "../../store/deliveries";

const DeliveryCard: React.FC<{
  key: number;
  deliveryNumber: number;
  inUse: boolean;
  time: number;
}> = ({ key, deliveryNumber, inUse, time }) => {
  const dispatch = useDispatch();
  const delivery = useSelector(
    (state: RootState) => state.deliveriesSlice[deliveryNumber]
  );
  const emptyDelivery = !delivery.id;
  const [startTime, setStartTime] = useState(0);
  const [isUsed, setIsUsed] = useState(false);
  let deliveryTime = 0;

  useEffect(() => {
    setStartTime(time);
  }, [delivery]);

  if (!emptyDelivery && deliveryTime === 0) {
    deliveryTime = 5;
  }

  if (deliveryTime !== 0) {
    deliveryTime -= time - startTime;
  }

  if (deliveryTime === 0 && !emptyDelivery) {
    const deliveryStateName = deliveryNumber.toString();
    dispatch(deliveriesActions.emptyDelivery({ delivery: deliveryStateName }));
  }

  return inUse ? (
    <div className={"delivery"}>
      <div className={"delivery_text"}>
        {DELIVERIES_CARD_TEXT.CARD_TITLE}#{deliveryNumber}
      </div>
      <div className={"delivery_update"}>
        {DELIVERIES_CARD_TEXT.ORDER_ID_TITLE}
        {delivery.id} <br />
        {DELIVERIES_CARD_TEXT.DELIVERY_TIME_TITLE}
      </div>
      <div className={"delivery_time"}>
        {deliveryTime && `${deliveryTime} seconds`}
      </div>
      <div
        className={emptyDelivery ? "delivery_screen empty" : "delivery_screen"}
      >
        {emptyDelivery
          ? DELIVERIES_CARD_TEXT.WAITING_STATUS
          : DELIVERIES_CARD_TEXT.DELIVERING_STATUS}
      </div>
    </div>
  ) : (
    <div className={"delivery not_in_use"}>Not In Use</div>
  );
};

export default DeliveryCard;
