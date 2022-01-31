import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./DeliveryCard.css";

import { delivery1Actions } from "../../store/delivery1";

const DeliveryCard: React.FC<{
  slotNumber: number;
  inUse: boolean;
  time: number;
}> = ({ slotNumber, inUse, time }) => {
  const dispatch = useDispatch();
  const delivery1 = useSelector(
    (state: RootState) => state.delivery1Slice.delivery1State
  );
  const emptyDelivery = JSON.stringify(delivery1) === "{}";
  const [startTime, setStartTime] = useState(0);
  const [isUsed, setIsUsed] = useState(false);
  let deliveryTime = 0;

  useEffect(() => {
    setStartTime(time);
  }, [delivery1]);

  if (!emptyDelivery && deliveryTime == 0) {
    deliveryTime = 5;
  }

  if (deliveryTime != 0) {
    deliveryTime -= time - startTime;
  }

  return inUse ? (
    <div className={"delivery"}>
      <div className={"delivery_text"}>Delivery #{slotNumber}</div>
      <div className={"delivery_update"}>
        Order ID: {delivery1.id} <br />
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
