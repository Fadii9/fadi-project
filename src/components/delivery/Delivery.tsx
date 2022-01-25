import React from "react";
import "./Delivery.css";

import DeliveryCard from "./DeliveryCard";

const Delivery: React.FC<{ time: number }> = ({ time }) => {
  return (
    <div className={"delivery_status"}>
      <div className={"delivery_container_text"}>Delivery Status</div>
      <div className={"delivery_status_container"}>
        <DeliveryCard time={time} slotNumber={1} inUse={true} />
        <DeliveryCard time={time} slotNumber={2} inUse={false} />
        <DeliveryCard time={time} slotNumber={3} inUse={false} />
      </div>
    </div>
  );
};

export default Delivery;
