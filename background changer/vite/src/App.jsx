import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('black')

  const color=['red','green','blue','olive']
  return (
    <div className='w-full h-screen flex justify-center' style={{ backgroundColor:bgColor }}>

      <div className="buttons fixed bottom-[40px]  p-3 bg-white  rounded-lg ">
        {
          color.map((color)=>(
            <button className='text-white px-2 py-1 mx-6' style={{ backgroundColor:color }} onClick={()=> setBgColor(color)}>{color}</button>
          ))
        }
      </div>

    </div>
  )
}

export default App
