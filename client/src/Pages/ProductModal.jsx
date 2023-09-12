import headphone from '../assets/product-modal/images/headphone.png'
import weight from '../assets/product-modal/images/weight.png'
import heart from '../assets/product-modal/images/heart.png'
const ProductModal = () => {
  return (
    <>
      {/* Global Container */}
      <div className='flex items-center justify-center h-screen bg-slate-100 '>
        {/* Card Container */}
        <div className='flex flex-col gap-10 p-6 m-3  bg-white rounded-2xl shadow-2xl md:flex-row'>
          {/* Image div */}
          <div className='p-6'>
            <img
              src={headphone}
              className=' object-contain w-60 hover:scale-110 duration-500 hover:rotate-12 mx-auto animate-vote '
              alt=''
            />
          </div>

          {/* Content div */}
          <div className='flex flex-col md:felx-row gap-4'>
            <div className='flex justify-center md:justify-start'>
              <p className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                Free Shipping
              </p>
            </div>

            <h1 className='md:text-left text-xl text-center'>
              Razer Kraken Kitty Edt Gaming <br /> Headset Quartz
            </h1>
            <p className='md:text-left line-through text-center'>$799</p>
            <p className='md:text-left font-bold text-5xl text-center '>$599</p>
            <p className='md:text-left text-gray-400 text-sm text-center'>
              This offer is valid until April 3rd or as long as stock lasts!
            </p>

            {/* Button */}
            <button className=' bg-blue-500 rounded-lg p-4 text-white'>
              <div className=''>Add to cart</div>
            </button>
            {/* Stocks */}
            <div className=' flex items-center group'>
              <div className=' bg-green-400 w-3 h-3 rounded-full group-hover:animate-ping '></div>
              <p className='text-sm pl-2'>50+ pcs. in stock</p>
            </div>
            {/* Bottom Button Container */}
            <div className='flex flex-col md:flex-row gap-4'>
              <button className='border-2 border-gray-300 rounded-lg p-3 shadow-sm hover:shadow-lg hover:-translate-y-1'>
                <div className='flex items-center justify-center gap-4'>
                  <img
                    className='w-9'
                    src={weight}
                    alt=''
                  />
                  <p>Add to cart</p>
                </div>
              </button>

              <button className='   border-2 border-gray-300 rounded-lg p-3 shadow-sm hover:shadow-lg hover:-translate-y-1'>
                <div className='flex items-center justify-center gap-4'>
                  <img
                    className='w-9 '
                    src={heart}
                    alt=''
                  />
                  <p>Add to wishlist</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductModal
