import React from "react";
import "./Production.css";

import Slot from "./SlotCard";

const Production: React.FC<{ time: number }> = ({ time }) => {
  return (
    <div className={"Production_status"}>
      <div className={"Production_text"}>Production Slots</div>
      <div className={"slot_container"}>
        <Slot inUse={true} time={time} />
        <Slot inUse={false} time={time} />
        <Slot inUse={false} time={time} />
      </div>
    </div>
  );
};

export default Production;
