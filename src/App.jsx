import About from './components/About'
import Contact from './components/Contact'
import Hero from  './components/Hero'
import Nav from './components/Nav'
import Skills from './components/Skills'

function App() {
  return (
    <main className='bg-[#0d1117] font-Poppins'>
       <Nav />
       <section id = "/"  className='w-[100vw] flex justify-center items-center'>
        <Hero/>
       </section>
       <section id='about' className='w-[100vw] flex justify-center items-center'>
        <About/>
       </section>
       <section id="skills" className='w-[100vw] flex justify-center items-center'>
       <Skills/>
       </section>
       <section id="projects">

       </section>
       <section id="contacts" className='w-[100vw] flex justify-center items-center'>
        <Contact/>
       </section>

    </main>
  )
}

export default App
