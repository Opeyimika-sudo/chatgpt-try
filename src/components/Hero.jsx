import React from 'react'
import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline" 

export default function Hero({ toggler, setToggler }) {
  return (
  <div className='h-[90%] overflow-auto  text-white py-8 self-center px-4 scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-rounded-md'>
      <h1 className="text-4xl font-semibold text-center mx-auto my-10 sm:mb-16 flex gap-2 items-center justify-center">ChatGPT</h1>

      
      <section className="md:flex items-start text-center gap-3.5">
          <section className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
              {/* <section className=""> */}
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><SunIcon className='h-6 w-6'/>Examples</h2>
              
              {/* </section> */}
              <section className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <button className="bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">Explain quantum computing in simple terms &#8594;</button>
                    <button className=" bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">Got any creative ideas for a 10 year old’s birthday? &#8594;</button>
                    <button className="bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">How do I make an HTTP request in Javascript? &#8594;</button>
              </section>
          </section>
          <section className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><BoltIcon className='h-6 w-6'/>Capabilities</h2>
              <section className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <p className="p-3 rounded-md  bg-white/5">Remembers what user said earlier in the conversation</p>
                    <p className="p-3 rounded-md bg-white/5">Allows user to provide follow-up corrections</p>
                    <p className="p-3 rounded-md bg-white/5">Trained to decline inappropriate requests</p>
              </section>
          </section>
          <section className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
              <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><ExclamationTriangleIcon className='h-6 w-6'/>Limitations</h2>
              <section className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                    <p className='p-3 rounded-md bg-white/5'>May occasionally generate incorrect information</p>
                    <p className='p-3 rounded-md bg-white/5'>May occasionally produce harmful instructions or biased content</p>
                    <p className='p-3 rounded-md bg-white/5'>Limited knowledge of world and events after 2021</p>
              </section>
          </section>    
      </section>
    </div>
  )
}
