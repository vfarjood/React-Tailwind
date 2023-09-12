import React from 'react'
import { useState } from 'react'

const Me = props => {
  const [input, setinput] = useState({
    product: '',
    password: '',
    price: '',
  })

  const inputHandler = (inputType, value) => {
    if (inputType === 'product') {
      setinput(prevState => ({ ...prevState, product: value }))
    } else if (inputType === 'password') {
      setinput(prevState => ({ ...prevState, password: value }))
    } else {
      setinput(prevState => ({ ...prevState, price: value }))
    }
  }

  const submitHandler = e => {
    e.preventDefault()
    props.onSave(input)
    setinput({ product: '', price: '', password: '' })
  }

  return (
    <div className=' '>
      <form
        onSubmit={submitHandler}
        className=' p-4 bg-slate-700 '
      >
        <div>
          <label htmlFor='Product'> Product </label>
          <input
            value={input.product}
            onChange={e => inputHandler('product', e.target.value)}
            className=' w-1/3 border rounded m-3'
            type='text'
            name='Product'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            value={input.password}
            onChange={e => inputHandler('password', e.target.value)}
            className='w-1/3 border m-3 rounded'
            type='password'
            name='password'
          />
        </div>
        <div>
          <label htmlFor='Price'>Price</label>
          <input
            value={input.price}
            onChange={e => inputHandler('price', e.target.value)}
            className='w-1/3 border m-3 rounded'
            type='number'
            name='Price'
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
        <h3>{input.product}</h3>
        <h3>{input.price}</h3>
        <h3>{input.password} </h3>
      </section>
    </div>
  )
}

export default Me
