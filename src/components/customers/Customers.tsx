import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Customer, RootState } from "../../store/index";

import QueueCard from "./QueueCard";
import "./Customers.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings"

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";
import { buildQueuesArray } from "../utils/functions";

const Customers: React.FC<{ time: number; queuesNumber: number }> = ({
  time,
  queuesNumber,
}) => {
  const dispatch = useDispatch();
  const maximumQueueCapacity = 5;

  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);
  const waitingCustomers = useSelector((state: RootState) => state.customersSlice.customersState);

  const queues: Customer[][] = buildQueuesArray(allQueuesState, queuesNumber);

  useEffect(() => {
    const availablePlaceInQueue: boolean = !!queues.filter((queue) => queue.length < maximumQueueCapacity);
    const shortestQueue: Customer[] = queues.reduce(function(queue1,queue2) { return queue1.length > queue2.length? queue2 : queue1 });
    const shortestQueueIndex: number = queues.indexOf(shortestQueue) + 1;

    const readyToAddCustomer: boolean = availablePlaceInQueue && time != 0 && time % 2 == 0;

    if (readyToAddCustomer) {
      dispatch(queuesActions.addToQueue({ firstCustomer: {...waitingCustomers[0], addedTime: time} , queue: shortestQueueIndex }))
      dispatch(customersActions.takeOrder())

    }
  }, [time]);

  const queuesCountArray = Array.from(
    { length: queuesNumber },
    (_, i) => i
  );

  const queuesComponents = queuesCountArray.map((number) => (
    <QueueCard key={number} inUse={true} queue={queues[number]} />
  ));

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>{ CUSTOMERS_QUEUE_TEXT.TITLE }</div>
      <div className={"queues_container"}>{queuesComponents}</div>
    </div>
  );
};

export default Customers;
