import Hero from './components/Hero'
import Coureses from './components/coureses'

export default function Home() {
  return (
    <main className='bg-gray-800 min-h-screen'>
      <Hero />
      <div className='container mx-auto px-4'>
        <Coureses />
      </div>
    </main>
  )
}
