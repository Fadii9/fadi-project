import React from 'react';
import "./DeliveryCard.css";


const DeliveryCard: React.FC<{ slotNumber: number }> = ({slotNumber}) => {

    return (
        <div className={"delivery"}>
            <div className={"delivery_text"}>Delivery #{slotNumber}</div>
            <div className={"delivery_update"}>
                Order ID: ___ <br/>
                Delivery Time:
            </div>
            <div className={"delivery_time"}>00:00:00</div>
            <div className={"delivery_screen"}>Waiting...</div>
        </div>
    )
}

export default DeliveryCard;