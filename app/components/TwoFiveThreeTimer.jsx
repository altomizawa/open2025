import { useEffect, useState } from 'react'
import Toast from './Toast'

const TwoFiveThreeTimer = ({ reps, setReps, category, currentWod }) => {
  const [isWorkoutOver, setIsWorkoutOver] = useState(false)
  const [tieBreaker, setTieBreaker] = useState(0)
  const [toast, setToastt] = useState(false)

  // TIMER START
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const durationInSeconds = 720; // 12 minutes

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
    setTieBreaker(0);
    setRepsInSet(0) //resets the reps in set.
    setIsWorkoutOver(false)
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
    setIsWorkoutOver(false);
    handleReset();
  };

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
      handlePause();
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, durationInSeconds]);

  // Function to add Tie breaker
  const addTieBreaker = () => {
    setTieBreaker(seconds);
    setToastt(true);
    setTimeout(() => {
      setToastt(false);
    }, 2000);
  };

  //Function to track reps in set
  useEffect(() => {
      const calculateRepsInSet = (currentReps) => {
      let totalRepsBeforeCurrentExercise = 0;
      let currentExerciseIndex = 0;
        
      if (currentReps <= 0) {
        setRepsInSet(0);
        return;
      }

      // Find the current exercise index and calculate total reps before it.
      for (let i = 0; i < currentWod.exercises.length; i++) {
        if (currentReps <= totalRepsBeforeCurrentExercise + currentWod.exercises[i].reps) {
          currentExerciseIndex = i;
          break;
        }
        totalRepsBeforeCurrentExercise += currentWod.exercises[i].reps;
      }

      // Calculate reps in the current set.
      const repsInCurrentSet = currentReps - totalRepsBeforeCurrentExercise;
      setRepsInSet(repsInCurrentSet);

      //check if workout is over.
       const totalReps = currentWod.exercises.reduce((sum, exercise) => sum + exercise.reps, 0)
       if(currentReps >= totalReps){
        setIsWorkoutOver(true);
        handlePause();
       }
      };

      calculateRepsInSet(reps)

  }, [reps, currentWod.exercises]);

  // Function to generate the movement text with completed reps
  const getMovementText = () => {
    let totalReps = 0;

    for (let i = 0; i < currentWod.exercises.length; i++) {
      totalReps += currentWod.exercises[i].reps
        if (reps <= totalReps) {
          return `${repsInSet} / ${currentWod.exercises[i].reps} ${currentWod.exercises[i].name}`;
        }
    }

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
          <p className='px-4 text-center'>MOSTRE O RESULTADO PARA O RESPONSÁVEL E DEPOIS CLIQUE NO BOTÃO ABAIXO</p>
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
          {(seconds > 0 || isRunning) && (
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
            setReps(reps - 1)
            navigator.vibrate(50);
          }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>-1</button>
          <button onMouseDown={() => {
            setReps(reps + 1)
            navigator.vibrate(50);
          }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>+1</button>
        </div>
        <div className='mt-8 flex justify-center gap-4 w-full'>
          <button onMouseDown={() => {
            setReps(reps - 10)
            navigator.vibrate(50);
          }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>-10</button>
          <button onMouseDown={() => {
            setReps(reps + 10)
            navigator.vibrate(50);
          }} className={`border-[1px] rounded-md w-1/2 py-2 cursor-pointer font-bold`}>+10</button>
        </div>
      </div>
    </div>
  )
}

export default TwoFiveThreeTimer
