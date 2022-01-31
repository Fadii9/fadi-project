import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { queuesActions } from "../../store/queues";

import "./QueueCard.css";

type QueueNumber = 1 | 2 | 3;
type QueueState = `removeFromQueue${QueueNumber}`;

const QueueCard: React.FC<{
  queueNumber: QueueNumber;
  queue: { id: string, vip?: boolean }[];
  inUse: boolean;
}> = ({ queue, inUse, queueNumber }) => {
  const dispatch = useDispatch();
  let emptyQueue = JSON.stringify(queue) === "{}";
  let firstInqueue, firstName = "";
  const [editing, setEditing] = useState(false);
  let queueAction: QueueState = `removeFromQueue${queueNumber}`
  if (queue.length > 0) {
    firstInqueue = queue[0];
    firstName = firstInqueue.id;
      localStorage.setItem(`queue${queueNumber}`, JSON.stringify(queue));

  }
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const RemoveCustomer = () => {
      dispatch(queuesActions[queueAction]());
    setEditing((prev) => !prev);
  };


    return !editing ? (
    <div className={"queue"}>
      <div className={queue.length > 4 ? `circle green` : "circle"}></div>
      <div className={queue.length > 3 ? `circle green` : "circle"}></div>
      <div className={queue.length > 2 ? `circle green` : "circle"}></div>
      <div className={queue.length > 1 ? `circle green` : "circle"}></div>
      <div
        className={queue.length > 0 ? queue[0].vip? `circle red`: `circle green` : "circle"}
        onClick={() => {
          queue.length > 0 && toggleEditing();
        }}
      >
        {firstName}
      </div>
    </div>
  ) : (
    <div className={"queue"}>
      <button
        className={"queue-button"}
        onClick={() => {
          toggleEditing();
        }}
      >
        Back
      </button>

      <button
        onClick={() => {
          RemoveCustomer();
        }}
        className={"queue-button"}
      >
        Remove Customer
      </button>
    </div>
  );
};

export default QueueCard;
