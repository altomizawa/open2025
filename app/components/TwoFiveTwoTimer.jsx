import { useEffect, useState } from 'react'
import Toast from './Toast'

const TwoFiveTwoTimer = ({ reps, setReps, category, currentWod }) => {
  const [isWorkoutOver, setIsWorkoutOver] = useState(false)
  const [tieBreaker, setTieBreaker] = useState(0)
  const [toast, setToastt] = useState(false)


  console.log( category, currentWod)

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
      setIsWorkoutOver(true);
      handlePause()
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, durationInSeconds]);

  // Function to add Tie breaker
  const addTieBreaker = () => {
    setTieBreaker(seconds)
    setToastt(true)
    setTimeout(() => {
      setToastt(false)
    },2000)
  }

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
    } else if (reps > 201 && reps < 216) {
      setRepsInSet(reps-201)
    } else if (reps >= 216) {
      setIsWorkoutOver(true);
      handlePause();}
  }, [reps]);

  // Function to generate the movement text with completed reps
  const getMovementText = () => {
    if (reps <= 21) return `${repsInSet} / ${currentWod.exercises[0].reps} ${currentWod.exercises[0].name}`;
    // if (reps <= 21 && category=== 'rx') return `${repsInSet} / 21 pull-ups`;
    // if (reps <= 21 && category === 'scaled') return `${repsInSet} / 21 jumping pull-ups`;
    // if (reps <= 21 && category === 'foundations') return `${repsInSet} / 21 bent-over-rows`;
    if (reps > 21 && reps <= 63) return `${repsInSet} / ${currentWod.exercises[1].reps} ${currentWod.exercises[1].name}`;
    // if (reps > 21 && reps <= 63 && !isRx) return `${repsInSet} / 42 single-unders`;
    if (reps > 63 && reps <= 84) return `${repsInSet} / ${currentWod.exercises[2].reps} ${currentWod.exercises[2].name}`;
    // if (reps > 63 && reps <= 84 && !isRx) return `${repsInSet} / 21 thrusters (65/45)`;
    if (reps > 84 && reps <= 102) return `${repsInSet} / ${currentWod.exercises[3].reps} ${currentWod.exercises[3].name}`;
    // if (reps > 84 && reps <= 102 && !isRx) return `${repsInSet} / 18 pull-ups`;
    if (reps > 102 && reps <= 138) return `${repsInSet} / ${currentWod.exercises[4].reps} ${currentWod.exercises[4].name}`;
    // if (reps > 102 && reps <= 138 && !isRx) return `${repsInSet} / 36 single-unders`;
    if (reps > 138 && reps <= 156) return `${repsInSet}  / ${currentWod.exercises[5].reps} ${currentWod.exercises[5].name}`;
    // if (reps > 138 && reps <= 156 && !isRx) return `${repsInSet} / 18 thrusters (85/55)`;
    if (reps > 156 && reps <= 171) return `${repsInSet}  / ${currentWod.exercises[6].reps} ${currentWod.exercises[6].name}`;
    // if (reps > 156 && reps <= 171 && !isRx) return `${repsInSet} / 15 C2B pullups`;
    if (reps > 171 && reps <= 201) return `${repsInSet}  / ${currentWod.exercises[7].reps} ${currentWod.exercises[7].name}`;
    // if (reps > 171 && reps <= 201 && !isRx) return `${repsInSet} / 30 single-unders`;
    if (reps > 201 && reps <= 216) return `${repsInSet}  / ${currentWod.exercises[8].reps} ${currentWod.exercises[8].name}`;
    // if (reps > 201 && reps <= 216 && !isRx) return `${repsInSet} / 15 thrusters (105/65)`;
    return "";
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      {toast && <Toast message='Tie Breaker added' />}
      {isWorkoutOver && (
        <div className='fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h3 className='text-4xl font-bold text-center'>DONE</h3>
          <p>REPS:{reps}</p>
          <p>TIME: {formatTime(seconds)}</p>
          <p>TIE BREAKER: {formatTime(tieBreaker)}</p>
          <p>MOSTRE O RESULTADO PARA O RESPONSÁVEL E DEPOIS CLIQUE NO BOTÃO ABAIXO</p>
          <button onClick={resetTimer} className='border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold mt-8'>RESET</button>
        </div>
      )}


      {/* TIMER */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-8xl font-bold text-center">{formatTime(seconds)}</h2>
        <p className='text-center text-xl'>{getMovementText()}</p>
        <div className="flex gap-4 w-1/2 mt-8">
          {!isRunning && seconds === 0 && (
            <button
            onClick={handleStart}
            className="border-[1px] rounded-md py-2 cursor-pointer w-full"
            >
              START
            </button>
          )}
          {isRunning && (
            <button
            onClick={handlePause}
            className="border-[1px] rounded-md py-2 cursor-pointer w-full"
            >
              PAUSE
            </button>
          )}
          {(seconds > 0 || isRunning) &&(
            <button
            onClick={handleReset}
            className="border-[1px] rounded-md py-2 cursor-pointer w-full"
            >
              RESET
            </button>
          )}
        </div>
      </div>
      
      <div className='flex flex-col items-center w-3/4 mx-auto'>
        <div className='flex justify-center gap-4 mt-8 border-b-[1px] border-white p-2 w-full mx-auto'>
          <h3 className='text-lg uppercase text-center font-bold'>Tie Breaker:</h3>
          <p className='text-center text-lg'>{formatTime(tieBreaker)}</p>
        </div>
        <button onClick={addTieBreaker} className={`border-[1px] rounded-md px-2 py-2 cursor-pointer text-md w-full mx-auto mt-4`}>SET TIE BREAKER</button>
      </div>
      <div>
        
        <div className='mt-8 flex justify-center gap-4 w-full'>
          <button onMouseDown={() => {
              navigator.vibrate(50);
              setReps(reps - 1)
            }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>-1</button>
          <button onMouseDown={() => {
              navigator.vibrate(50);
              setReps(reps + 1)
            }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>+1</button>
        </div>
      </div>
    </div>
  )
}

export default TwoFiveTwoTimer
