import React from 'react'

const Toast = ({ message }) => {
  return (
    <div className='fixed top-2 right-2 rounded-md p-4 bg-gray-800/50 text-white'>
      {message}
    </div>
  )
}

export default Toast
