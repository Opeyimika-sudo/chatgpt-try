import React from 'react'
import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline" 

export default function Hero({ toggler, setToggler }) {
  return (
    <div className='ml-auto md:w-4/5 min-h-screen flex-1 text-white overflow-y-scroll' style={{
      filter: toggler ? "blur(1px)" : "none",
      // outline: "3px solid gold"
  }}>
      <h1 className="text-4xl font-semibold text-center mx-auto my-10 sm:mb-16 flex gap-2 items-center justify-center">ChatGPT</h1>

      <section className="flex flex-col xl:flex-row items-center gap-3 ">
          <section className='flex flex-col gap-3'>
              <section className="flex flex-row lg:flex-col justify-center md:items-center gap-5">
                    <SunIcon className='h-6 w-6'/>
                    <h2>Examples</h2>
              </section>
              <section className="flex flex-col items-center gap-5 w-full">
                    <button className="w-full bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">Explain quantum computing in simple terms &#8594;</button>
                    <button className="w-full bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">Got any creative ideas for a 10 year old’s birthday? &#8594;</button>
                    <button className="w-full bg-[#3e3f4b] p-3 rounded-md hover:bg-gray-900">How do I make an HTTP request in Javascript? &#8594;</button>
              </section>
          </section>
          <section className='flex flex-col gap-3'>
              <section className="flex flex-row lg:flex-col justify-center md:items-center gap-5">
                  <BoltIcon className='h-6 w-6'/>
                  <h2>Capabilities</h2>
              </section>
              <section className="flex flex-col items-center gap-5 text-center">
                    <p className="p-3 rounded-md w-full bg-white/5">Remembers what user said earlier in the conversation</p>
                    <p className="p-3 rounded-md w-full bg-white/5">Allows user to provide follow-up corrections</p>
                    <p className="p-3 rounded-md w-full bg-white/5">Trained to decline inappropriate requests</p>
              </section>
          </section>
          <section className='flex flex-col gap-3'>
              <section className="flex flex-row lg:flex-col justify-center md:items-center gap-5">
                    <ExclamationTriangleIcon className='h-6 w-6'/>
                    <h2>Limitations</h2>
              </section>
              <section className="flex flex-col items-center gap-5 text-center">
                    <p className='p-3 rounded-md w-full bg-white/5'>May occasionally generate incorrect information</p>
                    <p className='p-3 rounded-md w-full bg-white/5'>May occasionally produce harmful instructions or biased content</p>
                    <p className='p-3 rounded-md w-full bg-white/5'>Limited knowledge of world and events after 2021</p>
              </section>
          </section>    
      </section>
    </div>
  )
}
