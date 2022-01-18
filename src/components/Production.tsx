import React from 'react';
import "./Production.css"


const Production:React.FC = () => {

    return (
        <div className={"Production_status"}>
            <div className={"Production_text"}>Production Slots</div>
            <div className={"slot_container"}>
                <div className={"slot slot1"}>
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
                <div className={"slot slot2"}>
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
                    </div>                </div>
                <div className={"slot slot3"}>
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
                    </div>                </div>
            </div>
        </div>
    )
}

export default Production;