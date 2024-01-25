import About from './components/About'
import Hero from  './components/Hero'
import Skills from './components/Skills'

function App() {
  return (
    <main className='bg-[#0d1117]'>
       <section id = "/"  className='w-[100vw] flex justify-center items-center'>
        <Hero/>
       </section>
       <section id='about' className='w-[100vw] flex justify-center items-center'>
        <About/>
       </section>
       <section id="skills" className='w-[100vw]'>
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
