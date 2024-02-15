'use client'
import Image from 'next/image'
import React from 'react'
import { server } from '../../server'
import Link from 'next/link'

const CourtComponent = ({court}:any) => {
  return (
    <Link href={`/courts/${court?.id}`} className='court w-full max-w-[300px] bg-white p-3'>
      <div className='relative'>
        <Image alt={court?.title} src={server+court?.image} width={300} height={300} />
        <p className='bg-green-600 w-fit bottom-4 text-white absolute p-2 rounded-e-full'>300 EGP</p>
      </div>
      <div className='flex flex-col gap-1'>
        <strong>{court?.title}</strong>
        <small>{court?.description?.length > 50 ? court?.description?.slice(0, 50)+'...' : court?.description}</small>
        <p className='p-1 border border-black w-fit'>{court?.state_details?.name}</p>
      </div>
    </Link>
  )
}

export default CourtComponent