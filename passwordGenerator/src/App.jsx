import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharcter, setSpecialCharcter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef=useRef(null)
  const copyPasword=()=>{
      passwordRef.current?.select();
      passwordRef.current.setSelectionRange(0,30)
      window.navigator.clipboard?.writeText(password)
  }

  const passwordGenerator =useCallback(()=>{
    let password=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str+='1234567890'
    }
    if(specialCharcter){
      str+='!£$%^&*(){}[]#~'
    }

    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1);
      password+=str.charAt(index)
    }
    setPassword(password)
  },[length,numberAllowed,specialCharcter,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,specialCharcter])
  return (
    <div className="bg-pink-300  p-4 rounded-lg w-[500px] mx-auto my-4">
      <h1 className="font-semibold text-center">password Generator</h1>
      <div className="input_feild my-2">
        <input type="text" className="w-[80%] p-2" readOnly value={password} ref={passwordRef}/>
        <button className="bg-blue-300 hover:bg-blue-600 duration-[.5s] text-white w-[20%] p-2" onClick={copyPasword}>
          Copy
        </button>
      </div>
      <div className="condition flex flex-wrap justify-between">
        <input
          type="range"
          min={0}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length :{length}</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {setNumberAllowed(!numberAllowed)}}
        />
        <label>Number </label>
        <input 
          type="checkbox" 
          defaultChecked={specialCharcter}
          onChange={() => {setSpecialCharcter(!specialCharcter)}}
        />
        <label>Special Charcter</label>
      </div>
    </div>
  );
}

export default App;
