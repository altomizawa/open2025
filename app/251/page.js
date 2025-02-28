'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import korLogo from '@/public/kor-crossfit_white.png'

const TwentyFiveOne = () => {
  const [reps, setReps] = useState(0)
  const [movement, setMovement] = useState('')


  function getCurrentMovement(totalReps) {
    let burpees = 3;
    let cleanToOverheads = 3;
    let lunges = 2;
    let round = 1;
    
    while (totalReps > 0) {
      let roundReps = burpees + cleanToOverheads + lunges;
      
      if (totalReps <= burpees) return `Burpees over DB: ${totalReps} / ${burpees} reps`;
      totalReps -= burpees;
      
      if (totalReps <= cleanToOverheads) return `DB hang clean-to-ovh: ${totalReps} / ${cleanToOverheads} reps`;
      totalReps -= cleanToOverheads;
      
      if (totalReps <= lunges) return `Walking lunge: ${totalReps} / ${lunges} reps`;
      totalReps -= lunges;
      
      // Increase reps for next round
      round++;
      burpees += 3;
      cleanToOverheads += 3;
    }
  }
  
  function getCurrentRound(totalReps) {
    let burpees = 3;
    let cleanToOverheads = 3;
    let lunges = 2;
    let round = 1;
    
    while (totalReps > 0) {
      let roundReps = burpees + cleanToOverheads + lunges;
      if (totalReps <= roundReps) return round;
      totalReps -= roundReps;
      
      // Increase reps for next round
      round++;
      burpees += 3;
      cleanToOverheads += 3;
    }
  }

  const handleRepsChange = (type) => {
    if (reps === 0 && type === 'decrement') return;
    if (type === 'increment') {
      setReps(reps + 1)
    } else if (type === 'decrement' && reps > 0) {
      setReps(reps - 1)
    }
  }

  return (
    <main className=" bg-amber-600 h-screen text-white relative flex flex-col justify-between">
      <Link href="/" className='pl-4 pt-4 text-white'>&lt; Back</Link>
      <div className=''>
        <Image alt='kor logo' src={korLogo} width={200} height={200} className='mx-auto w-12 -mt-4 mb-4' />
        <h1 className="font-bold text-center w-full text-3xl">
          OPEN 25.1
        </h1>
        <p className='text-center w-[90%] mx-auto mt-6'>
        As many rounds and reps as possible in 15 minutes of:
        <br></br>
        3 lateral burpees over the dumbbell
        <br></br>
        3 dumbbell hang clean-to-overheads
        <br></br>
        30-foot walking lunge (2 x 15 feet)
        <br></br>
        *After completing each round, add 3 reps to the burpees and hang clean-to-overheads.
        <br></br>
        <br></br>
        <span className='font-bold text-sm'>♀ 35-lb (15kg) dumbbell</span>
        <br></br>
        <span className='font-bold text-sm'>♀ 50-lb (22.5kg) dumbbell</span>
        </p>
      </div>
      <div className='w-full p-8 flex flex-col gap-8'>
        <div className=''>
          <h3 className='text-2xl font-bold text-center'>CURRENT ROUND: {getCurrentRound(reps) ? getCurrentRound(reps) : 0}</h3>
          <h3 className='text-2xl font-bold text-center'>{reps} {reps>1 ? 'REPS' : 'REP'}</h3>
          <p className='text-center font-bold'>
          {getCurrentMovement(reps)}

          </p>
        </div>
      <div className='w-full flex justify-center mt-4'>
        <button onClick={()=>setReps(0)} className='border-[1px] rounded-lg px-4 py-2'>RESET</button>
      </div>
        <div className='flex flex-row justify-center gap-4 w-full'>
          <button className='border-2 text-2xl text-white font-bold py-2 px-4 rounded w-full' onClick={() => handleRepsChange('decrement')}>- 1</button>  
          <button className='border-2 text-2xl text-white font-bold py-2 px-4 rounded w-full' onClick={() => handleRepsChange('increment')}>+ 1</button>
        </div>
      </div>
    </main>
  )
}

export default TwentyFiveOne
