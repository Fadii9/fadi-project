import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer, RootState, SlotState } from "../../store/index";

import "./Production.css";

import { SLOT_TEXT } from "./constants/strings";

import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";

import Slot from "./SlotCard";
import { queuesNumber } from "../../data/stationsNumber";
import { buildQueuesArray, buildSlotsArray } from "../utils/functions";

const Production: React.FC<{ time: number; slotsNumber: number }> = ({
  time,
  slotsNumber,
}) => {
  const dispatch = useDispatch();
  let queueWithFirstCustomer: Customer[];
  let queueWithFirstCustomerIndex: number;
  let availableSlot: boolean = false;
  let availableSlotIndex: number;
  let readyToTakeCustomerOrder: boolean;

  const allSlotsState = useSelector((state: RootState) => state.slotsSlice);
  const slotsStatesArray = buildSlotsArray(allSlotsState, slotsNumber);

  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);
  const queuesStatesArray = buildQueuesArray(allQueuesState, queuesNumber);
  const queuesWithCustomers = queuesStatesArray.filter((queue) => queue?.length);

  if (queuesWithCustomers.length > 0) {
    queueWithFirstCustomer = queuesWithCustomers.reduce(function (queue1, queue2) {
      return queue1[0].addedTime! < queue2[0].addedTime! ? queue2 : queue1;
    });
    queueWithFirstCustomerIndex = queuesStatesArray.indexOf(queueWithFirstCustomer) + 1;
  }

  useEffect(() => {
    for (let i = 0; i <= slotsNumber; i++) {
      if (JSON.stringify(slotsStatesArray[i]) == "{}") {
        availableSlot = true;
        availableSlotIndex = i + 1;
        break;
      } else {
        availableSlot = false;
      }
    }

    if (queuesWithCustomers.length > 0) {
      queueWithFirstCustomer = queuesWithCustomers.reduce(function (
        queue1,
        queue2
      ) { return queue1[0].addedTime! < queue2[0].addedTime! ? queue1 : queue2 });

      queueWithFirstCustomerIndex = queuesStatesArray.indexOf(queueWithFirstCustomer) + 1;

      readyToTakeCustomerOrder = !!queueWithFirstCustomer.length && availableSlot && time % 3 === 0;
    }

    if (readyToTakeCustomerOrder) {
      dispatch(
        slotsActions.addToSlot({
          slot: availableSlotIndex,
          customer: queueWithFirstCustomer[0],
        })
      );
      dispatch(
        queuesActions.removeFromQueue({ queue: queueWithFirstCustomerIndex })
      );
    }
  }, [time]);

  const slotsCountArray = Array.from({ length: slotsNumber }, (_, i) => i + 1);
  const slotsComponent = slotsCountArray.map((number) => (
    <Slot key={number} time={time} slotNumber={number} />
  ));

  return (
    <div className={"Production_status"}>
      <div className={"Production_text"}>{SLOT_TEXT.TITLE}</div>
      <div className={"slot_container"}>{slotsComponent}</div>
    </div>
  );
};

export default Production;
