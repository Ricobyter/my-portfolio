import About from './components/About'
import Hero from  './components/Hero'
import Skills from './components/Skills'

function App() {
  return (
    <main className='bg-[#0d1117]'>
       <section id = "/"  className='w-[100vw] flex justify-center items-center'>
        <Hero/>
       </section>
       <section id='about'>
        <About/>
       </section>
       <section id="skills">
       <Skills/>
       </section>
       <section id="projects">

       </section>
       <section id="contacts">

       </section>

    </main>
  )
}

export default App
