import React from 'react'

function ExpenseItem({ title, price, date }) {
  // const day = date.getDate()
  // const month = date.getMonth() + 1
  // const year = date.getFullYear()

  return (
    <div className='flex items-center justify-start gap-10 mb-4 p-3 bg-slate-700 rounded-2xl'>
      <p className=' bg-slate-900 text-white p-3 w-1/3 rounded-xl text-center'>
        {title}
      </p>
      <div className='bg-slate-900 text-white p-3 w-1/3 rounded-xl text-center'>
        {/* {day}/{month}/{year} */} date
      </div>
      <div className='bg-slate-900 text-white p-3 w-1/3 rounded-xl text-center'>
        <p>Price: {price}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
