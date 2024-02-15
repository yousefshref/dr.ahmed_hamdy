'use client'
import React, { useEffect } from 'react'
import Header from './Header'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Protected = ({children}:any) => {

  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    if(!localStorage.getItem('token')){
      router.push('/auth/login')
    }
  }, [path])

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Protected