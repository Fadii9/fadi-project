import React from "react";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";

import { APP_TEXT } from "./constants/strings"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className={"main-header"}>{APP_TEXT.RESTAURANT_NAME}</header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
