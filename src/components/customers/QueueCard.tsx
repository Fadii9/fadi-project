import React from "react";
import "./QueueCard.css";

import { CUSTOMERS_QUEUE_TEXT } from "./constants/strings";
import { Customer } from "../../store";

interface QueueCardProps {
  key: number;
  queue: Customer[];
  inUse: boolean;
}

const QueueCard: React.FC<QueueCardProps> = ({ key, queue, inUse }) => {
  let firstInqueue, firstName;

  if (queue.length > 0) {
    firstInqueue = queue[0];
    firstName = firstInqueue.id;
  }

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
    >
      {firstName}
    </div>
  )

  return inUse ? (
    <div className={"queue"}>{circles}</div>
  ) : (
    <div className={"queue"}>{CUSTOMERS_QUEUE_TEXT.NOT_IN_USE}</div>
  );
};

export default QueueCard;
