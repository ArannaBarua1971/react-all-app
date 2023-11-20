import { useState,useEffect } from 'react'
import auth from './appwrite/auth'
import { useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading,setLoading] =useState(true)
  const dispatch =useDispatch()

  useEffect(()=>{

    auth.authUser()
        .then((userData)=>{
          if(userData){
            dispatch(login({userData}))
          }
          else{
            dispatch(logout())
          }
        })
        .finally(()=>{
          setLoading(false)
        })
  },[])

  return !loading ?
  (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
  : null
}

export default App
