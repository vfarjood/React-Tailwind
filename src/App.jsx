import EmailSubscribe from './Pages/EmailSubscribe'
import Intro from './Pages/Intro'
import ProductModal from './Pages/ProductModal'
import ExpenseInput from './Components/ExpenseInput'
import ExpensesFilter from './Components/ExpensesFilter'
import Expenses from './Components/Expenses'
import { useState } from 'react'

const DUMMY_EXPENSES = [
  { title: 'car', price: '12500', date: new Date('2019-12-19') },
  { title: 'map', price: '100', date: new Date('2020-12-19') },
  { title: 'sofa', price: '960', date: new Date('2022-12-17') },
  { title: 'fan', price: '400', date: new Date('2023-10-27') },
]
export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  //new data received from InputExpenses
  const SaveExpenseDateHandler = newExpenseData => {
    setExpenses(prevState => [...prevState, newExpenseData])
  }
  //filtered date recived from expenseFilter

  const [selectedYear, setSelectedYear] = useState('2023')
  const onDateFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  return (
    <>
      {/* <Intro /> */}
      {/* <EmailSubscribe /> */}
      {/* <ProductModal /> */}
      <ExpensesFilter onDateFilter={onDateFilterHandler} />
      <ExpenseInput onSaveExpenseDate={SaveExpenseDateHandler} />
      <Expenses expenses={expenses} selectedYear={selectedYear} />
    </>
  )
}
