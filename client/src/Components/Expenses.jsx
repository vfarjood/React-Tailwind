import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenses }) => {
  return (
    <div className=' bg-amber-600 p-4 '>
      {expenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  )
}

export default Expenses
