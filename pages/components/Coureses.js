import CoursCard from './CoursCard'
export default function Coureses() {
  return (
    <section className='py-20'>
      <header className='py-12 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center'>
        <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl'>Poradniki i kursy na wszelakie tematy.</h1>
        <h2 className='mt-4 max-w-2xl text-xl lg:mx-auto'>Większości kursy są nie przydatne do życia, ale ułatwią ci przygotowanie do labów lub ćwików.</h2>
      </header>
      <div className='flex flex-wrap'>
        <CoursCard link='/cours/mvn' title='Po co komu maven i jak to coś zainsatlować' subtext='Instalacja nie jest trudna' img='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/1280px-Apache_Maven_logo.svg.png' />
        <CoursCard link='/cours/mvnUse' title="Jak używać maven'a, PMD i checkestyle" subtext='Ogólnie fajne' img='mavenChechPmd.png' />
      </div>
    </section>
  )
}
