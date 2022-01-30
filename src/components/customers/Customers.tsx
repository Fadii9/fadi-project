import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import QueueCard from "./QueueCard";
import "./Customers.css";

import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";

const Customers: React.FC<{ time: number }> = ({ time }) => {
  const dispatch = useDispatch();
  const fullQueue = 5; //full queue length

  //waiting customers state, before getting in queue
  const waitingCustomers = useSelector((state: RootState) => state.customersSlice.customersState);

  //queues states
  const queue1 = useSelector((state: RootState) => state.queuesSlice.queue1State);
  const queue2 = useSelector((state: RootState) => state.queuesSlice.queue2State);
  const queue3 = useSelector((state: RootState) => state.queuesSlice.queue3State);
  const allQueues = [queue1 , queue2, queue3]
  const shortestQueue = allQueues.reduce(function(p,c) {return p.length>c.length?c:p;}); //find shortest queue
  const longestQueue = allQueues.reduce(function(p,c) {return p.length<c.length?c:p;}); //find longest queue

  //check if there is an available space in the queues
  const availableQueue = queue1.length < fullQueue || queue2.length < fullQueue ||queue3.length < fullQueue

// every 2 seconds, insert a new customer to the shortest queue
  useEffect(() => {
    if (waitingCustomers.length > 0){
    let firstCustomer = waitingCustomers[0];

    if (availableQueue && time != 0 && time%2 == 0) {
     dispatch(customersActions.takeOrder());
      localStorage.setItem(`waitingCustomers`, JSON.stringify(waitingCustomers.slice(1)));


      switch (shortestQueue){
        case queue1 :
          dispatch(queuesActions.addToQueue1({
            ...firstCustomer,
            addedTime: time
          }));
          break;
        case queue2 :
          dispatch(queuesActions.addToQueue2({
            ...firstCustomer,
            addedTime: time
          }));
          break;
        case queue3 :
          dispatch(queuesActions.addToQueue3({
            ...firstCustomer,
            addedTime: time
          }));
          break
      }
    }
  }}, [time]);

  return (
    <div className={"customers_status"}>
      <div className={"customers_text"}>Customers Queues</div>
      <div className={"queues_container"}>
        <QueueCard inUse={true} queue={queue1} queueNumber={1}/>
        <QueueCard inUse={true} queue={queue2} queueNumber={2}/>
        <QueueCard inUse={true} queue={queue3} queueNumber={3}/>
      </div>
    </div>
  );
};

export default Customers;
