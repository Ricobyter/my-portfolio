import About from './components/About'
import Contact from './components/Contact'
import Hero from  './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  
  return (
    <main className='bg-[#0d1117]   font-Poppins w-[100vw] overflow-hidden'>
      {/* bg-[#0d1117] */}
       <Nav />
       <section id = "/"  className='w-[100vw] flex justify-center items-center relative'>
        <Hero/>
       </section>
        <section id='about' className='w-[100vw] h-[100vh] max-sm:h-full flex justify-center items-center'>
        <About/>
       </section>
       
       <section id="skills" className='w-[100vw] max-md:h-[100vh] flex justify-center items-center'>
       <Skills/>
       </section>
       <section id="projects" className='w-[100vw] md:h-[100vh] flex justify-center items-center'>
        <Projects />
       </section> 
      <section id="contacts" className='w-[100vw] flex justify-center items-center'>
        <Contact/>
       </section> 

    </main>
  )
}

export default App
