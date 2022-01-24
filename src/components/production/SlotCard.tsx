import React ,{useState ,useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux"

import "./SlotCard.css";

import mealsData from "../../data/mealsData";
import ingsData from "../../data/ingredientsData";

import {slot1Actions} from "../../store/slot1"
import {queue1Actions} from "../../store/queue1"



const SlotCard : React.FC<{inUse : boolean, time : number}> = ({inUse , time}) => {
    const dispatch = useDispatch();
    let estTime = 0;


    // @ts-ignore
    const slot1 = useSelector(state => state.slot1Slice.slot1State);
    // @ts-ignore
    const queue1 = useSelector(state => state.queue1Slice.queue1State);

    let emptySlot = JSON.stringify(slot1) === '{}';


    if (queue1.length > 1 && emptySlot) {
        dispatch(slot1Actions.addToSlot(queue1[0]))
        dispatch(queue1Actions.removeFromQueue1())
        emptySlot = true;

    }
    let showIngs;
    if (!emptySlot && estTime == 0) {
        let meals = slot1.order
        let mealsIngs = meals.map((meal :string) => {
            for (let i in mealsData){
                if (mealsData[i].mealName == meal)
                    return mealsData[i].ingredients
            }
        })

        showIngs = mealsIngs.join(",");
        mealsIngs[0].map((ing : string) => {
        estTime += ingsData.find(o => o.ing === ing)!.prepTime;
        })



    }


    return (
        inUse?
            <div className={"slot"}>
                <div className={"slot_image_container"}>
                    {emptySlot? "Empty Slot" : <img src="https://granddigital.com.au/wp-content/uploads/2017/08/Hamburger-Thumbnail-1.jpg" alt="Preparing!" className={"slot_image"} />}

                </div>
                <div className={"slot_details"}>
                    <span className={"title"}>Order ID: </span>{slot1.id} <br/>
                    <span className={"title"}>Producing: </span>{slot1.order} <br/>
                    <span className={"title"}>Estimated Time: </span> {estTime != 0 && `${estTime} Seconds` }
                </div>
                <div className={"slot_status"}>
                    <div className={"slot_status_text"}>Production Status:</div>
                    <div className={"slot_status_ings"}>{showIngs}</div>
                </div>
            </div> :
            <div className={"slot"}>Not In Use</div>
    )
}

export default SlotCard;