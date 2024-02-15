import Header from "@/components/Header";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Header />
      <div className="from-slate-100 flex  px-5 justify-around to-blue-100 bg-gradient-to-r h-full min-h-[600px] relative">
      <div className="flex flex-col gap-1 my-auto w-full max-w-[507px]">
        <h1 className="text-4xl uppercase">احجز ملعبك أينما كنت.</h1>
        <p>يمكنك حجز الملاعب أو حمامات السباحة أو حتى المدربين عبر الإنترنت من خلال موقعنا! هذه هي أفضل طريقة بالنسبة لك.</p>
        <button className="bg-sky-300 p-1 w-fit px-4">اعرف المزيد</button>
      </div>
      <img className="w-full max-w-[600px] max-h-[600px] rounded-full" src="/images/court.png" alt="court image" />
    </div>

    <div className="p-3">
      <h1 className="text-2xl">why us</h1>
    </div>
    <div className="p-3">
      <h1 className="text-2xl">How To use</h1>
    </div>
    </div>
  )
}
