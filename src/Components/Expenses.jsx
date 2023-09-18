import ExpenseItem from './ExpenseItem'
const Expenses = ({ expenses, selectedYear }) => {

  const filteredExpenses =  expenses.filter( expense => {
      return expense.date.getFullYear().toString() === selectedYear
  })
const content = <p> test </p>
  return (
    <div className=' bg-amber-600 p-4 '>
      { filteredExpenses.lenght === 0 ? <h2> No data found </h2> : filteredExpenses.map(expense => (
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
