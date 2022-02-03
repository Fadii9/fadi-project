import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Customer, RootState } from "../../store/index";

import QueueCard from "./QueueCard";
import "./Customers.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings"

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";

const Customers: React.FC<{ time: number; queuesNumber: number }> = ({
  time,
  queuesNumber,
}) => {
  const dispatch = useDispatch();
  const fullQueue = 5;
  let firstCustomer;

  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);
  const waitingCustomers = useSelector((state: RootState) => state.customersSlice.customersState);

  const BuildQueues = (queuesState: Customer[][]) => {
    let queuesArray = [];
    for (let i = 1; i <= queuesNumber; i++) {
      queuesArray.push(queuesState[i]);
    }
    return queuesArray;
  };
  const queues = BuildQueues(allQueuesState);
  useEffect(() => {
    firstCustomer = waitingCustomers[0];

    //check if there is availble space in one of the queues
    const availablePlaceInQueue = !!queues.filter((queue) => queue.length < fullQueue);
    const shortestQueue = queues.reduce(function(p,c) {return p.length>c.length?c:p;});
    const shortestQueueIndex = queues.indexOf(shortestQueue) + 1;

    const readyToAddCustomer: boolean = availablePlaceInQueue && time != 0 && time % 2 == 0;

    if (readyToAddCustomer) {
      dispatch(customersActions.takeOrder());
      dispatch(queuesActions.addToQueue({firstCustomer, queue: `${shortestQueueIndex}`}))
    }
  }, [time]);

  const queuesCountArray = Array.from(
    { length: queuesNumber },
    (_, i) => i
  );

  const queueComponent = queuesCountArray.map((number) => (
    <QueueCard key={number} inUse={true} queue={queues[number]} />
  ));

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>{ CUSTOMERS_QUEUE_TEXT.TITLE }</div>
      <div className={"queues_container"}>{queueComponent}</div>
    </div>
  );
};

export default Customers;
