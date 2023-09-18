import img from '../assets/email-subscribe/images/image.jpg'

const EmailSubscribe = () => {
  return (
    <>
      {/* Background Container */}
      <div className='flex items-center justify-center h-screen bg-zinc-700'>
        {/* Card */}
        <div className='bg-zinc-800 p-2 mx-10  max-w-[26rem] md:max-w-2xl  rounded-2xl '>
          {/* flex container */}
          <div className='flex flex-col md:flex-row'>
            {' '}
            {/* Image */}
            <img
              className=' object-fill h-[25rem] rounded-xl md:h-72   md:rounded-r-none rounded-b-none hover:scale-105 duration-200'
              src={img}
              alt=''
            />
            {/* Content */}
            <div className='p-6 md:p-12 '>
              <h2 className=' text-white text-xl text-center font-serif md:text-left'>
                Get diet and fitness tips in your inbox
              </h2>
              <p className=' text-white text-sm leading-5 tracking-wide text-center my-5 md:text-left'>
                Eat better and exercise better. Sign up for the Diet&Fitness
                newsletter.
              </p>

              {/* Inputs */}
              <div className='flex flex-col mt-5 gap-3 md:flex-row '>
                <input
                  type='text'
                  placeholder='Enter Your Email Address '
                  className=' py-3 px-10  text-center rounded-lg  text-white bg-zinc-800 border border-zinc-600 text-xs md:text-left  md-text-left focus:outline-none'
                />
                <button className='px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500'>
                  Subscribe
                </button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailSubscribe
