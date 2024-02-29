import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from './components/About'
import Alert from "./components/Alert";


function App() {
  const [mode,setMode]=useState('light');
  const [msg,setMsg]=useState(null);

  function showAlert(msg){
    setMsg(msg);
    setTimeout(()=>{
      setMsg(null)
    },3000)
  }

  useEffect(()=>{
    let curr_mode=localStorage.getItem('mode');
    setMode(curr_mode);
    showAlert('Switched to '+ curr_mode + ' mode');

  },[])

  const toggleDark=()=>{
    setMode('dark');
    localStorage.setItem('mode','dark');
    showAlert('Switched to dark mode');
  }
  const toggleLight=()=>{
    setMode('light');
    localStorage.setItem('mode','light');
    showAlert('Switched to light mode');

  }
  const togglePink=()=>{
    setMode('pink');
    localStorage.setItem('mode','pink');
    showAlert('Switched to pink mode');

  }
  const toggleBlue=()=>{
    setMode('blue');
    localStorage.setItem('mode','blue');
    showAlert('Switched to blue mode');

  }


  return (
    <div className={`body theme-${mode}`}>
    <BrowserRouter>
      <Navbar navImg="../favicon.png" title="TextCraft" link1="HOME" link2="ABOUT" toggleDark={toggleDark} toggleLight={toggleLight} togglePink={togglePink} toggleBlue={toggleBlue} />
      
      <div className="container page-content">
        <Routes>
          <Route exact path="/" element={<TextArea heading="Enter your text to here." showAlert={showAlert}/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes> 
      </div>

    </BrowserRouter>
    <Alert msg={msg}  />
    </div>
  );
}

export default App;

