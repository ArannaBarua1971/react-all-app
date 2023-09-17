import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let countIncrease=()=>{
    setCount(count+1)
  }

  return (
    <>
        <p>counter :{count}</p>
        <button onClick={countIncrease}>click</button>
        <p>counter :{count}</p>
    </>
  )
}

export default App
