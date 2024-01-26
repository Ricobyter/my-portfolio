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
import Express from '../assets/images/express.png'
import VsCode from '../assets/images/vscode.png'
import Jupyter from '../assets/images/jupyter.png'
import Eclipse from '../assets/images/eclipse.png'
import Vercel from '../assets/images/vercelr.png'
import Figma from '../assets/images/figma.svg'
import Github from '../assets/images/github.svg'
import Git from '../assets/images/git.svg'
import Netlify from '../assets/images/netlify.svg'


function Skills() {
  return (
    <div>
      <div>
        <Tabs>
          <Tab label="FrontEnd">
            <div className='grid-cols-3 grid justify-between gap-x-20'>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#1c9cec] rounded-lg flex flex-col justify-center items-center'>
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
            <div className="grid-cols-3 grid grid-flow-rows gap-x-20">
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#64bc64] rounded-lg flex flex-col justify-center items-center'>
                <img src={MongoDB} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>MONGODB</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#ffc404] rounded-lg flex flex-col justify-center items-center'>
                <img src={Firebase} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Firebase</h1>
              </div>
              
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#4aa950] rounded-lg flex flex-col justify-center items-center'>
                <img src={NodeJs} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>NodeJS</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Express} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Express</h1>
              </div>
              

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={Mysql} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>MySQL</h1>
              </div>

              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#b4a4cc] rounded-lg flex flex-col justify-center items-center'>
                <img src={PHP} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>PHP</h1>
              </div>

            </div>
          </Tab>
          <Tab label="Tools">
            <div className="grid-cols-3 grid grid-flow-rows gap-x-20">
            <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#f8541c] rounded-lg flex flex-col justify-center items-center'>
                <img src={Git} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Git</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#4cd4e4] rounded-lg flex flex-col justify-center items-center'>
                <img src={Github} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Github</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#148cdc] rounded-lg flex flex-col justify-center items-center'>
                <img src={VsCode} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>VsCode</h1>

              </div>
            <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#f49c04] rounded-lg flex flex-col justify-center items-center'>
                <img src={Jupyter} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Jupyter Notebook</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#f4cc84] rounded-lg flex flex-col justify-center items-center'>
                <img src={Eclipse} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>EclipseIDE</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#d8d8d8] rounded-lg flex flex-col justify-center items-center'>
                <img src={Vercel} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Vercel</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#34b0bc] rounded-lg flex flex-col justify-center items-center'>
                <img src={Netlify} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Netlify</h1>

              </div>
              <div className='border-b-4 w-[200px] bg-[#111826] mt-4 h-[250px] shadow-sm border-[#e44c1c] rounded-lg flex flex-col justify-center items-center'>
                <img src={Figma} alt="" height={250} />
                <h1 className='mt-2 text-xl font-semibold'>Figma</h1>

              </div>
              
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>

  )
}

export default Skills
