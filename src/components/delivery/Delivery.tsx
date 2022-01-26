import React from "react";
import "./Delivery.css";

import DeliveryCard from "./DeliveryCard";

const Delivery: React.FC<{ time: number }> = ({ time }) => {
  return (
    <div className={"delivery_status"}>
      <div className={"delivery_container_text"}>Delivery Status</div>
      <div className={"delivery_status_container"}>
        <DeliveryCard time={time} deliveryNumber={"1"} inUse={true} />
        <DeliveryCard time={time} deliveryNumber={"2"} inUse={true} />
        <DeliveryCard time={time} deliveryNumber={"3"} inUse={true} />
      </div>
    </div>
  );
};

export default Delivery;
