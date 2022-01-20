import React from 'react';
import "./Production.css"

import Slot from "./SlotCard"

const Production:React.FC = () => {

    return (
        <div className={"Production_status"}>
            <div className={"Production_text"}>Production Slots</div>
            <div className={"slot_container"}>
                <Slot/>
                <Slot/>
                <Slot/>
            </div>
        </div>
    )
}

export default Production;