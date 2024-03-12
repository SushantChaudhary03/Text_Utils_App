import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.mjs';
import About from './components/About';
import Main from './components/Main.mjs';
import Alert from './components/Alert';
import Services from './components/Services';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('bg-white text-black');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'bg-white text-black') {
      setMode("bg-black text-white");
      document.body.style.backgroundColor = "#595959";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "Success :");
      document.querySelector(".input").style.border = "2px solid white";
    }
    else {
      setMode("bg-white text-black");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "Success :");
      document.querySelector(".input").style.border = "2px solid black";
    }
  }

  return (
    <>
      <Router>
        <Navbar about="About Us" help="Help" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>

          <Route exet path="/" element={<Main showAlert={showAlert} />} />
          <Route exet path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
          <Route exet path="/services" element={<Services/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
