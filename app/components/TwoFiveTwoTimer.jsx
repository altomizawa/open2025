import { useEffect, useState } from 'react'
import Timer from './Timer'

const TwoFiveTwoTimer = ({ reps, setReps, movement, setMovement, isRx }) => {
  const [isWorkoutOver, setIsWorkoutOver] = useState(false)
  const [tieBreaker, setTieBreaker] = useState(0)
  // TIMER START
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const durationInSeconds = 720;

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setReps(0);
    setTieBreaker(0)
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  // TIMER END

  // Added state to track reps completed in a set
  const [repsInSet, setRepsInSet] = useState(0);

  const resetTimer = () => {
    setIsWorkoutOver(false)
    handleReset()
    setRepsInSet(0)
  }

  // Timer useEffect - Only for timer updates
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    if (seconds >= durationInSeconds) {
      handlePause()
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, durationInSeconds]);

  // Reps useEffect - Only for rep-based actions
  useEffect(() => {
    if (reps >= 84) {
        if (reps === 84) setTieBreaker(seconds)
    }
    if (reps >= 156) {
        if (reps === 156) setTieBreaker(seconds)
    }
    if (reps >= 216) {
      setIsWorkoutOver(true);
      handlePause();
    }
    
  }, [reps, seconds])

  //Function to track reps in set
  useEffect(() => {
    if (reps <= 21 ) {
      setRepsInSet(reps)
    } else if (reps > 21 && reps <= 63) {
      setRepsInSet(reps-21)
    } else if (reps > 63 && reps <= 84) {
      setRepsInSet(reps-63)
    } else if (reps > 84 && reps <= 102) {
      setRepsInSet(reps-84)
    } else if (reps > 102 && reps <= 138) {
      setRepsInSet(reps-102)
    } else if (reps > 138 && reps <= 156) {
      setRepsInSet(reps-138)
    } else if (reps > 156 && reps <= 171) {
      setRepsInSet(reps-156)
    } else if (reps > 171 && reps <= 201) {
      setRepsInSet(reps-171)
    } else if (reps > 201 && reps <= 216) {
      setRepsInSet(reps-201)
    }
  }, [reps]);

  // Function to generate the movement text with completed reps
  const getMovementText = () => {
    if (reps <= 21 && isRx) return `${repsInSet}/21 pull-ups`;
    if (reps <= 21 && !isRx) return `${repsInSet}/21 jumping pull-ups`;
    if (reps > 21 && reps <= 63 && isRx) return `${repsInSet}/42 double-unders`;
    if (reps > 21 && reps <= 63 && !isRx) return `${repsInSet}/42 single-unders`;
    if (reps > 63 && reps <= 84 && isRx) return `${repsInSet}/21 thrusters (95/65)`;
    if (reps > 63 && reps <= 84 && !isRx) return `${repsInSet}/21 thrusters (65/45)`;
    if (reps > 84 && reps <= 102 && isRx) return `${repsInSet}/18 chest-to-bar pull-ups`;
    if (reps > 84 && reps <= 102 && !isRx) return `${repsInSet}/18 pull-ups`;
    if (reps > 102 && reps <= 138 && isRx) return `${repsInSet}/36 double-unders`;
    if (reps > 102 && reps <= 138 && !isRx) return `${repsInSet}/36 single-unders`;
    if (reps > 138 && reps <= 156 && isRx) return `${repsInSet}/18 thrusters (115/75)`;
    if (reps > 138 && reps <= 156 && !isRx) return `${repsInSet}/18 thrusters (85/55)`;
    if (reps > 156 && reps <= 171 && isRx) return `${repsInSet}/15 bar muscle-ups`;
    if (reps > 156 && reps <= 171 && !isRx) return `${repsInSet}/15 C2B pullups`;
    if (reps > 171 && reps <= 201 && isRx) return `${repsInSet}/30 double-unders`;
    if (reps > 171 && reps <= 201 && !isRx) return `${repsInSet}/30 single-unders`;
    if (reps > 201 && reps <= 216 && isRx) return `${repsInSet}/15 thrusters (135/85)`;
    if (reps > 201 && reps <= 216 && !isRx) return `${repsInSet}/15 thrusters (105/65)`;
    return "";
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      {isWorkoutOver && (
        <div className='fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className='text-4xl font-bold text-center'>DONE</h3>
          <p>REPS:{reps}</p>
          <p>TIME: {formatTime(seconds)}</p>
          <p>TIE BREAKER: {formatTime(tieBreaker)}</p>
          <button onClick={resetTimer} className='border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold mt-8'>RESET</button>
        </div>)}
      {/* TIMER */}
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-center">{formatTime(seconds)}</h2>
      <div className="flex gap-4 mt-4">
        {!isRunning && seconds === 0 && (
          <button
            onClick={handleStart}
            className="border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold"
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            onClick={handlePause}
            className="border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold"
          >
            Pause
          </button>
        )}
        {(seconds > 0 || isRunning) &&(
          <button
            onClick={handleReset}
            className="border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold"
          >
            Reset
          </button>
        )}
      </div>
    </div>

      <div>
        <h3 className='text-2xl font-bold text-center'>Tie Breaker:</h3>
        <p className='text-center'>{formatTime(tieBreaker)}</p>
      </div>
      <div>
        <h3 className='text-2xl font-bold text-center'>Current Movement:</h3>
        {/* Display the new format with completed reps */}
        <p className='text-center text-xl'>{getMovementText()}</p>
      </div>
      <div>
        <h3 className='text-4xl font-bold text-center'>{reps} reps</h3>
        <div className='mt-8 flex justify-center gap-4'>
          <button onClick={() => {
              setReps(reps - 1)
            }} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold`}>-1</button>
          <button onClick={() => {
              setReps(reps + 1)
            }} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold`}>+1</button>
        </div>
      </div>
    </div>
  )
}

export default TwoFiveTwoTimer
