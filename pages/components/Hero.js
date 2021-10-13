import axios from 'axios'
import { useState } from 'react'
import Image from 'next/image'

const site_url = process.env.SITE_URL || 'http://localhost:3000'
const myLoader = ({ src, width, quality }) => {
  return `${site_url}/${src}?w=${width}&q=${quality || 75}`
}

export default function Hero({ dark, blueText, text, img }) {
  const [comitData, setComitData] = useState('')

  const handleSubmit = () => {
    axios.get(`https://api.github.com/repos/zawojweb/doczawojweb/commits`).then((resp) => {
      let date = new Date(resp.data[0].commit.author.date)
      let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`
      setComitData(dateMDY)
    })
  }
  return (
    <div className='w-full mb-20' onLoad={handleSubmit}>
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10  bg-white s w-full'>
            <main className=' mx-auto max-w-7xl px-4 lg:px-8 flex space-x-8 pt-1'>
              <div className='sm:text-center lg:text-left max-w-2xl sm:mt-12 sm:px-6 xl:mt-28 md:mt-16 lg:mt-20'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>{dark}</span> <span className='block text-indigo-600 xl:inline'>{blueText}</span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>{text}</p>
                <p className=''>Last update: {comitData}</p>
              </div>
              <div className=''>
                <Image className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full ' src={img} width={500} height={500} loader={myLoader} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
