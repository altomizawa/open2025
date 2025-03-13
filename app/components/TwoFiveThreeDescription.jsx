import { useState } from 'react'


const TwoFiveThreeDescription = ({ setIsCounterScreen, category, currentWod, handleCategoryChange }) => {
  console.log(category)

  return (
    <div className='mt-4 w-full text-center flex flex-col items-center gap-4'>
      <h2 className='text-3xl font-bold'>25.3</h2>
      <div className='space-x-4 text-sm'>
        <button onClick={()=>{handleCategoryChange('scaled')}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer ${category==='scaled' ? 'bg-white text-black border-none' : ''}`}>SCALED</button>
        <button onClick={()=>{handleCategoryChange('rx')}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer ${category==='rx' ? 'bg-white text-black border-none' : ''}`}>RX</button>
      </div>
      <div className='mt-4'>
        <p>For Time:</p>
        {currentWod.exercises.map((exercise, index) => (
          <p key={index} className='font-medium text-md'> 
          {exercise.reps} {exercise.name}
          </p>
        ))}
      </div>
      <button onClick={()=>{setIsCounterScreen(true)}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold mx-auto mt-8`}>NEXT</button>
    </div>
  )
}

export default TwoFiveThreeDescription
