import React , {useEffect} from 'react';
import { useTimer } from 'use-timer';


import "./Restaurant.css";

import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";


const Restaurant : React.FC = () => {
    const { time, start, pause, reset, status } = useTimer({autostart : false});



    return (
        <div className={"container"}>
            <div className={"buttons_container"}>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={() => window.location.reload()}>Reset</button>
            </div>
            <div className={"container__left"} >
                <Customers time={time}/>
                <Delivery time={time} />
            </div>
            <Production time={time}/>
        </div>
    )
}

export default Restaurant;