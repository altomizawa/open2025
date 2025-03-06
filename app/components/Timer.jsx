import { useEffect, useState } from 'react';

const Timer = ({ durationInSeconds = 720, onTimerComplete = () => {} }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds < durationInSeconds) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (seconds >= durationInSeconds) {
      setIsRunning(false);
      onTimerComplete()
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, durationInSeconds, onTimerComplete]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
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
  );
};

export default Timer;
