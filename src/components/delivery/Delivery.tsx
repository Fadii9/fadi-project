import React from 'react';
import "./Delivery.css"

import DeliveryCard from "./DeliveryCard"

const Delivery: React.FC = () => {

    return (
        <div className={"delivery_status"}>
            <div className={"delivery_container_text"}>Delivery Status</div>
                <div className={"delivery_status_container"}>
                    <DeliveryCard slotNumber={1}/>
                    <DeliveryCard slotNumber={2}/>
                    <DeliveryCard slotNumber={3}/>
            </div>
        </div>
    )
}

export default Delivery;