import Link from 'next/link'

const BackButton = ({ btntext }) => {
  return (
    <Link href='/'>
      <button type='button' className='max-w-sm w-full m-auto bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md mx-auto p-5'>
        <div className='text-center'>{btntext}</div>
      </button>
    </Link>
  )
}

export default BackButton
