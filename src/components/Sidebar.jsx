import React from 'react'
import {PlusIcon, XMarkIcon, UserIcon, ArrowTopRightOnSquareIcon, ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
import useWindowSize from './useWindowSize';

export default function Sidebar({toggler, setToggler}) {
  const size = useWindowSize();
    
  function handleCancel(){
    setToggler(false);
  }

  

  return (
    <div className='w-3/5 sm:w-2/5 absolute flex'
      style={{
        zIndex: 1000,
      }}>
      <div className='w-4/5 flex-col justify-between border-white/20  h-screen bg-gray-900 text-white relative' style={{
        display: size.width < 640 ? (toggler ? "flex"  :"none") : "inline-flex",
      }}>
        <button className='w-4/5 mx-auto flex gap-2 bg-gray-500/10 py-2 my-3 px-4 sm:px-8 border-white border rounded-lg hover:bg-gray-800'>
          <PlusIcon className='h-6 w-6 text-white'/>
          New Chat
        </button>

        <div style={{
          position: "absolute",
          display: size.width < 640 ? (toggler ? "inline-block"  :"none") : "none",
          top: 6,
          right: -30,
      }}>
          <XMarkIcon className="h-6 w-6 text-white my-4 border ml-4 sm:ml-0 hover:cursor-pointer" onClick={handleCancel}/>
        </div>

        <section className="py-3 my-3 text-gray-100 flex flex-col text-center">
          <p className='italic text-gray-500'>Unable to load history</p>
          <button className='btn btn-dark btn-small m-auto px-2 mt-2 border border-white/20 rounded-md hover:cursor-pointer hover:btn-dark-900'>Retry</button>
        </section>

        <section className="flex flex-col justify-between h-1/4 border-t-white border-t mx-3 my-4">
          <button className="flex gap-2 sm:gap-5 hover:bg-[#8d8da01a] hover:rounded-md mt-2 py-2 ml-1 pl-3">
            <UserIcon className='h-6 w-6'/>
            <span className=''>Upgrade to Plus</span>
            {/* <span className=''>NEW</span> */}
          </button>
          {/* <button className="">
           
            <span className=''>Light mode</span>
          </button> */}
          <a href="https://help.openai.com/en/collections/3742473-chatgpt" target="_blank" className='hover:bg-[#8d8da01a] mt-1 py-2 ml-1 pl-3 hover:rounded-md'>
            <button className='flex gap-2 sm:gap-5 '>
              <ArrowTopRightOnSquareIcon className='h-6 w-6'/>
              <span className=''>Updates & FAQs</span>
            </button>
          </a>
          <button className="flex gap-2 sm:gap-5 hover:rounded-md hover:bg-[#8d8da01a] mt-2 py-2 ml-1 pl-3">
            <ArrowRightOnRectangleIcon className='h-6 w-6'/>
            <span className=''>Log out</span>
          </button>
        </section>
      </div>
      
    </div>
  )
}
