import Hero from './components/Hero'
import Coureses from './components/coureses'

export default function Home() {
  return (
    <main className='bg-gray-800 min-h-screen'>
      <Hero dark={'Moje poradniki są'} blueText={'zajebiste'} text={'Tworze te poradniki aby pomóc moim szlachetnym i wspaniałym znajomym z studiów. Jak ci się nie podobają moje kursy to oby ci się nidy arch nie zainsatalował.'} img={'hero.png'} />
      <div className='container mx-auto px-4'>
        <Coureses />
      </div>
    </main>
  )
}
