import React from 'react';
import "./QueueCard.css";


const QueueCard : React.FC<{queue : [], inUse :boolean}> = ({queue, inUse}) => {

    return (
        inUse?
        <div className={"queue"}>
            <div className={queue.length > 4 ? `circle green` : "circle"}></div>
            <div className={queue.length > 3 ? `circle green` : "circle"}></div>
            <div className={queue.length > 2 ? `circle green` : "circle"}></div>
            <div className={queue.length > 1 ? `circle green` : "circle"}></div>
            <div className={queue.length > 0 ? `circle green` : "circle"}></div>
        </div> :
            <div className={"queue"}>
                Not In Use
            </div>
    )
}

export default QueueCard;