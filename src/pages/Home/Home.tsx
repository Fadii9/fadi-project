import React, { useState } from "react";
import "./Home.css";
import allData from "../../data/allData";
import { useNavigate } from "react-router-dom";
import { HOME_TEXT } from "./constants/strings"

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [json, setJson] = useState('Click on "Show JSON" button');

  const clickHandler = () => {
    setJson(JSON.stringify(allData, null, 4));
  };

  return (
    <div className={"main-container"}>
      <textarea value={json}></textarea>
      <div className={"buttons-container"}>
        <button onClick={clickHandler}>{ HOME_TEXT.JSON_BUTTON }</button>
        <button onClick={() => navigate("/restaurant")}>
            { HOME_TEXT.SIMULATION_BUTTON }
        </button>
      </div>
    </div>
  );
};

export default Home;
