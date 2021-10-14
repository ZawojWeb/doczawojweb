import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://doczawojweb.vercel.app/${src}?w=${width}&q=${quality || 75}`
}

const CoursImage = ({ width, height, src }) => {
  return (
    <div className='mt-8'>
      <Image src={`${src}`} width={width} height={height} loader={myLoader} />
    </div>
  )
}

export default CoursImage
