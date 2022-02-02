import React from "react";
import "./QueueCard.css";
import { queueText } from "../../data/stringsFile";

interface QueueCardProps {
  key: number;
  queue: { id: string }[];
  inUse: boolean;
}

const QueueCard: React.FC<QueueCardProps> = ({ key, queue, inUse }) => {
  let firstInqueue, firstName;

  if (queue.length > 0) {
    firstInqueue = queue[0];
    firstName = firstInqueue.id;
  }

  return inUse ? (
    <div className={"queue"}>
      <div className={queue.length > 4 ? `circle green` : `circle`}></div>
      <div className={queue.length > 3 ? `circle green` : `circle`}></div>
      <div className={queue.length > 2 ? `circle green` : `circle`}></div>
      <div className={queue.length > 1 ? `circle green` : `circle`}></div>
      <div className={queue.length > 0 ? `circle green` : `circle`}>
        {firstName}
      </div>
    </div>
  ) : (
    <div className={"queue"}>{queueText.NOT_IN_USE}</div>
  );
};

export default QueueCard;
