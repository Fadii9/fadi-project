import React from 'react';
import { useDispatch, useSelector} from "react-redux"

import "./DeliveryCard.css";

import {delivery1Actions} from "../../store/delivery1"



const DeliveryCard : React.FC<{ slotNumber: number, inUse : boolean }> = ({ slotNumber , inUse }) => {


    // @ts-ignore
    const delivery1 = useSelector((state) => state.delivery1Slice.delivery1State);

    let emptyDelivery = JSON.stringify(delivery1) === '{}';


    return (
        inUse?
        <div className={"delivery"}>
            <div className={"delivery_text"}>Delivery #{slotNumber}</div>
            <div className={"delivery_update"}>
                Order ID: {delivery1.id} <br/>
                Delivery Time:
            </div>
            <div className={"delivery_time"}>00:00:00</div>
            <div className={emptyDelivery? "delivery_screen empty" : "delivery_screen"}>
                {emptyDelivery? "Waiting..." : "Delivering"}
            </div>
        </div> :
            <div className={"delivery not_in_use"}>
                Not In Use
            </div>
    )
}

export default DeliveryCard;