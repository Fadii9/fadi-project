import React, {useEffect} from 'react';
import "./Customers.css";

import { useDispatch, useSelector} from "react-redux"
import {customersActions} from "../../store/customers"

import QueueCard from "./QueueCard"


const Customers:React.FC = () => {
    const dispatch = useDispatch()


    // @ts-ignore
    const {queue1, queue2 , queue3 ,waitingCustomers} = useSelector(state => state.customers);

    const firstCustomer = waitingCustomers[0];

    dispatch(customersActions.addToQueue1(firstCustomer))

    return (
        <div className={"customers_status"}>
            <div className={"customers_text"}>Customers Queues</div>
            <div className={"queues_container"}>
                <QueueCard/>
                <QueueCard/>
                <QueueCard/>
            </div>
        </div>
    )
}

export default Customers;