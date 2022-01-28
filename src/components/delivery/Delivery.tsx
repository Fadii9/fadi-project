import React, { useEffect } from "react";
import { RootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { deliveriesActions } from "../../store/deliveries";

import "./Delivery.css";

import DeliveryCard from "./DeliveryCard";

const Delivery: React.FC<{ time: number }> = ({ time }) => {
  const dispatch = useDispatch();

  //delivery stations states
    const delivery1 = useSelector(
    (state: RootState) => state.deliveriesSlice.delivery1State
  );
  const delivery2 = useSelector(
    (state: RootState) => state.deliveriesSlice.delivery2State
  );
  const delivery3 = useSelector(
    (state: RootState) => state.deliveriesSlice.delivery3State
  );

  //check each state if empty
  const [delivery1isEmpty, delivery2isEmpty, delivery3isEmpty] = [
    !delivery1.id,
    !delivery2.id,
    !delivery3.id,
  ];

//set the availabe delivery station
  useEffect(() => {
      if (delivery1isEmpty) {
          dispatch(deliveriesActions.setAvailbeDelivery(1));
      } else if (delivery2isEmpty) {
          dispatch(deliveriesActions.setAvailbeDelivery(2));
      } else if (delivery3isEmpty) {
          dispatch(deliveriesActions.setAvailbeDelivery(3));
      }
  }, [delivery1, delivery2, delivery3])


  return (
    <div className={"delivery_status"}>
      <div className={"delivery_container_text"}>Delivery Status</div>
      <div className={"delivery_status_container"}>
        <DeliveryCard time={time} deliveryNumber={"1"} inUse={true} />
        <DeliveryCard time={time} deliveryNumber={"2"} inUse={true} />
        <DeliveryCard time={time} deliveryNumber={"3"} inUse={true} />
      </div>
    </div>
  );
};

export default Delivery;
