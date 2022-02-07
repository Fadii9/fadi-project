import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Customer, RootState } from "../../store/index";

import QueueCard from "./QueueCard";
import "./Customers.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings";

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";
import { buildQueuesArray } from "../utils/functions";

const Customers: React.FC<{ time: number; queuesNumber: number }> = ({
  time,
  queuesNumber,
}) => {
  const dispatch = useDispatch();
  const maximumQueueCapacity = 5;
  let queuesCountArray: number[] = [];

  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);
  const waitingCustomers = useSelector(
    (state: RootState) => state.customersSlice.customersState
  );

  const queues: Customer[][] = buildQueuesArray(allQueuesState, queuesNumber);

  useEffect(() => {
    const availablePlaceInQueue: boolean = !!queues.filter(
      (queue) => queue?.length < maximumQueueCapacity
    );
    const shortestQueue: Customer[] = queues.reduce(function (queue1, queue2) {
      return queue1?.length > queue2?.length ? queue2 : queue1;
    });
    const shortestQueueIndex: number = queues.indexOf(shortestQueue) + 1;
    const readyToAddCustomer: boolean =
      time != 0 &&
      availablePlaceInQueue &&
      waitingCustomers.length > 0 &&
      time % 2 == 0;

    if (readyToAddCustomer) {
      const firstCustomer = waitingCustomers[0];

      if (firstCustomer.vip) {
        dispatch(customersActions.takeOrder());
        dispatch(
          queuesActions.addVip({
            firstCustomer: { ...firstCustomer, addedTime: 0 },
            queue: shortestQueueIndex,
          })
        );
      } else {
        dispatch(customersActions.takeOrder());
        dispatch(
          queuesActions.addToQueue({
            firstCustomer: { ...firstCustomer, addedTime: time },
            queue: shortestQueueIndex,
          })
        );
      }
    }
  }, [time]);

  queuesCountArray = Array.from({ length: queuesNumber }, (_, i) => i);

  const queuesStateObjectKeys = Object.keys(allQueuesState);
  const filteredQueuesCountArray = queuesCountArray.filter((element) => {
    return queuesStateObjectKeys.indexOf((element + 1).toString()) >= 0;
  });

  const queuesComponents = filteredQueuesCountArray.map((number) => (
    <QueueCard
      key={number}
      queueNumber={number}
      inUse={true}
      queue={queues[number]}
    />
  ));

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>{CUSTOMERS_QUEUE_TEXT.TITLE}</div>
      <div className={"queues_container"}>{queuesComponents}</div>
    </div>
  );
};

export default Customers;
