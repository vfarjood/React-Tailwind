import ExpenseItem from './ExpenseItem'

// eslint-disable-next-line react/prop-types
const Expenses = ({ expenses, selectedYear }) => {
  return (
    <div className=' bg-amber-600 p-4 '>
      {expenses.map(expense => expense.date === selectedYear && (
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
