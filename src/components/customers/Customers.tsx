import React, {useEffect, useLayoutEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"

import QueueCard from "./QueueCard"
import "./Customers.css";

import {queue1Actions} from "../../store/queue1"
import {customersActions} from "../../store/customers"

const Customers : React.FC<{time : number}> = ({time}) => {
    const dispatch = useDispatch()

    // @ts-ignore
    const queue1 = useSelector(state => state.queue1Slice.queue1State);
    // @ts-ignore
    const waitingCustomers = useSelector(state => state.customersSlice.customersState);

        useEffect ( () => {
              const firstCustomer = waitingCustomers[0];
               const fullQueue = 5;


               if (queue1.length < fullQueue && time !=0) {
                   // console.log("First customer: ", firstCustomer)
                   dispatch(customersActions.takeOrder())
                   dispatch(queue1Actions.addToQueue1(firstCustomer))
                   // console.log("Queue1: " , queue1);
               }


        }, [time])


    

    return (
        <div className={"customers_status"}>
            <div className={"customers_text"}>Customers Queues</div>
            <div className={"queues_container"}>
                <QueueCard inUse={true} queue={queue1} />
                <QueueCard inUse={false} queue={queue1}/>
                <QueueCard inUse={false} queue={queue1}/>
            </div>
        </div>
    )
}

export default Customers;