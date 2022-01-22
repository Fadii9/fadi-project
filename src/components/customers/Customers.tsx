import React, {useEffect, useLayoutEffect} from 'react';
import "./Customers.css";

import { useDispatch, useSelector} from "react-redux"
import {queue1Actions} from "../../store/queue1"

import QueueCard from "./QueueCard"


const Customers:React.FC = () => {
    const dispatch = useDispatch()

    // @ts-ignore
    const queue1 = useSelector(state => state.queue1Slice.queue1State);

    useEffect ( () => {
        
        
        console.log("Before dispach: " , queue1);
        
        dispatch(queue1Actions.addToQueue1({
            id: "c1",
            name: "Customer1",
            order: ["Hamburger", "Salad"]
        }))
        
                       


    },[])
    
    console.log("After dispach: " , queue1);

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