'use client'
import Protected from '@/components/Protected'
import { CourtContextProvider } from '@/contexts/CourtContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { server } from '../../../server'
import CourtComponent from '@/components/CourtComponent'

const page = () => {
  const courtContext = useContext(CourtContextProvider)
  return (
    <Protected>
      <div className='w-full'>

        <div className='w-full max-w-[800px] mx-auto p-2'>

          {/* search */}
          <div className='bg-blue-200 p-2 shadow-lg flex flex-col gap-2'>
            <input onChange={(e) => courtContext?.setCourtsTitleSearch(e.target.value)} type="text" placeholder='أبحث بالأسم' />
            <select onChange={(e) => courtContext?.setCourtsStateFilter(e.target.value)}>
              <option value="">أختر المنطقة</option>
              {
                courtContext?.states?.map((state:any) => (
                  <option value={state?.id} key={state?.id}>{state?.name}</option>
                ))
              }
            </select>
          </div>

        </div>
        <br />

        {/* courts */}
        <div className='courts w-full max-w-[1300px] mx-auto flex gap-3 flex-wrap justify-around'>
          {
            courtContext?.courts?.map((court:any) => (
              <CourtComponent court={court} key={court?.id} />
            ))
          }
        </div>
        
      </div>
    </Protected>
  )
}

export default page