import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./DeliveryCard.css";

import { deliveryCardText } from "../../data/stringsFile"
import { deliveriesActions } from "../../store/deliveries";

type DeliveryNumber = number;
type DeliveryState = `slot${DeliveryNumber}State`;

const DeliveryCard: React.FC<{
    key: number;
  deliveryNumber: number;
  inUse: boolean;
  time: number;
}> = ({ key, deliveryNumber, inUse, time }) => {
  const dispatch = useDispatch();
  const delivery = useSelector((state: RootState) =>state.deliveriesSlice[deliveryNumber] );
  const emptyDelivery = !delivery.id;
  const [startTime, setStartTime] = useState(0);
  const [isUsed, setIsUsed] = useState(false);
  let deliveryTime = 0;

  useEffect(() => {
    setStartTime(time);
  }, [delivery]);

  if (!emptyDelivery && deliveryTime == 0) {
    deliveryTime = 5;
  }

  if (deliveryTime != 0) {
    deliveryTime -= time - startTime;
  }

  if (deliveryTime == 0 && !emptyDelivery) {
      const deliveryStateName = `${deliveryNumber}`
      dispatch(deliveriesActions.emptyDelivery({delivery: deliveryStateName}));

  }

  return inUse ? (
    <div className={"delivery"}>
      <div className={"delivery_text"}>{deliveryCardText.CARD_TITLE}#{deliveryNumber}</div>
      <div className={"delivery_update"}>
          {deliveryCardText.ORDER_ID_TITLE}{delivery.id} <br />
          {deliveryCardText.DELIVERY_TIME_TITLE}
      </div>
      <div className={"delivery_time"}>
        {deliveryTime && `${deliveryTime} seconds`}
      </div>
      <div
        className={emptyDelivery ? "delivery_screen empty" : "delivery_screen"}
      >
        {emptyDelivery ? deliveryCardText.WAITING_STATUS_TEXT : deliveryCardText.DELIVERING_STATUS_TEXT}
      </div>
    </div>
  ) : (
    <div className={"delivery not_in_use"}>Not In Use</div>
  );
};

export default DeliveryCard;
