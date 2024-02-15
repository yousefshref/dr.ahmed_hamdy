import React from 'react'

const SlotTest = ({slot, courtContext, activeTime, setActiveTime, convertTo24HourFormat}:any) => {

  const check = courtContext?.checkedCourt?.find((e:any) => e?.book_from?.slice(0,5) == convertTo24HourFormat(slot.split('-')[0]) && e?.book_to?.slice(0,5) == convertTo24HourFormat(slot.split('-')[1]))

  return (
    <div
      className={`
        cursor-pointer bg-indigo-300 p-2 rounded-full text-center transition-all

        ${
          check
          ? "bg-red-500" : ""
        }

        ${activeTime == slot ? "bg-green-400" : ""}
      `}
      onClick={() => {
        if(check){
          alert('هذا الوقت محجوز بالفعل')
        }else{
          if(activeTime !== slot){
            setActiveTime('')
            setActiveTime(slot)
          }
        }
      }}
    >
      {slot}
    </div>
  )
}

export default SlotTest