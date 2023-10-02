import React from 'react'
import { useState } from 'react'

const ExpenseInput = ({ onSaveExpenseDate }) => {
  const [input, setInput] = useState({
    title: '',
    date: '',
    price: '',
  })
  const inputHandler = (inputType, value) => {
    if (inputType === 'title') {
      setInput(prevState => ({ ...prevState, title: value }))
    } else if (inputType === 'date') {
      setInput(prevState => ({ ...prevState, date: value }))
    } else {
      setInput(prevState => {
        return { ...prevState, price: value }
      })
    }
  }

  const submitHandler = e => {

    e.preventDefault()
    onSaveExpenseDate(input)
    setInput({ title: '', price: '', date: '' })
  }

  return (
    <div className=' flex bg-slate-700'>
      <form
        onSubmit={submitHandler}
        className=' p-4 '
      >
        <div>
          <label htmlFor='name'> name </label>
          <input
            value={input.title}
            onChange={e => inputHandler('title', e.target.value)}
            className=' border rounded m-3'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='date'>date</label>
          <input
            value={input.date}
            onChange={e => inputHandler('date', e.target.value)}
            className=' border m-3 rounded'
            type='date'
            name='date'
          />
        </div>
        <div>
          <label htmlFor='Price'>Price</label>
          <input
            value={input.price}
            onChange={e => inputHandler('price', e.target.value)}
            className=' border m-3 rounded'
            type='number'
          />
        </div>
        <button
          type='submit'
          className='bg-red-400 rounded-full px-5 py-2 m-10 text-white '
        >
          Submit
        </button>
      </form>
      <section className='p-4'>
        <h3>{input.title}</h3>
        <h3>{input.price}</h3>
        <h3>{input.date} </h3>
      </section>
    </div>
  )
}

export default ExpenseInput
