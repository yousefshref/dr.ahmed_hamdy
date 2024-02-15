'use client'
import Protected from '@/components/Protected'
import SlotTest from '@/components/SlotTest'
import { CourtContextProvider } from '@/contexts/CourtContext'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const courtContext = useContext(CourtContextProvider)


  
  const getSlotsBetweenTimes = (startTime:any, endTime:any) => {
    const slots = [];
    let currentSlot = new Date(`1970-01-01T${startTime}`);
    const endSlot = new Date(`1970-01-01T${endTime}`);
  
    while (currentSlot < endSlot) {
      const startHour = currentSlot.getHours();
      const startSuffix = startHour >= 12 ? 'PM' : 'AM';
      const startHour12 = startHour > 12 ? startHour - 12 : startHour;
      const endHour = currentSlot.getHours() + 1;
      const endSuffix = endHour >= 12 ? 'PM' : 'AM';
      const endHour12 = endHour > 12 ? endHour - 12 : endHour;
  
      const slot = `${startHour12}${startSuffix}-${endHour12}${endSuffix}`;
      slots.push(slot);
      currentSlot.setHours(endHour);
    }
  
    return slots;
  };
  
  const slots = getSlotsBetweenTimes(courtContext?.court?.open, courtContext?.court?.close);


  
  const [activeTime, setActiveTime] = useState('')



  const time = activeTime.split('-')[0]
  const time2 = activeTime.split('-')[1]
  
  function convertTo24HourFormat(timeStr:any) {
    // Extracting hours and minutes from the time string
    var hours = parseInt(timeStr);
    var isPM = timeStr.toLowerCase().includes('pm');

    // If the time is in PM and not 12, add 12 hours to convert to 24-hour format
    if (isPM && hours !== 12) {
        hours += 12;
    }
    // If the time is 12:xx AM, convert it to 00:xx
    else if (!isPM && hours === 12) {
        hours = 0;
    }

    // Formatting hours with leading zero if necessary
    var formattedHours = hours < 10 ? '0' + hours : hours;

    // Returning the time in 24-hour format
    return formattedHours + ':00';
  }

  


  
  
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because month is zero-indexed
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  function getNextDayDate() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    
    const year = nextDay.getFullYear();
    const month = (nextDay.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because month is zero-indexed
    const day = nextDay.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  function getDateAfterTomorrow() {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 2); // Adding 2 to get the day after tomorrow
    
    const year = nextDay.getFullYear();
    const month = (nextDay.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because month is zero-indexed
    const day = nextDay.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }




  return (
    <Protected>
      <br />
      <p className='max-w-lg mx-auto'>أحجز هذا الملعب الأن بسهولة</p>
      <br />
      <div className="max-w-lg mx-auto bg-white p-2">
        <form onSubmit={(e) => {
            e.preventDefault()
            if(!activeTime){
              alert('تحقق من ادخال الوقت المناسب')
            }else{
              courtContext?.createBook(e, convertTo24HourFormat(time), convertTo24HourFormat(time2))
            }
            }} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              الأسم
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {courtContext?.err?.name && <span className='err-message'>{courtContext?.err?.name}</span>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <input
              type="text"
              name="phone"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {courtContext?.err?.phone && <span className='err-message'>{courtContext?.err?.phone}</span>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
               هل تريد الكرة؟ {courtContext?.court?.with_ball && `(السعر الاضافي ${courtContext?.court?.ball_price})`} 
            </label>
            <select className='focus:border-indigo-500' name="with_ball">
              <option value="true">نعم</option>
              <option value="false">لا</option>
            </select>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              هل تحجزة لمناسبة او ايفينت؟ {courtContext?.court?.event && `(السعر الاضافي ${courtContext?.court?.event_price})`}
            </label>
            <select className='focus:border-indigo-500' name="event">
              {
                courtContext?.court?.event ? (
                  <>
                    <option value="false">لا</option>
                    <option value="true">نعم</option>
                  </>
                ) : (
                  <option value="false">لا</option>
                )
              }
            </select>
          </div>

          <hr className='bg-indigo-500 h-[1.5px]' />

          <div className='chooseDateAndTime'>
            <div className='up justify-between flex gap-5 w-[100%]'>
              <span onClick={() => {
                setActiveTime('')
                courtContext?.setDate(getCurrentDate)
              }} className={`${courtContext?.date == getCurrentDate() ? "border-indigo-300 border rounded-full" : ""} | my-auto p-2 transition-all hover:border hover:border-indigo-200 cursor-pointer hover:rounded-3xl`}>اليوم</span>
              <span onClick={() => {
                setActiveTime('')
                courtContext?.setDate(getNextDayDate)
              }} className={`${courtContext?.date == getNextDayDate() ? "border-indigo-300 border rounded-full" : ""} my-auto p-2 transition-all hover:border hover:border-indigo-200 cursor-pointer hover:rounded-3xl`}>غدا</span>
              <span onClick={() => {
                setActiveTime('')
                courtContext?.setDate(getDateAfterTomorrow)
              }} className={`${courtContext?.date == getDateAfterTomorrow() ? "border-indigo-300 border rounded-full" : ""} my-auto p-2 transition-all hover:border hover:border-indigo-200 cursor-pointer hover:rounded-3xl`}>بعد غد</span>
            </div>
            <div className='down times mt-3'>
              <ul className='flex flex-col gap-4 max-h-[300px] overflow-y-scroll'>
                {slots?.map((slot, index) => (
                  // <Slot courtContext={courtContext} checked={courtContext?.checkedCourt} activeTime={activeTime} setActiveTime={setActiveTime} slot={slot} key={index} />
                  <SlotTest convertTo24HourFormat={convertTo24HourFormat} courtContext={courtContext} activeTime={activeTime} setActiveTime={setActiveTime} slot={slot} key={index} />
                ))}
              </ul>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              أحجز
            </button>
          </div>
        </form>
      </div>
    </Protected>
  )
}

export default page