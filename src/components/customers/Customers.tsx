import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import QueueCard from "./QueueCard";
import "./Customers.css";

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";

const Customers: React.FC<{ time: number; queuesNumber: number }> = ({
  time,
  queuesNumber,
}) => {
  const dispatch = useDispatch();

  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);
  const waitingCustomers = useSelector((state: RootState) => state.customersSlice.customersState);

  const BuildQueues = (queuesState: object) => {
    let queuesArray = [];
    for (let i = 1; i <= queuesNumber; i++) {
      // @ts-ignore
      queuesArray.push(queuesState[`queue${i}State`]);
    }
    return queuesArray;
  };
  const queues = BuildQueues(allQueuesState);
  useEffect(() => {
    const firstCustomer = waitingCustomers[0];
    const fullQueue = 5;

    //check if there is availble space in one of the queues
    const availableSlot = !!queues.filter((queue) => queue.length < 5);



    const shortestQueue = queues.reduce(function(p,c) {return p.length>c.length?c:p;},{length:Infinity});
    const shortestQueueIndex = queues.indexOf(shortestQueue) + 1;


    if (availableSlot && time != 0 && time % 2 == 0) {
      dispatch(customersActions.takeOrder());


      dispatch(queuesActions.addToQueue({firstCustomer, queue: `queue${shortestQueueIndex}State`}))}
  }, [time]);

  const queuesCountArray = Array.from(
    { length: queuesNumber },
    (_, i) => i
  );

  const queueComponent = queuesCountArray.map((number) => (
    <QueueCard inUse={true} queue={queues[number]} />
  ));

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>Customers Queues</div>
      <div className={"queues_container"}>{queueComponent}</div>
    </div>
  );
};

export default Customers;
