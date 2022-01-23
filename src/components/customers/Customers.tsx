import React, {useEffect, useLayoutEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"

import QueueCard from "./QueueCard"
import "./Customers.css";

import {queue1Actions} from "../../store/queue1"
import {customersActions} from "../../store/customers"


const Customers:React.FC = () => {
    const dispatch = useDispatch()

    // @ts-ignore
    const queue1 = useSelector(state => state.queue1Slice.queue1State);
    // @ts-ignore
    const waitingCustomers = useSelector(state => state.customersSlice.customersState);

        useEffect ( () => {
            const firstCustomer = waitingCustomers[0];
            console.log("Queue1: " , queue1);
            console.log("First customer: ", firstCustomer)

            if (queue1.length <= 4) {
                setTimeout(() => {
                    dispatch(queue1Actions.addToQueue1(firstCustomer))
                }, 2000);
                dispatch(customersActions.takeOrder())
            }

            // if (queue1.length > 0) {
            //     setTimeout(() => {
            //         dispatch(queue1Actions.removeFromQueue1())
            //     }, 5000);
            // }




        },[queue1])
    

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