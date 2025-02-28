import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
      <main className="p-8 flex flex-col h-screen items-center justify-center bg-amber-600">
        <h1 className="font-bold title text-center text-white">
          OPEN 2025
        </h1>
        <h2 className='text-xl font-bold text-white mt-24'>Escolha o WOD</h2>
        <div className='flex flex-col w-full gap-4 mt-4 items-center'>
          <Link className='w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./251">25.1</Link>
          <Link className='opacity-40 pointer-events-none w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./251">25.2</Link>
          <Link className='opacity-40 pointer-events-none w-2/3 h-[3rem] border-2 border-white flex items-center justify-center text-white text-2xl rounded-lg' href="./251">25.3</Link>
        </div>
      </main>
  );
}
