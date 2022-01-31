import React, {useEffect, useLayoutEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"
import { RootState } from "../../store/index"


import QueueCard from "./QueueCard";
import "./Customers.css";

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";

const Customers: React.FC<{ time: number }> = ({ time }) => {
  const dispatch = useDispatch();

  const queue1 = useSelector(
    (state: RootState) => state.queuesSlice.queue1State
  );
  const queue2 = useSelector(
    (state: RootState) => state.queuesSlice.queue2State
  );
  const queue3 = useSelector(
    (state: RootState) => state.queuesSlice.queue3State
  );
  const waitingCustomers = useSelector(
    (state: RootState) => state.customersSlice.customersState
  );

  useEffect(() => {
    const firstCustomer = waitingCustomers[0];
    const fullQueue = 5;

    const availableSlot = queue1.length < fullQueue || queue2.length < fullQueue ||queue3.length < fullQueue
    const allQueues = [queue1 , queue2, queue3]
    const shortestQueue = allQueues.reduce(function(p,c) {return p.length>c.length?c:p;});

    if (availableSlot && time != 0 && time%2 == 0) {
      dispatch(customersActions.takeOrder());


      switch (shortestQueue){
        case queue1 :
          dispatch(queuesActions.addToQueue1(firstCustomer));
          break;
        case queue2 :
          dispatch(queuesActions.addToQueue2(firstCustomer));
          break;
        case queue3 :
          dispatch(queuesActions.addToQueue3(firstCustomer));
          break
      }
    }
  }, [time]);

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>Customers Queues</div>
      <div className={"queues_container"}>
        <QueueCard inUse={true} queue={queue1} />
        <QueueCard inUse={true} queue={queue2} />
        <QueueCard inUse={true} queue={queue3} />
      </div>
    </div>
  );
};

export default Customers;