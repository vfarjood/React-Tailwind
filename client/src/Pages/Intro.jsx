import MenuButton from '../Components/MenuButton'
import GlowImg from '../Components/GlowImg'
import Button from '../Components/Button1'

const Intro = () => {
  return (
    <body className='min-h-screen dark:bg-black   dark:text-white'>
      {/* Header ----------- */}
      <header className=' bg-slate-950 bg-opacity-90 sticky top-0 z-10'>
        <section className=' max-w-3xl lg:max-w-5xl mx-auto sm:px-10 px-4 py-4 flex justify-between '>
          <h1 className='text-3xl font-medium text-slate-100'>Meysam Kiani</h1>
          <MenuButton />
          <nav className='hidden sm:block space-x-8 text-xl p-1 '>
            <a
              href='#services'
              className='text-slate-300  hover:opacity-70'
            >
              My Services
            </a>
            <a
              href='#testimonials'
              className='text-slate-300 hover:opacity-70'
            >
              Testimonials
            </a>
            <a
              href='#contacts'
              className='text-slate-300 hover:opacity-70'
            >
              Contact Us
            </a>
          </nav>
        </section>
      </header>

      {/* Main ------------ */}
      <main className=' max-w-3xl lg:max-w-5xl mx-auto sm:px-10 px-6'>
        {/* Hero ---------------------- */}
        <section
          id='hero'
          className=' sm:grid sm:grid-cols-2 sm:gap-10 justify-center items-center flex flex-col-reverse gap-10 mt-6 '
        >
          <article className=' sm:row-span-2 '>
            <h2 className=' text-center text-4xl sm:text-5xl sm:text-left font-bold text-slate-400'>
              I{' '}
              <span className=' text-indigo-400 hover:italic hover:uppercase hover:cursor-pointer '>
                boldly
              </span>{' '}
              Do What Everybody Says Is{' '}
              <span className=' text-indigo-400 italic '>Impossible...</span>
            </h2>
            <p className='mt-5 text-2xl text-center sm:text-left  text-slate-400 '>
              Self-Learnin is king. <br /> Im'currently learning React and
              Node.js and I'm loving it. I'm also learning how to use Tailwind
              CSS and I'm loving that too.
            </p>
            <p className='mt-4 text-2xl text-center sm:text-left  text-slate-400 '>
              Meysam Kiani
            </p>
          </article>
          <GlowImg url='https://images.unsplash.com/photo-1512242712282-774a8bc0d9d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' />

          <div className='hidden sm:block'>
            <GlowImg url='https://images.unsplash.com/photo-1693052649205-1d63f82aab66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60' />
          </div>
        </section>

        <hr className='w-1/2 mx-auto mt-20 bg-black dark:bg-white ' />

        {/* Services ----------- */}
        <section
          id='services'
          className='my-12 py-6'
        >
          <h2 className='text-3xl text-center font-bold  dark:text-slate-200 text-slate-900 '>
            My Services
          </h2>
          <ul>
            <li></li>
          </ul>
        </section>
        <hr className='w-1/2 mx-auto bg-black dark:bg-white ' />

        {/* Contact -------------------- */}
        <section
          id='contact'
          className='my-12 py-6'
        >
          <h2 className='text-3xl text-center font-bold dark:text-slate-200 text-slate-900 '>
            Contact Us{' '}
          </h2>
        </section>
        <hr className='w-1/2 mx-auto bg-black dark:bg-white ' />

        {/* Testimonials------------- */}
        <section
          id='Testimonials'
          className='my-12 py-6'
        >
          <h2 className='text-3xl text-center font-bold  dark:text-slate-200 text-slate-900 '>
            Testimonials{' '}
          </h2>
        </section>
      </main>
      <footer className='mt-10 h-[25rem] bg-slate-800'>
        <h2 className='text-5xl font-bold '>Footer</h2>
      </footer>
    </body>
  )
}

export default Intro
