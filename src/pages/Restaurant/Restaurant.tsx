import React, { useEffect } from "react";
import { useTimer } from "use-timer";

import "./Restaurant.css";

import { restaurantText } from "../../data/stringsFile"

import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";


import {
  queuesNumber,
  slotsNumber,
  deliveriesNumber,
} from "../../data/stationsNumber";

const Restaurant: React.FC = () => {
  let timeInterval = 500;
  const { time, start, pause, reset, status } = useTimer({
    autostart: false,
    interval: timeInterval,
  });

  return (
    <div className={"container"}>
      <div className={"buttons_container"}>
        <button onClick={start}>{ restaurantText.START_BUTTON_TEXT }</button>
        <button onClick={pause}>{ restaurantText.PAUSE_BUTTON_TEXT }</button>
        <button onClick={() => window.location.reload()}>{ restaurantText.RESET_BUTTON_TEXT }</button>
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
