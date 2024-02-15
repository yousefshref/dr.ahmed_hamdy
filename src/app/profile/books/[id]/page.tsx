'use client'
import Protected from '@/components/Protected'
import { CourtContextProvider } from '@/contexts/CourtContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { server } from '../../../../../server'

const page = () => {
  const courtContext = useContext(CourtContextProvider)
  return (
    <Protected>
      <div className='mx-auto bg-neutral-200 gap-5 p-2 mt-5 max-w-7xl flex flex-wrap justify-around'>
        <div className='p-2 bg-white'>
          <Image alt='' width={300} height={300} src={server+courtContext?.bookSettings?.book_details?.court_details?.image} />
          <p>{courtContext?.bookSettings?.book_details?.court_details?.title}</p>
          <div className='flex flex-col gap-2 mt-3'>
            <p>{courtContext?.bookSettings?.book_details?.name}</p>
            <p>{courtContext?.bookSettings?.book_details?.phone}</p>
          </div>
        </div>

        <form onSubmit={(e) => courtContext?.updateBookSettings(e)} className='flex flex-col gap-2 justify-center w-full max-w-[400px]'>
          <div className='flex flex-col gap-1'>
            <label>أختر تاريخ لتثبيت هذه الساعة (أختياري) </label>
            <input name='book_to' type="date" />
            {
              courtContext?.bookSettings?.book_to &&
            <small>تم تثبيتها حتي {courtContext?.bookSettings?.book_to}</small>
            }
          </div>
          <button className='bg-green-500 p-1 px-8 w-fit'>تم</button>
        </form>
      </div>
    </Protected>
  )
}

export default page