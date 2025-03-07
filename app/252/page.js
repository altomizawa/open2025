'use client'

import Link from 'next/link'
import Image from 'next/image'
import korLogo from '@/public/kor-crossfit_white.png'
import { useState } from 'react'
import TwoFiveTwoDescription from '@/app/components/TwoFiveTwoDescription'
import TwoFiveTwoTimer from '../components/TwoFiveTwoTimer'
import { rx, scaled, foundations } from '../252/exercises'

const TwentyFiveTwo = () => {
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
    } else if (category === 'foundations') {
      setCategory('foundations')
      setCurrentWod(foundations)
    }
  }

  return (
    <main className='p-8 flex flex-col h-screen text-white'>
      <Link href="/" className='text-white'>&lt; Back</Link>
      {isCounterScreen && <Image alt='kor logo' src={korLogo} width={200} height={200} className='mx-auto w-12' />}
      {!isCounterScreen && <TwoFiveTwoDescription setIsCounterScreen={setIsCounterScreen} category={category} currentWod={currentWod} handleCategoryChange={handleCategoryChange}/>}
      {isCounterScreen && <TwoFiveTwoTimer reps={reps} setReps={setReps} currentWod={currentWod}/ >}
    </main>
  )
}

export default TwentyFiveTwo
