import React from 'react'
import myImage from "../assets/me.avif"
import aiImage from "../assets/ai.avif"


export const ChatMessage = ({item, index}) => {

  return (
      <div className="flex gap-5 w-full">
        <div className={`${item.from === "me" ? "bg-white-600" : "bg-green-400"} w-10 h-10 rounded-md mb-5`}>
          <img src={`${item.from === "me" ? myImage: aiImage}`} alt="" className="object-cover rounded-md w-full h-full"/>
        </div>
        <p>{item.message}</p>
      </div>
  )

}

export default function ChatHistory({chatHistory, setChatHistory}) {
  const bottomRef = React.useRef(null);

  React.useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior: "smooth"})
}, [chatHistory])

    const chat = chatHistory.map((item, index) => (
      <div key={index} className={`${item.from === "me" ? 
      "bg-transparent" : "bg-[rgb(68,70,84)]"} w-full py-5 rounded-md px-2 break-words`}>
        <ChatMessage key={index} item={item} index={index}/>
      </div>
      ))
  return (
    <div className='h-[80%] overflow-auto w-5/5 mx-auto spacing-y-10 mb-10 text-white py-8 self-center px-4 scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-rounded-md'>
      {chat}
      <div ref={bottomRef} className="h-2"></div>
    </div>
  )
}
