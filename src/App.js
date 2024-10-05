// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Form from './component/Form';

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
     <Navbar title="Aspirant" mode={mode} togglebtn={togglebtn}/>
     <Form heading="Write your Text here"/>
    </div>
  );
}

export default App;
