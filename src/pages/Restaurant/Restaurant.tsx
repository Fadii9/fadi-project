import React from 'react';
import "./Restaurant.css";
import Delivery from "../../components/Delivery";
import Customers from "../../components/Customers";



const Restaurant: React.FC = () => {

    return (
        <div className={"container"}>
            <div className={"container__left"} >
                <Customers />
                <Delivery />
            </div>
            <div className={"container__right"}>Production Slots</div>
        </div>
    )
}

export default Restaurant;