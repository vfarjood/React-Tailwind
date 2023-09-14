import EmailSubscribe from './Pages/EmailSubscribe'
import Intro from './Pages/Intro'
import ProductModal from './Pages/ProductModal'
import ExpenseInput from './Components/ExpenseInput'
import ExpensesFilter from './Components/ExpensesFilter'
import Expenses from './Components/Expenses'

export default function App() {
  const expenses = [
    { title: 'car', price: '12500', date: new Date('2018-12-19') },
    { title: 'sofa', price: '960', date: new Date('2017-12-17') },
    { title: 'fan', price: '400', date: new Date('2009-10-27') },
  ]

  const onSaveHandler = enteredData => {
    console.log(enteredData)
  }

  return (
    <>
      {/* <Intro /> */}
      {/* <EmailSubscribe /> */}
      {/* <ProductModal /> */}
      <ExpensesFilter />
      <ExpenseInput onSave={onSaveHandler} />
      <Expenses expenses={expenses} />
    </>
  )
}
