import React from 'react';
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom'


function App() {

  return (
      <Router>
    <div className="App">
        <header className={"main-header"}>Fadi's Restaurant</header>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/restaurant" element={<Restaurant/>} />

        </Routes>

    </div>
      </Router>
  );
}

export default App;
