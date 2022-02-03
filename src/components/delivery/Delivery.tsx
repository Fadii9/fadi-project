import React from "react";
import "./Delivery.css";

import DeliveryCard from "./DeliveryCard";
import { DELIVERIES_TEXT } from "./constants/strings"

const Delivery: React.FC<{ time: number; deliveriesNumber: number }> = ({
  time,
  deliveriesNumber,
}) => {
  const slotsCountArray = Array.from(
    { length: deliveriesNumber },
    (_, i) => i + 1
  );
  const slotsComponent = slotsCountArray.map((number) => (
    <DeliveryCard key={number} time={time} deliveryNumber={number} inUse={true} />
  ));
  return (
    <div className={"delivery_status"}>
      <div className={"delivery_container_text"}>{DELIVERIES_TEXT.TITLE}</div>
      <div className={"delivery_status_container"}>{slotsComponent}</div>
    </div>
  );
};

export default Delivery;
