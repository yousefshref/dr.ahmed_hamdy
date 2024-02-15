'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import {server} from '../../server'
import { useRouter } from 'next/navigation'

const AuthContext = ({children}) => {

  const [err, setErr] = useState()
  const [user, setUser] = useState()


  const router = useRouter()



  const registerFunction = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${server}register/`,{
      username: e.target.username.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
    })

    if(res.data.token){
      localStorage.setItem('token', res.data.token)
      router.push('/')
    }else{
      setErr(res.data)
    }
  }


  const loginFunction = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${server}login/`,{
      email: e.target.email.value,
      password: e.target.password.value,
    })

    if(res.data.token){
      localStorage.setItem('token', res.data.token)
      router.push('/')
    }else{
      setErr(res.data)
    }
  }


  const logoutFunction = () => {
    localStorage.removeItem('token')
    router.push('/auth/login')
  }







  const getUser = async () => {
    const res = await axios.get(`${server}get_user/`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })

    setUser(res.data)
  }


  useEffect(() => {
    localStorage.getItem('token') && getUser()
  }, [])


  return (
    <AuthContextProvider.Provider
    value={{
      err,
      
      user,
      
      registerFunction,
      loginFunction,
      logoutFunction,
    }}
    >
      {children}
    </AuthContextProvider.Provider>
  )
}

export const AuthContextProvider = createContext()
export default AuthContext