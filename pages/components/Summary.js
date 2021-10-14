const Summary = ({ title, text }) => {
  return (
    <div className='mx-auto px-4 py-8 max-w-5xl mt20  text-white drop-shadow-2xl'>
      <div className='bg-gray-800 shadow-2xl rounded-lg mb-6 tracking-wide p-8'>
        <h2 className='text-3xl mb-8'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Summary
