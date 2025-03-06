'use client'

import Link from 'next/link'
import Image from 'next/image'
import korLogo from '@/public/kor-crossfit_white.png'
import { useState } from 'react'
import TwoFiveTwoDescription from '@/app/components/TwoFiveTwoDescription'
import TwoFiveTwoTimer from '../components/TwoFiveTwoTimer'

const TwentyFiveTwo = () => {
  const [reps, setReps] = useState(80)
  const [movement, setMovement] = useState('')
  const [isRx, setIsRx] = useState(true)
  const [isCounterScreen, setIsCounterScreen] = useState(false)

  return (
    <main className='p-8 flex flex-col h-screen'>
      <Link href="/" className='text-white'>&lt; Back</Link>
      {isCounterScreen && <Image alt='kor logo' src={korLogo} width={200} height={200} className='mx-auto w-16 mt-4 mb-4' />}
      {!isCounterScreen && <TwoFiveTwoDescription isRx={isRx} setIsRx={setIsRx} setIsCounterScreen={setIsCounterScreen}/>}
      {isCounterScreen && <TwoFiveTwoTimer reps={reps} setReps={setReps} movement={movement} setMovement={setMovement} isRx={isRx}/>}
    </main>
  )
}

export default TwentyFiveTwo
