import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
      <main className="p-8 flex flex-col h-screen items-center justify-center">
        <h1 className="font-bold title text-center">
          OPEN 2025
        </h1>
        <Link href="./251">25.1</Link>
      </main>
  );
}
