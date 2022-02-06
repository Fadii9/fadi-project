import React from "react";
import { useTimer } from "use-timer";

import "./Restaurant.css";

import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";

import {
  queuesNumber,
  slotsNumber,
  deliveriesNumber,
} from "../../data/stationsNumber";
import { RESTURANT_BUTTON_TEXT } from "./constants/strings";

const Restaurant: React.FC = () => {
  const timeInterval = 500;
  const { time, start, pause } = useTimer({
    autostart: false,
    interval: timeInterval,
  });

  return (
    <div className={"container"}>
      <div className={"buttons_container"}>
        <button onClick={start}>{RESTURANT_BUTTON_TEXT.START}</button>
        <button onClick={pause}>{RESTURANT_BUTTON_TEXT.PAUSE}</button>
        <button onClick={() => window.location.reload()}>
          {RESTURANT_BUTTON_TEXT.RESET}
        </button>
      </div>
      <div className={"container__left"}>
        <Customers time={time} queuesNumber={queuesNumber} />
        <Delivery time={time} deliveriesNumber={deliveriesNumber} />
      </div>
      <Production time={time} slotsNumber={slotsNumber} />
    </div>
  );
};

export default Restaurant;
