'use client'
import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {server} from '../../server'
import { usePathname, useRouter } from 'next/navigation'
import { AuthContextProvider } from './AuthContext'

const CourtContext = ({children}) => {

  const [err, setErr] = useState()
  
  
  const router = useRouter()
  const path = usePathname()


  const userContext = useContext(AuthContextProvider)

  


  const [states, setStates] = useState([])

  const getStates = async () => {
    const res = await axios.get(`${server}get_states/`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setStates(res.data)
  }
  
  useEffect(() => {
    localStorage.getItem('token') && getStates()
  }, [])
  



  const [courts, setCourts] = useState([])
  const [courtsTitleSearch, setCourtsTitleSearch] = useState('')
  const [courtsStateFilter, setCourtsStateFilter] = useState('')

  const getCourts = async () => {
    const res = await axios.get(`${server}get_courts/?search=${courtsTitleSearch}&filter=${courtsStateFilter}`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setCourts(res.data)
  }
  
  useEffect(() => {
    if(localStorage.getItem('token') && path == '/courts'){
      getCourts()
    }
  }, [courtsStateFilter, courtsTitleSearch, path])
  
  
  
  
  const [court, setCourt] = useState([])
  const getCourt = async () => {
    const res = await axios.get(`${server}get_court/${path.includes('book') ? path.split('/')[2] : path.split('/').pop()}/`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setCourt(res.data)
  }

  useEffect(() => {
    if(localStorage.getItem('token') && path !== '/' && path.includes('courts') && Number.isInteger(Number(path.split('/').pop())) || path.includes('book') && Number.isInteger(Number(path.split('/')[2])) ){
      getCourt()
    }
  }, [path])



  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because month is zero-indexed
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  const [checkedCourt, setCheckedCourt] = useState()
  const [date, setDate] = useState(getCurrentDate())
  
  const checkCourt = async () => {
    const res = await axios.get(`${server}book/check/${path.split('/')[2]}/?date=${date}`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setCheckedCourt(res.data)
  }

  useEffect(() => {
    if(localStorage.getItem('token') && path.includes('courts') && path.includes('book') ){
      checkCourt()
    }
  }, [path, date])





  const createBook = async (e, book_from, book_to) => {
    e?.preventDefault()
    const data = {
      user:userContext?.user?.id,
      court:court?.id,
      name:e?.target?.name?.value,
      phone:e?.target?.phone?.value,
      book_date:date,
      book_from:book_from,
      book_to:book_to,
      with_ball:e?.target?.with_ball?.value,
      event:e?.target?.event?.value,
    }

    const res = await axios.post(`${server}book/create/`,data,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })

    if(res.data.id){
      router.push('/courts')
      alert('تم الحجز بنجاح')
    }else{
      setErr(res.data)
    }
  }




  
  const [userBooks, setUserBooks] = useState([])
  const [userBooksDate, setUserBooksDate] = useState('')
  const getUserBooks = async() => {
    const res = await axios.get(`${server}books/${userContext?.user?.id}/?date=${userBooksDate}`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setUserBooks(res.data)
  }
  useEffect(()=> {
    if(localStorage.getItem('token') && userContext?.user?.id && path == '/profile'){
      getUserBooks()
    }
  }, [userContext?.user, userBooksDate, path])

  
  
  
  
  
  
  
  
  
  
  
  
  const [bookSettings, setBookSettings] = useState([])
  const getBookSettings = async() => {
    const res = await axios.get(`${server}book/settings/${path.split('/').pop()}/`,{
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    setBookSettings(res.data)
  }
  useEffect(()=> {
    if(localStorage.getItem('token') && path.includes('profile') && path.includes('books')){
      getBookSettings()
    }
  }, [path])






  const updateBookSettings = async(e) => {
    e?.preventDefault()

    const data = {
      book_to:e?.target?.book_to?.value
    }
    const res = await axios.put(`${server}book/settings/${path.split('/').pop()}/update/`, data, {
      headers:{
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })

    if(res.data.id){
      getUserBooks()
      router.push('/profile')
    }
  }


  return (
    <CourtContextProvider.Provider
      value={{
        err,
        setCourtsTitleSearch,
        setCourtsStateFilter,
        states,
        courts,
        court,
        checkedCourt,
        date,
        setDate,

        createBook,


        setUserBooksDate,
        userBooks,

        bookSettings,
        updateBookSettings,
      }}
    >
      {children}
    </CourtContextProvider.Provider>
  )
}

export const CourtContextProvider = createContext()
export default CourtContext