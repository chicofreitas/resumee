import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ItemsNav from './components/ItemsNav'

function App() {
  
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='absolute py-4'>
        <ItemsNav/>
      </div>

      <div className='fixed top-0 bg-white w-full py-2' data-aos="fade-down" data-aos-anchor=".profile" data-aos-delay="0">
        <ItemsNav/>
      </div>

      <div className='h-screen mb-10'>
        <img src="https://picsum.photos/1980/1000" alt="my photo" />
      </div>

      <main className='profile container mx-auto px-44'>
        <section className='py-20 text-center' data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
          <header className='mb-10'>
            <h1 className='uppercase text-gray-500 font-bold text-2xl'>Chico Freitas</h1>
            <h2 className='uppercase text-gray-400 text-sm'>Senior FullStack Developer</h2>
          </header>

          <div className='flex flex-row'>
            <div className='mr-5'>
              <img src="https://picsum.photos/300/300" alt="my photo" />
            </div>

            <div className='ml-5'>
              <h1>Skills</h1>
            </div>  
          </div>
        </section>

        <section className='py-20 text-center portfolio'>
          <header className='mb-10'>
            <h1 className='uppercase text-gray-500 font-bold text-2xl'>My Portfolio</h1>
            <h2 className='uppercase text-gray-400 text-sm'></h2>
          </header>
            <div className='flex flex-row space-x-4'>
              <div>
                <img src="https://picsum.photos/300/300" alt="" />
              </div>

              <div>
                <img src="https://picsum.photos/300/300" alt="" />
              </div>

              <div>
                <img src="https://picsum.photos/300/300" alt="" />
              </div>

              <div>
                <img src="https://picsum.photos/300/300" alt="" />
              </div>
            </div>
        </section>

        <section className='py-20'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <header className='mb-10 text-center'>
            <h1 className='uppercase text-gray-500 font-bold text-2xl'>Services</h1>
            <h2 className='uppercase text-gray-400 text-sm'></h2>

            <div className='flex flex-row space-x-5'>
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block my-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <p>
                  Officia elit elit incididunt culpa. Proident fugiat dolore qui culpa ad. Dolor proident ad esse reprehenderit culpa culpa. 
                  Exercitation officia reprehenderit veniam sint in. Sit eu eiusmod irure ullamco pariatur ad qui veniam minim esse 
                  reprehenderit sint ex.
                </p>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block my-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <p>
                  Officia elit elit incididunt culpa. Proident fugiat dolore qui culpa ad. Dolor proident ad esse reprehenderit culpa culpa. Exercitation officia reprehenderit veniam sint in. Sit eu eiusmod irure ullamco pariatur ad qui veniam minim esse reprehenderit sint ex.
                </p>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block my-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <p>
                  Officia elit elit incididunt culpa. Proident fugiat dolore qui culpa ad. Dolor proident ad esse reprehenderit culpa culpa. Exercitation officia reprehenderit veniam sint in. Sit eu eiusmod irure ullamco pariatur ad qui veniam minim esse reprehenderit sint ex.
                </p>
              </div>
            </div>
          </header>
        </section>

        <section className='py-20'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <header className='mb-10 text-center'>
            <h1 className='uppercase text-gray-500 font-bold text-2xl'>Resume</h1>
            <h2 className='uppercase text-gray-400 text-sm'></h2>

            <div>
              <button>Download CV PDF</button>
            </div>
          </header>
        </section>
      </main>

      <footer>
        <div>
        
        </div>

        <div></div>
      </footer>
    </>
  )
}

export default App
