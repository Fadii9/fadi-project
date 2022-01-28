import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

import { useTimer } from "use-timer";

import "./Restaurant.css";

import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";

const Restaurant: React.FC = () => {
  let timeInterval = 1000;
  const { time, start, pause, reset, status } = useTimer({
    autostart: false,
    interval: timeInterval,
  });

  const waitingCustomers = useSelector(
    (state: RootState) => state.customersSlice.customersState
  );

  return waitingCustomers.length > 0 ? (
    <div className={"container"}>
      <div className={"buttons_container"}>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={() => window.location.reload()}>Reset</button>
      </div>
      <div className={"container__left"}>
        <Customers time={time} />
        <Delivery time={time} />
      </div>
      <Production time={time} />
    </div>
  ) : (
    <div className={"container"}>
      <img
        src={
          "https://cdn.vox-cdn.com/thumbor/c9bipEBuVa1OnSyZN8HI_Mp2910=/0x0:1500x996/920x613/filters:focal(630x378:870x618):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66850835/ComingAttractions_Close_6.0.jpg"
        }
        alt="CLOSED!"
      />
    </div>
  );
};

export default Restaurant;
