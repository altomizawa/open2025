import Image from "next/image";
import Link from 'next/link';
import korLogo from '@/public/kor-crossfit_white.png'

export default function Home() {
  return (
      <main className="p-8 flex flex-col h-screen items-center justify-center max-w-[780px] mx-auto">
        <Image alt='kor logo' src={korLogo} width={200} height={200} className='mx-auto w-42 -mt-4 mb-4' />
        <h1 className="font-bold title text-center text-white">
          OPEN 2025
        </h1>
        <h2 className='text-xl font-bold text-white mt-24'>Escolha o WOD</h2>
        <div className='flex flex-col w-full gap-4 mt-4 items-center'>
          <Link className='w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./251">25.1</Link>
          <Link className='w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./252">25.2</Link>
          <Link className='opacity-40 pointer-events-none w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./251">25.3</Link>
        </div>
      </main>
  );
}
