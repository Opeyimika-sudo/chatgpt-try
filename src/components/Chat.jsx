import React from 'react'

export default function Chat() {
  return (
    <div className="absolute bottom-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
      <div className="flex flex-col items-center py-2 w-3/5 mx-5 md:py-3 md:pl-4 border border-gray-900/50 text-white bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
          <textarea name="" id="" rows="1" style={{maxHeight: "200px", 
            height: "24px",
            overflowY: "hidden"
            }}className='m-0 w-full resize-none border-0 p-0 pl-2 pr-7 focus-visible:outline-0 bg-transparent md:pl-0'></textarea>
      </div>
    </div>
    
  )
}
