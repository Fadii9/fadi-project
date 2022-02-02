import React, { useState } from "react";
import "./Home.css";
import allData from "../../data/allData";
import { useNavigate } from "react-router-dom";
import { homeText } from "../../data/stringsFile"

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
        <button onClick={clickHandler}>{ homeText.JSON_BUTTON_TEXT }</button>
        <button onClick={() => navigate("/restaurant")}>
            { homeText.SIMULATION_BUTTON_TEXT }
        </button>
      </div>
    </div>
  );
};

export default Home;
