import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./DeliveryCard.css";

import { deliveriesActions } from "../../store/deliveries";

type DeliveryNumber = "1" | "2" | "3";
type DeliveryState = `slot${DeliveryNumber}State`;

const DeliveryCard: React.FC<{
  deliveryNumber: DeliveryNumber;
  inUse: boolean;
  time: number;
}> = ({ deliveryNumber, inUse, time }) => {
  const dispatch = useDispatch();
  const delivery = useSelector(
    (state: RootState) =>
      state.deliveriesSlice[`delivery${deliveryNumber}State`]
  );
  let emptyDelivery = !delivery.id;
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
    dispatch(deliveriesActions[`emptyDelivery${deliveryNumber}`]());
  }

  return inUse ? (
    <div className={"delivery"}>
      <div className={"delivery_text"}>Delivery #{deliveryNumber}</div>
      <div className={"delivery_update"}>
        Order ID: {delivery.id} <br />
        Delivery Time:
      </div>
      <div className={"delivery_time"}>
        {deliveryTime && `${deliveryTime} seconds`}
      </div>
      <div
        className={emptyDelivery ? "delivery_screen empty" : "delivery_screen"}
      >
        {emptyDelivery ? "Waiting..." : "Delivering"}
      </div>
    </div>
  ) : (
    <div className={"delivery not_in_use"}>Not In Use</div>
  );
};

export default DeliveryCard;
