'use client'
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

export default function Home() {


  return (
    <div className="flex flex-col gap-2">
      <div className="main p-2 w-full max-w-[700px] mx-auto">
        <div className="images">
          <div className="w-full max-w-[500px] mx-auto shadow-lg rounded-md">
            <Slide duration={2000} arrows={false}>
              <div className="each-slide-effect">  
                <Image src={'/bg1.png'} alt="" width={300} height={300} loading="lazy" className="w-full max-w-[500px] mx-auto shadow-lg rounded-md" />
              </div>
              <div className="each-slide-effect">
                <Image src={'/bg2.png'} alt="" width={300} height={300} loading="lazy" className="w-full max-w-[500px] mx-auto shadow-lg rounded-md" />
              </div>
              <div className="each-slide-effect">
                <Image src={'/bg3.png'} alt="" width={300} height={300} loading="lazy" className="w-full max-w-[500px] mx-auto shadow-lg rounded-md" />
              </div>
              <div className="each-slide-effect">
                <Image src={'/bg4.png'} alt="" width={300} height={300} loading="lazy" className="w-full max-w-[500px] mx-auto shadow-lg rounded-md" />
              </div>
            </Slide>
          </div>
          <div className="md:-mt-20 -mt-12 flex flex-col gap-1 z-[100] text-center relative">
            <Image className="mx-auto rounded-full shadow-lg w-full max-w-[100px] md:max-w-[200px]" src={'/doctor.jpg'} alt="" width={200} height={200} loading="lazy" />
            <strong className="md:text-2xl text-lg">Dr. Ahmed Hamdy</strong>
            <p>Dental Clinics</p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="links flex flex-col gap-2">
          <Link href={'https://g.page/r/CeN6grrQOHeIEBE/review'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px] md:h-[50px] h-[33px]" src={'/rating.jpg'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-wide my-auto text-sm md:text-base">Your Review's Important To Us</strong>
          </Link>
          <Link href={'https://app.vezeeta.com/vQFeRYR2TAgcQwYaA'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/vezeeta.jpeg'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto text-sm md:text-base">Vezeeta</strong>
          </Link>
          <Link href={'https://wa.me/message/NMSRGH7LPP34D1'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/wp.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto text-sm md:text-base">Whats App</strong>
          </Link>
          <Link href={'https://www.facebook.com/dr.ahmed.hamdydentalclinic?mibextid=ZbWKwL'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/fb.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto text-sm md:text-base">Facebook</strong>
          </Link>
          <Link href={'https://www.instagram.com/dr.ahmed.hamdydentalclinic?igsh=MzRlODBiNWFlZA=='} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/ig.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto text-sm md:text-base">Instagram</strong>
          </Link>
          <Link href={'https://maps.app.goo.gl/tJ31sF5JdFCPNpbz5'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="shadow-lg md:ms-3 ms-2 max-w-[20px] md:max-w-[30px]" src={'/location.png'} alt="" width={30} height={30} loading="lazy" />
            <strong className="tracking-widest my-auto text-sm md:text-base">Location</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}
