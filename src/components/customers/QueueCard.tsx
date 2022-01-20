import React from 'react';
import "./QueueCard.css";


const QueueCard:React.FC = () => {

    return (
        <div className={"queue"}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

export default QueueCard;