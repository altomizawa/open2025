'use client'

import Link from 'next/link'
import Image from 'next/image'
import korLogo from '@/public/kor-crossfit_white.png'
import { useState } from 'react'
import TwoFiveThreeTimer from '@/app/components/TwoFiveThreeTimer'
import TwoFiveThreeDescription from '@/app/components/TwoFiveThreeDescription'
import { rx, scaled } from '../253/exercises'

const TwentyFiveThree = () => {
  const [reps, setReps] = useState(0)
  const [isCounterScreen, setIsCounterScreen] = useState(false)
  const [category, setCategory] = useState('rx')
  const [currentWod, setCurrentWod] = useState(rx)

  const handleCategoryChange = (category) => {
    if (category === 'rx') {
      setCategory('rx')
      setCurrentWod(rx)
    } else if (category === 'scaled') {
      setCategory('scaled')
      setCurrentWod(scaled)
    }
  }

  return (
    <main className='p-8 flex flex-col h-screen text-white max-w-[640px] mx-auto'>
      <Link href="/" className='text-white'>&lt; Back</Link>
      {isCounterScreen && <Image alt='kor logo' src={korLogo} width={200} height={200} className='mx-auto w-12' />}
      {!isCounterScreen && <TwoFiveThreeDescription setIsCounterScreen={setIsCounterScreen} category={category} currentWod={currentWod} handleCategoryChange={handleCategoryChange}/>}
      {isCounterScreen && <TwoFiveThreeTimer reps={reps} setReps={setReps} currentWod={currentWod}/ >}
    </main>
  )
}

export default TwentyFiveThree
