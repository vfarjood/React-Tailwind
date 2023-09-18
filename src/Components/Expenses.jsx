import ExpenseItem from './ExpenseItem'
const Expenses = ({ expenses, selectedYear }) => {

  const filteredExpenses =  expenses.filter( expense => {
      return expense.date.getFullYear().toString() === selectedYear
  })
let content = <p> No data found! </p>
  if(filteredExpenses.length > 0){
    content =  filteredExpenses.map(expense => (
        <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
        />
    ))
  }

  return (
    <div className=' bg-amber-600 p-4 '>
      {content}
    </div>
  )
}

export default Expenses
