import React from 'react'

const Expenses = props => {
  return (
    <div className=' bg-amber-600 h-60 flex-col'>
      {props.items.map(item => {
        ;<ul className='flex'>
          <li> {item.title} </li>
          <li> {item.price} </li>
          <li> {item.date} </li>
        </ul>
      })}
    </div>
  )
}

export default Expenses
