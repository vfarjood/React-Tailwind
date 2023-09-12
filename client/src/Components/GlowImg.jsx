const GlowImg = ({ url }) => {
  return (
    <div class='grid gap-8 items-start justify-center'>
      <div class='relative group '>
        <div class='absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-400 animate-tilt animate-pulse  '></div>
        <img className='relative rounded-lg shadow-2xl' src={url} alt='' />
      </div>
    </div>
  )
}

export default GlowImg
