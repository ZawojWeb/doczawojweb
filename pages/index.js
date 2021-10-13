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

{
  /* <div class='max-w-lg mx-auto'>
<div class='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
  <a href='#'>
    <img class='rounded-t-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/1280px-Apache_Maven_logo.svg.png' alt='' />
  </a>
  <div class='p-5'>
    <a href='#'>
      <h5 class='text-gray-900 font-bold text-2xl tracking-tight mb-2'>Po co komu maven i jak to coś zainsatlować</h5>
    </a>
    <p class='font-normal text-gray-700 mb-3'>Instalacja nie jest trudna</p>
    <Link href='/cours/mvn'>
      <a class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'>Poradnik</a>
    </Link>
  </div>
</div>
</div> */
}
