'use client'
import { AuthContextProvider } from '@/contexts/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const Header = () => {
  const authContext = useContext(AuthContextProvider)

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="bg-slate-200 px-10 flex justify-between">
        <div className="flex gap-2">
          <img className="w-full max-w-[40px]" src="/images/logo.png" alt="" />
          <p className="my-auto">اسم الشركة</p>
        </div>

        <div className="my-auto flex gap-5">
          {
            localStorage.getItem('token') ? (
              <div className='my-auto flex gap-5'>
                <Link href="/courts">الملاعب</Link>
                <a href="#">حمامات السباحة</a>
                <a href="#">مدربين</a>
              </div>
            )
            : null
          }
          
        </div>
          
        <div className='my-auto'>
        {
          !localStorage.getItem('token') ?
          (
            <div className='flex gap-5'>
              <button className="bg-black text-white p-1 px-3">
                <a href="/auth/login">تسجيل دخول</a>
              </button>
              <button className="border border-black p-1 px-3">
                <a href="/auth/register">حساب جديد</a>
              </button>
            </div>
          ):
          (
            <div>
              <div className='relative'>
                <Image onClick={() => setOpenMenu(!openMenu)} alt='' width={35} height={35} src={'/images/pp.png'} 
                  className='rounded-full cursor-pointer' 
                />

                {
                  openMenu ? (
                    <div className='menu flex flex-col gap-3 bg-white p-2 absolute w-[200px] left-0'>
                      <Link className='text-blue-600' href={'/profile'}>ملفك الشخصي</Link>
                      <button onClick={() => authContext?.logoutFunction()} type="submit" className="bg-black text-white p-1 px-3 my-auto">
                        تسجيل خروج
                      </button>
                    </div>
                  ) : null
                }
              </div>
              {/* menu to profile */}
            </div>
          )
        }
        </div>
        

      </header>
  )
}

export default Header