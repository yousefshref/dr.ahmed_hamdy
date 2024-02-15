'use client'
import Protected from '@/components/Protected'
import { CourtContextProvider } from '@/contexts/CourtContext'
import React, { useContext } from 'react'
import { server } from '../../../../server'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  const courtContext = useContext(CourtContextProvider)
  
  function tConvert (time:any) {
    // Check correct time format and split into components
    time = time?.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
      return time.join (''); // return adjusted time or original string
  }
    
  
  return (
    <Protected>
      <div className="p-5">
      <div className="max-w-[1000px] mx-auto">
        <Link href={`/courts/${courtContext?.court?.id}/book/`}>
          <button className="bg-blue-400 p-1 px-3 text-white">أحجز هذا الملعب</button>
        </Link>
      </div>
      <div className="flex flex-col gap-5 mt-5 p-5 border w-full max-w-[1000px] mx-auto">
        <div className="up flex justify-between gap-4">
          <div className="image my-auto w-full max-w-[300px]">
            <img className="w-full" src={server+courtContext?.court?.image} alt={courtContext?.court?.title} />
          </div>
          <div className="data my-auto flex text-center flex-wrap gap-5 justify-between w-full">
            <div className="left flex flex-col justify-between">
              <div className="flex flex-col gap-1 w-full max-w-[300px]">
                <h1 className="text-3xl text-start">{courtContext?.court?.title}</h1>
                <small className=" text-start">{courtContext?.court?.description}</small>
              </div>
              <span className="border border-black p-1 mt-5">{courtContext?.court?.state_details?.name}</span>
            </div>
            <div className="right my-auto">
              <p className="border border-black p-1 text-center">{courtContext?.court?.price_per_hour} جنية / الساعة</p>
              <span>يفتح: {tConvert(courtContext?.court?.open?.slice(0,5))} | يغلق: {tConvert(courtContext?.court?.close?.slice(0,5))}</span>
              {
                courtContext?.court?.offer_price_per_hour && (
                  <div>
                    <hr className="my-5" />
                    <div className="flex flex-col gap-1">
                      <p className="text-green-700">عروض اليوم</p>
                      <p className="border border-black p-1 text-center">{courtContext?.court?.offer_price_per_hour} جنية / الساعة</p>
                      <span>من: {tConvert(courtContext?.court?.offer_from?.slice(0,5))} | الي: {tConvert(courtContext?.court?.offer_to?.slice(0,5))}</span>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
          {
            courtContext?.court?.event && (
              <div>
                <hr className="my-2"/>
                <div className='flex gap-5'>
                  <strong>متاح حجز هذا الملعب (ايفينت, مناسبات,...)</strong>
                  <div className='flex gap-5'>
                    <span className="text-blue-600">من: {tConvert(courtContext?.court?.event_from?.slice(0,5))}</span>
                    <span>-</span>
                    <span className="text-blue-600">الي: {tConvert(courtContext?.court?.event_to?.slice(0,5))}</span>
                  </div>
                </div>
              </div>
            )
          }
        </div>

      <div className="flex flex-col gap-1 w-full max-w-[1000px] mx-auto mt-5">
        {
          courtContext?.court?.location &&
          <Link 
          className='from-green-200 px-5 to-lime-200 flex gap-4 flex-row-reverse bg-gradient-to-l p-2 rounded-sm transition-all hover:rounded-3xl w-fit'
          href={courtContext?.court?.location}>
            <span className='my-auto'>أضغط  لتري مكان الملعب</span>
            <span className='my-auto'>
              <Image 
                src={'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg'}
                alt='Google Maps'
                width={25}
                height={25}
              />
            </span>
          </Link>
        }
      </div>

    </div>
    </Protected>
  )
}

export default page