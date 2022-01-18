import React from 'react';
import "./Delivery.css"



const Delivery:React.FC = () => {

    return (
        <div className={"delivery_status"}>
            <div className={"delivery_container_text"}>Delivery Status</div>
                <div className={"delivery_status_container"}>
                    <div className={"delivery delivery1"}>
                        <div className={"delivery_text"}>Delivery #1</div>
                        <div className={"delivery_update"}>
                            Order ID: ___ <br/>
                            Delivery Time:
                        </div>
                        <div className={"delivery_time"}>00:00:00</div>
                        <div className={"delivery_screen"}>Waiting...</div>
                    </div>
                    <div className={"delivery delivery2"}>
                        <div className={"delivery_text"}>Delivery #2</div>
                        <div className={"delivery_update"}>
                            Order ID: ___ <br/>
                            Delivery Time:
                        </div>
                        <div className={"delivery_time"}>00:00:00</div>
                        <div className={"delivery_screen"}>Waiting...</div>
                    </div>
                    <div className={"delivery delivery3"}>
                        <div className={"delivery_text"}>Delivery #3</div>
                        <div className={"delivery_update"}>
                            Order ID: ___ <br/>
                            Delivery Time:
                        </div>
                        <div className={"delivery_time"}>00:00:00</div>
                        <div className={"delivery_screen"}>Waiting...</div>
                    </div>

            </div>
        </div>
    )
}

export default Delivery;