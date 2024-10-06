// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Accordian from './component/Accordian';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const togglebtn=()=>{
    if(mode==="dark"){
      setmode("light")
    }
    else{
      setmode("dark")
    }
  }
  const[mode,setmode]=useState("dark");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar title="Aspirant" mode={mode} togglebtn={togglebtn}/>
      
      <div className='container'>

      <Routes>
          <Route exact path="/accordian" element={<Accordian/>}></Route>
          <Route exact path="/"
            element={<Form heading="Write your Text here"/>}>
            
          </Route>
        </Routes>
    </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
