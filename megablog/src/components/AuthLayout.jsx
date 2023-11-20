import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children,authentication}) {

    const authStatus=useSelector(state=> state.auth.status)
    const navigate =useNavigate()
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
        if(authentication !== authStatus){
            navigate('/login')
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

  return loader ? <h2>Loading....</h2>:<div>{children}</div>
}

export default AuthLayout
