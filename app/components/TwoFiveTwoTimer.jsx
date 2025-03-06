import { useEffect, useState } from 'react'

const TwoFiveTwoTimer = ({ reps, setReps, movement, setMovement, isRx }) => {
  const [isWorkoutOver, setIsWorkoutOver] = useState(false)

  const resetTimer = () => {
    setReps(0)
    setIsWorkoutOver(false)
  }

  useEffect(() => {
    if (reps === 84) {
      console.log('1st tie breaker')
    } else if (reps === 156) {
      console.log('2nd tie breaker')
    } else if (reps === 216) {
      setIsWorkoutOver(true)
    }
  }, [reps])
  return (
    <div className='flex flex-col justify-between h-full'>
      {isWorkoutOver && (
        <div className='fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className='text-4xl font-bold text-center'>DONE</h3>
          <p>REPS:{reps}</p>
          <p>TIME: {reps}</p>
          <p>TIE BREAKER: 00:00:00</p>
          <button onClick={resetTimer} className='border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold mt-8'>RESET</button>
        </div>)}
      <div>
        <h3 className='text-6xl font-bold text-center'>00:00:00</h3>
      </div>
      <div>
        <h3 className='text-2xl font-bold text-center'>Tie Breaker:</h3>
        <p className='text-center'>Tie Breaker: 00:00:00</p>
      </div>
      <div>
        <h3 className='text-2xl font-bold text-center'>Current Movement:</h3>
        <p className='text-center text-xl'>
          {reps <= 21 && isRx && '21 pull-ups'}
          {reps <= 21 && !isRx && '21 jumping pull-ups'}
          {reps > 21 && reps <= 63 && isRx && '42 double-unders'}
          {reps > 21 && reps <= 63 && !isRx && '42 single-unders'}
          {reps > 63 && reps <= 84 && isRx && '21 thrusters (95/65)'}
          {reps > 63 && reps <= 84 && !isRx && '21 thrusters (65/45)'}
          {reps > 84 && reps <= 102 && isRx && '18 chest-to-bar pull-ups'}
          {reps > 84 && reps <= 102 && !isRx && '18 pull-ups'}
          {reps > 102 && reps <= 138 && isRx && '36 double-unders'}
          {reps > 102 && reps <= 138 && !isRx && '36 single-unders'}
          {reps > 138 && reps <= 156 && isRx && '18 thrusters (115/75)'}
          {reps > 138 && reps <= 156 && !isRx && '18 thrusters (85/55)'}
          {reps > 156 && reps <= 171 && isRx && '15 bar muscle-ups'}
          {reps > 156 && reps <= 171 && !isRx && '15 C2B pullups'}
          {reps > 171 && reps <= 201 && isRx && '30 double-unders'}
          {reps > 171 && reps <= 201 && !isRx && '30 single-unders'}
          {reps > 201 && reps <= 216 && isRx && '15 thrusters (135/85)'}
          {reps > 201 && reps <= 216 && !isRx && '15 thrusters (105/65)'}
        </p>
      </div>
      <div>
        <h3 className='text-4xl font-bold text-center'>{reps} reps</h3>
        <div className='mt-8 flex justify-center gap-4'>
          <button onClick={() => setReps(reps - 1)} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold`}>-1</button>
          <button onClick={() => setReps(reps + 1)} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold`}>+1</button>
        </div>
      </div>

    </div>
  )
}

export default TwoFiveTwoTimer
