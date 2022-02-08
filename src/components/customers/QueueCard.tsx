import React, { useState, useEffect } from "react";
import "./QueueCard.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings";
import { Customer, RootState } from "../../store";
import { queuesActions } from "../../store/queues";
import { useDispatch, useSelector } from "react-redux";

interface QueueCardProps {
  queueNumber: number;
  queue: Customer[];
}

const QueueCard: React.FC<QueueCardProps> = ({ queueNumber, queue }) => {
  const dispatch = useDispatch();
  let firstInqueue, firstName;
  const [editing, setEditing] = useState(false);
  const allQueuesState = useSelector((state: RootState) => state.queuesSlice);

  if (queue.length > 0) {
    firstInqueue = queue[0];
    firstName = firstInqueue.id;
  }

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const removeCustomer = () => {
    dispatch(queuesActions.removeFromQueue({ queue: queueNumber + 1 }));
    setEditing((prev) => !prev);
  };

  const cancelQueue = () => {
    dispatch(queuesActions.cancelQueue({ queue: queueNumber + 1 }));
    setEditing((prev) => !prev);
  };

  const circlesCount = 5;
  let circles = [];

  for (let i = circlesCount - 1; i >= 0; i--) {
    circles.push(
      <div className={queue.length > i ? `circle green` : `circle`}>
        {i === 0 && firstName}
      </div>
    );
  }

  circles[circles.length - 1] = (
    <div
      className={
        queue.length > 0
          ? queue[0].vip
            ? `circle red`
            : `circle green`
          : "circle"
      }
      onClick={() => {
        queue.length > 0 && !queue[0].vip && toggleEditing();
      }}
    >
      {firstName}
    </div>
  );

  return !editing ? (
    <div className={"queue"}>{circles}</div>
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
        className={"queue-button"}
        onClick={() => {
          cancelQueue();
        }}
      >
        Cancel Queue
      </button>

      <button
        onClick={() => {
          removeCustomer();
        }}
        className={"queue-button"}
      >
        Remove Customer
      </button>
    </div>
  );
};

export default QueueCard;
