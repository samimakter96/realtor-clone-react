import React from 'react'
import spinner from '../assets/spinner.svg'

const Spinner = () => {
  return (
    <div className='bg-white bg-opacity-100 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50'>
      <img src={spinner} alt="spinner" className='h-24'/>
    </div>
  )
}

export default Spinner