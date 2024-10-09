import React, { useState } from 'react'

export default function Form(props) {
    const handleonClick=()=>{
        const newText=text.toUpperCase();
        setText(newText)
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const handleLowClick=()=>{
        const newText=text.toLowerCase();
        setText(newText)
    }
    const handleRvClick=()=>{
        const newText=text.split(/[ ]+/)
        setText(newText.join(""))
    }
    const[text,setText]=useState("Enter your Text")
  return (
      <div className='container'>
      <h1>{props.heading}</h1>

        <div className>
            <textarea className="form-control" value={text} id="mybox" onChange={handleonchange} rows="8"></textarea>
        </div> 
    <button className="btn btn-primary" onClick={handleonClick}>Change to upperCase</button>
    <button className="btn btn-primary" onClick={handleLowClick}>Change to LowerCase</button>
    <button className="btn btn-primary" onClick={handleRvClick}>Change to RemoveSpace</button>
  </div>
    
  )
}
