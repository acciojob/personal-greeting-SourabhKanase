
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [value,setvalue]=useState("");
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=>{setvalue(e.target.value)}}/>

        {
          <p>Hello {value}!</p>
        }
    </div>
  )
}

export default App
