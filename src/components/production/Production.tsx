import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./Production.css";

import { SLOT_TEXT } from "./constants/strings";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";

import Slot from "./SlotCard";

const Production: React.FC<{ time: number; slotsNumber: number }> = ({
  time,
  slotsNumber,
}) => {
  const dispatch = useDispatch();

  const slotsCountArray = Array.from({ length: slotsNumber }, (_, i) => i + 1);
  const slotsComponent = slotsCountArray.map((number) => (
    <Slot key={number} inUse={true} time={time} slotNumber={number} />
  ));

  return (
    <div className={"Production_status"}>
      <div className={"Production_text"}>{SLOT_TEXT.TITLE}</div>
      <div className={"slot_container"}>{slotsComponent}</div>
    </div>
  );
};

export default Production;
