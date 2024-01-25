import React from 'react'
import { Tabs, Tab } from './Tabs.jsx';
import CSS from '../assets/images/css.svg'

function Skills() {
  return (
<div>
<div>
      <Tabs>
        <Tab label="FrontEnd">
            <div className='flex justify-between '>
              <div className='border-b-6 w-[200px] bg-slate-700 h-[250px] shadow-sm border-indigo-600 rounded-lg flex flex-col justify-center items-center'>
                <img src={CSS} alt="" height={250}/>
                <h1 className='mt-2 text-2xl font-semibold'>CSS</h1>

              </div>
            </div>

        </Tab>
        <Tab label="Backend">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
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
