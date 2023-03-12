import React from 'react'

export default function Chat() {
  // border-white/20
  return (
    <div className="fixed bottom-0 mx-auto w-full lg:w-4/5 pb-3 border-0 md:border-3 border-red md:border-transparent md:bg-vert-light-gradient bg-gray-800 md:!bg-transparent md:bg-vert-dark-gradient flex flex-wrap flex-col ">
      <div className="flex flex-col items-center py-2 mx-5 md:py-3 my-2 md:pl-4 border border-gray-900/50 text-white bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
          <textarea name="" id="" rows="1" style={{maxHeight: "200px", 
            height: "24px",
            overflowY: "hidden"
            }}className='m-0 w-full resize-none border-0 p-0 pl-2 pr-7 focus-visible:outline-0 bg-transparent md:pl-0'>

            </textarea>
      </div>
      <footer className='mx-5 flex  text-white'>
         <p><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" className='underline'>ChatGPT Feb 13 Version.</a> {" "}
        Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </footer>
    </div>
    
  )
}
