// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';

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
    </div>
  );
}

export default App;
