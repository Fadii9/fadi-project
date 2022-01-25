import React from 'react';
import "./Restaurant.css";
import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";



const Restaurant: React.FC = () => {

    return (
        <div className={"container"}>
            <div className={"container__left"} >
                <Customers />
                <Delivery />
            </div>
            <Production/>
        </div>
    )
}

export default Restaurant;