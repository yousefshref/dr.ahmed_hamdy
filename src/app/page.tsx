import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div className="main p-2 w-full max-w-[700px] mx-auto">
        <div className="images">
          <Image src={'/banner.jpg'} alt="" width={300} height={300} loading="lazy" className="w-full max-w-[500px] mx-auto shadow-lg rounded-md" />
          <div className="-mt-20 flex flex-col gap-1 z-[100] text-center">
            <Image className="mx-auto rounded-full shadow-lg w-full max-w-[140px] md:max-w-[200px]" src={'/doc.jpg'} alt="" width={200} height={200} loading="lazy" />
            <strong className="text-2xl">Dr. Ahmed Hamdy</strong>
            <p>Dental Clinic</p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="links flex flex-col gap-2">
          <Link href={'https://g.page/r/CeN6grrQOHeIEBE/review'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px] md:h-[50px] h-[33px]" src={'/rating.jpg'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-wide my-auto">Your Review's Important To Us</strong>
          </Link>
          <Link href={'https://app.vezeeta.com/vQFeRYR2TAgcQwYaA'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/vezeeta.jpeg'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto">Vezeeta</strong>
          </Link>
          <Link href={'https://wa.me/message/NMSRGH7LPP34D1'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/wp.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto">Whats App</strong>
          </Link>
          <Link href={'https://www.facebook.com/dr.ahmed.hamdydentalclinic?mibextid=ZbWKwL'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/fb.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto">Facebook</strong>
          </Link>
          <Link href={'https://www.instagram.com/dr.ahmed.hamdydentalclinic?igsh=MzRlODBiNWFlZA=='} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="rounded-full shadow-lg max-w-[33px] md:max-w-[50px]" src={'/ig.png'} alt="" width={50} height={50} loading="lazy" />
            <strong className="tracking-widest my-auto">Instagram</strong>
          </Link>
          <Link href={'https://maps.app.goo.gl/tJ31sF5JdFCPNpbz5'} className="vezeeta bg-blue-300 p-2 transition-all hover:bg-lime-600 cursor-pointer rounded-full text-start flex gap-5">
            <Image className="shadow-lg md:ms-3 ms-2 max-w-[20px] md:max-w-[30px]" src={'/location.png'} alt="" width={30} height={30} loading="lazy" />
            <strong className="tracking-widest my-auto">Location</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}
