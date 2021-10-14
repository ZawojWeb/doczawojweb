const CoursContainer = ({ children }) => {
  return (
    <div className='mx-auto px-4 py-8 max-w-5xl mt20  text-white drop-shadow-2xl'>
      <div className='bg-gray-800 shadow-2xl rounded-lg mb-6 tracking-wide p-8'>{children}</div>
    </div>
  )
}

export default CoursContainer
