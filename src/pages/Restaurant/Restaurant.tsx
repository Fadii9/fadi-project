import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTimer } from "use-timer";
import { RootState } from "../../store/index";

import "./Restaurant.css";

// components
import Delivery from "../../components/delivery/Delivery";
import Customers from "../../components/customers/Customers";
import Production from "../../components/production/Production";

// states actions
import { slotsActions } from "../../store/slots";
import { queuesActions } from "../../store/queues";
import { customersActions } from "../../store/customers";
import { deliveriesActions } from "../../store/deliveries";

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  let initialTime;
  let timeInterval = 500;
  let myStorage = window.localStorage;

  if (localStorage.time){
    initialTime = JSON.parse(myStorage.time)
  } else {
    initialTime = 0;
  }

  const { time, start, pause } = useTimer({
    autostart: false,
    initialTime: initialTime,
    interval: timeInterval,
  });

  localStorage.setItem(`time`, JSON.stringify(time));
  console.log(time)


  const waitingCustomers = useSelector(
    (state: RootState) => state.customersSlice.customersState
  );


  useEffect(() => {
    if (myStorage.waitingCustomers) {
      dispatch(
        customersActions.localStorageToWating(
          JSON.parse(myStorage.waitingCustomers)
        )
      );
    }
    if (myStorage.queue1 && myStorage.queue1 != "[]") {
      dispatch(queuesActions.localStorageToQueue1(JSON.parse(myStorage.queue1)));
    }
    if (myStorage.queue2 && myStorage.queue2 != "[]") {
      dispatch(queuesActions.localStorageToQueue2(JSON.parse(myStorage.queue2)));
    }
    if (myStorage.queue3 && myStorage.queue3 != "[]") {
      dispatch(queuesActions.localStorageToQueue3(JSON.parse(myStorage.queue3)));
    }

    if (myStorage.slot1 && myStorage.slot1 != "{}") {
      dispatch(slotsActions.localStorageToSlot1(JSON.parse(myStorage.slot1)));
    }
    if (myStorage.slot2 && myStorage.slot2 != "{}") {
      dispatch(slotsActions.localStorageToSlot2(JSON.parse(myStorage.slot2)));
    }
    if (myStorage.slot3 && myStorage.slot3 != "{}") {
      dispatch(slotsActions.localStorageToSlot3(JSON.parse(myStorage.slot3)));
    }
    if (myStorage.delivery1 && myStorage.delivery1 != "{}") {
      dispatch(deliveriesActions.localStorageToDelivery1(JSON.parse(myStorage.delivery1)));
    }
    if (myStorage.delivery2 && myStorage.delivery2 != "{}") {
      dispatch(deliveriesActions.localStorageToDelivery2(JSON.parse(myStorage.delivery2)));
    }
    if (myStorage.delivery3 && myStorage.delivery3 != "{}") {
      dispatch(deliveriesActions.localStorageToDelivery3(JSON.parse(myStorage.delivery3)));
    }
  }, []);

  return waitingCustomers.length > 0 ? (
    <div className={"container"}>
      <div className={"buttons_container"}>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={() => {window.localStorage.clear() ; window.location.reload()}}>Reset</button>
      </div>
      <div className={"container__left"}>
        <Customers time={time} />
        <Delivery time={time} />
      </div>
      <Production time={time} />
    </div>
  ) : (
    <div className={"container"}>
      <button onClick={() => {window.localStorage.clear() ; window.location.reload()}}>Reset</button>
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
