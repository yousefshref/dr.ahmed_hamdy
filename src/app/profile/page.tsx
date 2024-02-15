'use client'
import BookComponent from '@/components/BookComponent'
import Protected from '@/components/Protected'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { CourtContextProvider } from '@/contexts/CourtContext'
import React, { useContext } from 'react'

const page = () => {
  const userContext = useContext(AuthContextProvider)
  const courtContext = useContext(CourtContextProvider)
  return (
    <Protected>
      <div className="bg-gray-100 flex p-1 mt-5">
        <div className="max-w-md w-full mx-auto  bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <img className="w-24 h-24 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Picture" />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{userContext?.user?.username}</h2>
            <p className="mt-2 text-sm text-gray-600">{userContext?.user?.email}</p>
            <p className="mt-1 text-sm text-gray-600">{userContext?.user?.phone}</p>
          </div>
        </div>
      </div>

      <br />

      <div className='books flex flex-col gap-5 max-w-6xl mx-auto p-2'>
        <div className='bg-blue-300 p-2 flex flex-wrap justify-between'>
          <strong className='my-auto'>اخر حجوزاتك</strong>
          <div className='max-w-[300px] w-full'>
            <input onChange={(e) => courtContext?.setUserBooksDate(e.target.value)} className='w-full' type="date" />
          </div>
        </div>
        {
          courtContext?.userBooks?.map((book:any) => (
            <BookComponent book={book} key={book?.id} />
          ))
        }
      </div>

    </Protected>
  )
}

export default page