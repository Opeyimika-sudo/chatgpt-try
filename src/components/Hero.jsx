import React from 'react'
import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline" 

export default function Hero() {
  return (
    <div>
      <h1 className=''>ChatGPT</h1>

      <section className="">
          <section className=''>
              <section className="">
                    <SunIcon/>
                    <h2>Examples</h2>
              </section>
              <section className="">
                    <button className="">Explain quantum computing in simple terms &#8594;</button>
                    <button className="">Got any creative ideas for a 10 year old’s birthday? &#8594;</button>
                    <button className="">How do I make an HTTP request in Javascript? &#8594;</button>
              </section>
          </section>
          <section className=''>
              <section className="">
                  <BoltIcon/>
                  <h2>Capabilities</h2>
              </section>
              <section className="">
                    <p className="">Remembers what user said earlier in the conversation</p>
                    <p className="">Allows user to provide follow-up corrections</p>
                    <p className="">Trained to decline inappropriate requests</p>
              </section>
          </section>
          <section className=''>
              <section className="">
                    <ExclamationTriangleIcon/>
                    <h2>Limitations</h2>
              </section>
              <section className="">
                    <p className=''>May occasionally generate incorrect information</p>
                    <p className=''>May occasionally produce harmful instructions or biased content</p>
                    <p className=''>Limited knowledge of world and events after 2021</p>
              </section>
          </section>    
      </section>
    </div>
  )
}
