import React from "react";
import "./Delivery.css";

import DeliveryCard from "./DeliveryCard";

const Delivery: React.FC<{ time: number, deliveriesNumber: number }> = ({ time , deliveriesNumber}) => {

    const slotsCountArray = Array.from(
        { length: deliveriesNumber },
        (_, i) => i + 1
    );
    const slotsComponent = slotsCountArray.map((number) => (
        <DeliveryCard time={time} deliveryNumber={number} inUse={true} />
    ));
  return (
    <div className={"delivery_status"}>
      <div className={"delivery_container_text"}>Delivery Status</div>
      <div className={"delivery_status_container"}>
          {slotsComponent}
      </div>
    </div>
  );
};

export default Delivery;
