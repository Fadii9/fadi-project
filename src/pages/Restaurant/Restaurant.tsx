import React from 'react';
import "./Restaurant.css";
import Delivery from "../../components/Delivery";
import Customers from "../../components/Customers";
import Production from "../../components/Production";



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