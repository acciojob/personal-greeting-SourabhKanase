
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [value,setvalue]=useState("");
  return (
    <div>
        <h1>Enter your name:</h1>
        <input type="text" onChange={(e)=>{setvalue(e.target.value)}}/>

        {
          <p>Hello {value}!</p>
        }
    </div>
  )
}

export default App
