import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {

  return (
    <>
      <div>
        <nav id="home">
          <a href="#home">Home</a>

          <a href="#profile">Profile</a>

          <a href="#work">Work</a>

          <a href="#services">Services</a>

          <a href="#resume">Resume</a>

          <a href="#blog">Blog</a>

          <a href="#connect">Connect</a>
        </nav>
      </div>
      
      <div>
        hero
      </div>

      <main className='container mx-auto px-44'>
        <section>
          <h1>Chico Freitas</h1>
          <h2>Senior FullStack Developer</h2>

          <div className='flex flex-row'>
            <div className='mr-5'>
              <img src="https://picsum.photos/300/300" alt="my photo" />
            </div>

            <div className='ml-5'>
              <h1>Skills</h1>
            </div>
          </div>
        </section>

        <section>
          <h1>My Portfolio</h1>
          <h2></h2>
        </section>

        <section>
          <h1>Services</h1>
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
