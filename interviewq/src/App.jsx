import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [a,setA]=useState(1)
  let [mul,setMul]=useState(5)
  let multiply=a*mul
  const change=()=>{
    setA(++a)
  }
  return (
    <>
      <div>
        {a} and {multiply}
      </div>
      <input type="number" onChange={(e)=>setMul(e.target.value)}/>
      <button onClick={()=> change()}>change</button>
    </>
  );
}

export default App;
