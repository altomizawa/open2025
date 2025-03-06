import React from 'react'

const TwoFiveTwoDescription = ({ setIsRx, isRx, setIsCounterScreen}) => {
  return (
    <div className='mt-4 w-full text-center flex flex-col items-center gap-4'>
      <h2 className='text-3xl font-bold'>25.2</h2>
      <div className='space-x-4'>
        <button onClick={()=>{setIsRx(false)}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer ${!isRx ? 'bg-white text-black border-none' : ''}`}>SCALED</button>
        <button onClick={()=>{setIsRx(true)}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer ${isRx ? 'bg-white text-black border-none' : ''}`}>RX</button>
      </div>
      {
        isRx ? (
        <p>For time:
          <br></br>
          21 pull-ups
          <br></br>
          42 double-unders
          <br></br>
          21 thrusters (weight 1)
          <br></br>
          18 chest-to-bar pull-ups
          <br></br>
          36 double-unders
          <br></br>
          18 thrusters (weight 2)
          <br></br>
          15 bar muscle-ups
          <br></br>
          30 double-unders
          <br></br>
          15 thrusters (weight 3)
          <br></br>
          <br></br>
          Time cap: 12 minutes
          <br></br>
          ♀ 65, 75, 85 lb
          <br></br>
          ♂ 95, 115, 135 lb
        </p>
        ) : (
          <p>For time:
          <br></br>
          21 jumping pull-ups
          <br></br>
          42 single-unders
          <br></br>
          21 thrusters (weight 1)
          <br></br>
          18 pull-ups
          <br></br>
          36 single-unders
          <br></br>
          18 thrusters (weight 2)
          <br></br>
          15 C2B pull-ups
          <br></br>
          30 single-unders
          <br></br>
          15 thrusters (weight 3)
          <br></br>
          <br></br>
          Time cap: 12 minutes
          <br></br>
          ♀ 45, 45, 65 lb
          <br></br>
          ♂ 65, 85, 105 lb
        </p>
        )
      }
      <button onClick={()=>{setIsCounterScreen(true)}} className={`border-[1px] rounded-md w-24 py-2 cursor-pointer font-bold mx-auto mt-8`}>START</button>
    </div>
  )
}

export default TwoFiveTwoDescription
