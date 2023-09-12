import React from 'react'

const Button2 = () => {
  return (
    <button className='border-2 border-gray-300 rounded-lg p-3 shadow-sm hover:shadow-lg hover:-translate-y-1'>
      <div className='flex items-center justify-center gap-4'>
        <img
          className='w-9'
          src={weight}
          alt=''
        />
        <p>Add to cart</p>
      </div>
    </button>
  )
}

export default Button2
