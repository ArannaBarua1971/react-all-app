import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {


    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser} =useContext(UserContext)

    const handleForm =()=>{
        setUser({name,password})
    }

  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name' />
      <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
      <button onClick={handleForm}>submit</button>
    </div>
  )
}

export default Login
