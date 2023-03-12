import React from 'react'
import {PaperAirplaneIcon} from "@heroicons/react/24/outline"

export default function Chat({prompt, setPrompt,setChatHistory, chatHistory, chatGPT, input, setInput}) {

  React.useEffect(() => {
    document.addEventListener("keydown", detectKey)
  }, [])

  function detectKey(e){
    if(e.key === "Enter" && e.key !== "Shift"){
      handleSubmit(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(input === ""){
      return ;
    }
    await setPrompt(input);
    let newChatHistory = [...chatHistory, {from: "me", message: input}];
    setChatHistory(newChatHistory);
    setInput("")

    const messages = newChatHistory.map((message) => (message.message)).join("\n")
    await chatGPT(messages, newChatHistory);
    
  }

  return (
    <div className="fixed bottom-0 mx-auto w-full lg:w-4/5 pb-3 border-0 md:border-3 border-red md:border-transparent bg-gray-800 flex flex-wrap flex-col ">
      <form className="flex flex-col items-center relative py-2 mx-5 md:py-3 my-2 md:pl-4 border border-gray-900/50 text-white bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
          <textarea name={input} type="text" value={input} rows="1" style={{maxHeight: "200px", 
            height: "24px",
            overflowY: "hidden"
            }}className='m-0 w-full resize-none border-0 p-0 pl-2 pr-7 focus-visible:outline-0 bg-transparent md:pl-0' onChange={(e) => setInput(e.target.value)}/>
            <PaperAirplaneIcon className='absolute right-3 top-1 h-6 w-6 md:top-3 -rotate-45 hover:cursor-pointer hover:scale-110 hover:scale-lg-150' onClick={handleSubmit}/>
      </form>
      <footer className='mx-5 flex flex-wrap text-white'>
         <p className='flex-wrap'><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" className="underline">Chat Jibiti</a> {" "}
        Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </footer>
    </div>
    
  )
}
