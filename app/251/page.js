'use client'
import { useState } from 'react'
import Link from 'next/link'

const TwentyFiveOne = () => {
  const [reps, setReps] = useState(0)
  const [movement, setMovement] = useState('')


  function getCurrentMovement(totalReps) {
    let burpees = 3;
    let cleanToOverheads = 3;
    let lunges = 2;
    
    while (totalReps > 0) {
      if (totalReps <= burpees) return <p>Burpees over dumbbell: {burpees} reps</p>;
      totalReps -= burpees;
      
      if (totalReps <= cleanToOverheads) return <p>Dumbbell hang clean-to-overhead: {cleanToOverheads} reps</p>;
      totalReps -= cleanToOverheads;
      
      if (totalReps <= lunges) return <p>Walking lunge: {lunges} reps</p>;
      totalReps -= lunges;
      
      // Increase reps for next round
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

  const handleRepsChange = (newReps) => {
    setReps(newReps)
  }

  return (
    <main className="p-8 bg-amber-600 h-screen text-white">
      <Link href="/" className='text-white'>&lt; Back</Link>
      <h1 className="font-bold text-center w-full text-5xl mt-12">
        OPEN 25.1
      </h1>
      <p className='text-center w-[90%] mx-auto mt-12'>
      As many rounds and reps as possible in 15 minutes of:<br></br>
      <br></br>
      3 lateral burpees over the dumbbell
      <br></br>
      3 dumbbell hang clean-to-overheads
      <br></br>
      30-foot walking lunge (2 x 15 feet)
      <br></br>
      <br></br>
      *After completing each round, add 3 reps to the burpees and hang clean-to-overheads.
      <br></br>
      <br></br>
      ♀ 35-lb (15-kg) dumbbell
      <br></br>
      ♂ 50-lb (22.5-kg) dumbbell
      </p>
      <div className='fixed bottom-0 left-0 w-full p-8 flex flex-col justify-center items-center gap-24'>
        {getCurrentMovement(reps)}
        <div>
          <h3 className='text-4xl font-bold text-center'>ROUND {getCurrentRound(reps)}</h3>
          <h3 className='text-4xl font-bold text-center'>{reps} REPS</h3>
        </div>
        <div className='flex flex-row justify-center gap-4 w-full'>
          <button className='border-2 text-2xl text-white font-bold py-2 px-4 rounded w-full' onClick={() => setReps(reps - 1)}>- 1</button>  
          <button className='border-2 text-2xl text-white font-bold py-2 px-4 rounded w-full' onClick={() => setReps(reps + 1)}>+ 1</button>
        </div>
      </div>
    </main>
  )
}

export default TwentyFiveOne
