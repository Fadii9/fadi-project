import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./Production.css";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";

import Slot from "./SlotCard";

const Production: React.FC<{ time: number }> = ({ time }) => {
  const dispatch = useDispatch();


  return (
    <div className={"Production_status"}>
      <div className={"Production_text"}>Production Slots</div>
      <div className={"slot_container"}>
        <Slot inUse={true} time={time} slotNumber={"1"}/>
        <Slot inUse={true} time={time} slotNumber={"2"}/>
        <Slot inUse={true} time={time} slotNumber={"3"}/>
      </div>
    </div>
  );
};

export default Production;
