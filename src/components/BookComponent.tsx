import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

const BookComponent = ({book}:any) => {

  return (
    <div className="max-w-[800px] relative shadow-xl w-full mx-auto bg-white rounded-xl overflow-hidden ">

      <Link href={`/profile/books/${book?.id}`} className='absolute left-1 text-blue-500 text-lg top-1 cursor-pointer'>
        <IoSettingsOutline />
      </Link>

      <div className="md:flex">
        <div className="w-full max-w-[300px] flex flex-col justify-center">
          <Image width={300} height={300} loading='lazy' layout='responsive' className="w-full object-cover" src="/images/court.jpg" alt="Product Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book?.court_details?.title} <span>({book?.name})</span></div>
          <p className="mt-2 text-gray-500 text-sm">{book?.court_details?.description}</p>
          <div className="mt-2">
            <p className="text-gray-400">السعر النهائي:</p>
            <p className="text-xl font-semibold text-gray-800">400 EGP</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">يبدأ في:</p>
            <p className="text-lg font-semibold text-gray-800">2024-12-4</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">من الساعة:</p>
            <p className="text-lg font-semibold text-gray-800">10:00 AM</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">حتي الساعة:</p>
            <p className="text-lg font-semibold text-gray-800">2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookComponent