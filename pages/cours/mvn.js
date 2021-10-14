import Link from 'next/link'
import Image from 'next/image'
// import ReactPlayer from 'react-player'
const myLoader = ({ src, width, quality }) => {
  return `https://doczawojweb.vercel.app/${src}?w=${width}&q=${quality || 75}`
}
const mvn = () => {
  return (
    <section className='bg-gray-800 min-h-screen'>
      <div className='container mx-auto px-4'>
        <Link href='/'>
          <button type='button' className='max-w-sm w-full m-auto bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md mx-auto p-5'>
            <div className='text-center'>Nie chce już tego kursu</div>
          </button>
        </Link>

        <h1 className='text-7xl text-white mt-20 text-center'>MAVEN IN 5 min</h1>
        <div className='mx-auto px-4 py-8 max-w-5xl mt20  text-white drop-shadow-2xl'>
          <div className='bg-gray-800 shadow-2xl rounded-lg mb-6 tracking-wide p-8'>
            {/* Template section */}
            <div className='max-w-2xl m-auto'>
              <h2 className='text-3xl mb-8'>Zanim zaczniemy muszę poruszyć pewną kwestię</h2>
              <p>Uwielbiam takie dokumentacje jak ta od Maven, białe jebitne tło i super preprequisites. Na samamy starcie dowiadujesz się: </p>
              <div className='py-4'>
                <i>You must understand how to install software on your computer. If you do not know how to do this, please ask someone at your office, school, etc. or pay someone to explain this to you. The Maven mailing lists are not the best place to ask for this advice.</i>
              </div>
              <p>czyli mówią byś się do nich nie odzywał bo są ku*wa zajęci, tworzeniem czegoś ahhhh, no nic zdajesz się na internałtów jak coś nie działa jak trzeba. Ale mamy stackoverflow więc ez.</p>
            </div>
            {/* End */}
            <div className='mt-20 max-w-2xl m-auto'>
              <h2 className='text-3xl mb-8'>Instalacja</h2>
              <p>Instalacja i configuracja tak naprawdę. Bo troszku trzeba się namęczyć w zmiennych środowiskowych. Ale spoko nie napisali ci tego w doc muisz sam szukać. Znaczy no naspiali ale i tak chuja sie z tego dowiedziałem więc jebać ich i robimy to na własną rękę.</p>

              <h3 className='text-xl mt-4'>JDK & JAVA_HOME</h3>
              <p className='mb-4'>
                Pierwszym krokiem jest pobranie JDK, jak masz to fajnie a jak nie masz to pobierz{' '}
                <a className='text-pink-500' href='https://www.oracle.com/java/technologies/downloads/'>
                  link
                </a>
              </p>

              <b>UWAGA! ZAPAMIĘTAJ FOLDER W KTÓYM INSTALUJESZ JDK</b>
              <p className='text-xs'>
                Domyślnie jest to najczęściej Program Files {'>'} Java {'>'} jdk-v
              </p>
            </div>
            <div className='mt-8'>
              <Image src='jdk.png' width={3137} height={837} loader={myLoader} />
            </div>
            <div className='max-w-2xl m-auto mt-8'>
              <p>A teraz trzeba ustawić w zeminnych środowiwkowych JAVA_HOME; </p>
            </div>
            <div className='mt-8'>
              <video autoPlay loop style={{ width: 'auto', height: 'auto' }}>
                <source src='/JAVA_HOME_LIGHT.mp4' />
              </video>
            </div>

            <h3 className='text-xl mt-16'>Pobieranie MAVEN'a i ustawienie go w zmiennych środowkiskowych</h3>
            <p className='mb-4'>
              Dobra, więc Mavena sobie pobierzemy z ich strony, bo to jedno co fajnie jest nawet fajne{' '}
              <a className='text-pink-500' href='https://maven.apache.org/download.cgi'>
                link
              </a>
            </p>
            <div className='mt-8'>
              <Image src='maven.png' width={2743} height={868} loader={myLoader} />
            </div>
            <p className='mt-4'>Jak się uda pobrać, i podczas pobierania nie zmienimy zdania i chcemy dalej żyć na tej ziemi to lecimy dalej. Trzeba to coś rozpakować i podpiąć.</p>
            <h3 className='text-xl mt-16'>Rozpakowanie</h3>
            <p>Tak w sumie możesz sobie zrobić to jak chcesz byle pamiętać gdzie jest to rozpakowane. Może być nawet w pobranych</p>
            <video autoPlay loop style={{ width: 'auto', height: 'auto' }}>
              <source src='/mavenInstall.mp4' />
            </video>
            <h3 className='text-xl mt-16'>Teraz trzeba ustawić maven_home i h2_home</h3>
            <p>Tak w sumie to narazie nie wiem na jaki chuk to ustawiać ale jak się dowiem to zaaktualizuje to. Albo i nie, chuj wie.</p>
            <video autoPlay loop style={{ width: 'auto', height: 'auto' }}>
              <source src='/maveHome.mp4' />
            </video>
            <h3 className='text-xl mt-16'>No i na koniec dodanie mvn do path</h3>
            <p>No to już jest w sumie znana procedura, java cpp i każde inne gówno muisz podpiąć. Albo i nie jeśli intalator robi to z automatu.</p>
            <video autoPlay loop style={{ width: 'auto', height: 'auto' }}>
              <source src='/path.mp4' />
            </video>
          </div>
        </div>
        <div className='mx-auto px-4 py-8 max-w-5xl mt20  text-white drop-shadow-2xl'>
          <div className='bg-gray-800 shadow-2xl rounded-lg mb-6 tracking-wide p-8'>
            <h2 className='text-3xl mb-8'>I to by było na tyle w tym jakże zajebistym poradniku. Jeżeli ci się podobało to fajnie a jak nie to chuj ci na kurwe. I serio nie obchodzi mnie jeśli ci sie nie podoba.</h2>
            <p>A i jeszcze nie ma tutaj odp po co komu ten Maven ale w następnym już napisze po co i jak tego używać</p>
          </div>
        </div>
      </div>
      <Link href='/'>
        <button type='button' className='max-w-sm w-full m-auto bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md mx-auto p-5'>
          <div className='text-center'>Wracam do menu</div>
        </button>
      </Link>
    </section>
  )
}

export default mvn
