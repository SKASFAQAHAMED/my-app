import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "black"
      showAlert("Dark Mode Enable", "success")
    } else {
      setMode("light")
      document.body.style.background = "light"
      showAlert("Light Mode Enable", "success")
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar nav="Welcome" home="Helloooooooo" mode={mode} toggleMode={toggleMode} />
        <Alert sendAlert={alert} />

        <div className="App">
          <header className="App-header">
            <div className="container">


              <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/" element={<TextForm heading="Your text is her" mode={mode} SendshowAlert={showAlert} />} />

              </Routes>

            </div>



            <img src={logo} className="App-logo" alt="logo" />
            <p> Edit <code>src/App.js</code> and save to reload.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> {" "} Hello Asfaq Learn React{" "} </a>
          </header>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
