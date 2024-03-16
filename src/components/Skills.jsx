import React, { useEffect } from 'react'
import { Tabs, Tab } from './Tabs.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { bskills, fskills, oskills } from '../assets/constants/index.js';
import SkillCard from './SkillCard.jsx';


function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 }),
      AOS.refresh()
  }, [])

  return (
    <div className='relative'>
      <div>
        <div className='flex gap-2 mb-20 text-white relative' >
          < div className='w-full ' data-aos='zoom-in'>
            < h1 className='text-center text-sm mb-2 tracking-wide'>Learn more about</ h1>
            < h1 className='text-3xl md:text-4xl lg:text-5xl mb-2 text-center text-white tracking-wide'>My Skills </ h1>
          </ div>
        </div>

        <div data-aos='fade-up'>
          <Tabs>

            <Tab label="FrontEnd" className='w-full'>
              <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid gap-x-10'>
                {
                  fskills.map((card) => (
                    <SkillCard
                      key={card.title}
                      img={card.img}
                      title={card.title}
                      style={card.style}
                    />
                  ))
                }

              </div>

            </Tab>

            <Tab label="Backend">
              <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid gap-x-10'>
                {
                  bskills.map((card) => (
                    <SkillCard
                      key={card.title}
                      img={card.img}
                      title={card.title}
                      style={card.style}
                    />
                  ))
                }

              </div>
            </Tab>

            <Tab label="Tools">
              <div className='grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid gap-x-10'>
                {
                  oskills.map((card) => (
                    <SkillCard
                      key={card.title}
                      img={card.img}
                      title={card.title}
                      style={card.style}
                    />
                  ))
                }

              </div>
            </Tab>
            
          </Tabs>
        </div>
      </div>
    </div>

  )
}

export default Skills
