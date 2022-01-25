import React from 'react';
import "./SlotCard.css";

const SlotCard: React.FC = () => {
    return (
        <div className={"slot"}>
            <div className={"slot_image_container"}>
                <img className={"slot_image"}/>
            </div>
            <div className={"slot_details"}>
                Order ID: __ <br/>
                Producing: _____ <br/>
                Estimated Time: <br/> HH:MM:SS
            </div>
            <div className={"slot_status"}>
                <div className={"slot_status_text"}>Production Status:</div>
                <div className={"slot_status_ings"}></div>
            </div>
        </div>
    )
}

export default SlotCard;