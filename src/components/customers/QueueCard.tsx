import React, { useState } from "react";
import "./QueueCard.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings";
import { Customer } from "../../store";
import { queuesActions } from "../../store/queues";
import { useDispatch } from "react-redux";

interface QueueCardProps {
  QueueNumber: number;
  queue: Customer[];
  inUse: boolean;
}

const QueueCard: React.FC<QueueCardProps> = ({ QueueNumber, queue, inUse }) => {
  const dispatch = useDispatch();
  let firstInqueue, firstName;
  const [editing, setEditing] = useState(false);

  if (queue.length > 0) {
    firstInqueue = queue[0];
    firstName = firstInqueue.id;
  }

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const RemoveCustomer = () => {
    dispatch(queuesActions.removeFromQueue({ queue: QueueNumber + 1 }));
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
        queue.length > 0 && toggleEditing();
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
