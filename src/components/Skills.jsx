import React from 'react'
import { Tabs, Tab } from './Tabs.jsx';
import CSS from '../assets/images/css.svg'
import HTML from '../assets/images/html.svg'
import Bootstrap from '../assets/images/bootstrap.svg'
import MaterialUi from '../assets/images/material-ui.svg'
import Javascript from '../assets/images/javascript.svg'
import Reactimg from '../assets/images/react.png'
import Mysql from '../assets/images/mysql.png'
import NodeJs from '../assets/images/nodejs.svg'
import MongoDB from '../assets/images/mongodb.svg'
import Firebase from '../assets/images/firebase.svg'
import Typescript from '../assets/images/typescript.png'
import Tailwind from '../assets/images/tailwind.png'
import PHP from '../assets/images/php.png'
import NextJS from '../assets/images/nextjs.png'



function Skills() {
  return (
    <div>
      <div>
        <Tabs>
          <Tab label="FrontEnd">
            <div className='grid-cols-3 grid px-10'>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Typescript} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Typescipt</h1>

              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#719fd7] rounded-lg flex flex-col justify-center items-center'>
                <img src={Reactimg} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>REACTJS</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#cfcfcf] rounded-lg flex flex-col justify-center items-center'>
                <img src={NextJS} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>NextJS</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Tailwind} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>TailwindCSS</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={HTML} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>HTML</h1>

              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#7c54bc] rounded-lg flex flex-col justify-center items-center'>
                <img src={Bootstrap} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>BOOTSRAP</h1>
              </div>


              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#1cacec] rounded-lg flex flex-col justify-center items-center'>
                <img src={MaterialUi} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>MaterialUi</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#fbd304] rounded-lg flex flex-col justify-center items-center'>
                <img src={Javascript} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>JavaScript</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#0494e4] rounded-lg flex flex-col justify-center items-center'>
                <img src={CSS} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>CSS</h1>

              </div>

              

            </div>

          </Tab>
          <Tab label="Backend">
            <div className="grid-cols-3 grid px-10">
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={MongoDB} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>MONGODB</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#ffc404] rounded-lg flex flex-col justify-center items-center'>
                <img src={Firebase} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Firebase</h1>
              </div>
              
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={NodeJs} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>NodeJS</h1>
              </div>
              

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Mysql} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>MySQL</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={PHP} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>PHP</h1>
              </div>

            </div>
          </Tab>
          <Tab label="Tools">
            <div className="py-4">
              <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
                aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
                molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>

  )
}

export default Skills
