import Link from 'next/link'

const CoursCard = ({ link, subtext, title, img }) => {
  return (
    <div className='max-w-lg mx-auto'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-auto'>
        <a href='#'>
          <img className='rounded-t-lg' src={img} alt='' />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>{title}</h5>
          </a>
          <p className='font-normal text-gray-700 mb-3'>{subtext}</p>
          <Link href={link}>
            <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'>Poradnik</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursCard
