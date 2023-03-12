import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Configuration, OpenAIApi } from "openai";


function App() {
  const [prompt, setPrompt] = React.useState("")

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY
  });
  console.log(import.meta.env.VITE_OPENAI_KEY)

  const openai = new OpenAIApi(configuration);

  const chatGPT = async (item, newChatHistory) => {
    console.log("maybe today")
    try {
      const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: item,
      temperature: 0.5,
      max_tokens: 100
    })
    setChatHistory([...newChatHistory, {from: "ai", message: response.data.choices[0].text}])
  }
  catch(error){
    console.log(error.response.data)
  }
  } 

  const [toggler, setToggler] = React.useState(false);
  const [chatHistory, setChatHistory] = React.useState([{
    from: "me",
    message: "She loves me" 
  }, {
    from: "ai",
    message: "Here's your response"
}])
 
  return (
    <div className='grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden w-screen'>
      <Sidebar chatHistory={chatHistory} setChatHistory={setChatHistory} toggler={toggler} setToggler={setToggler}/>
      <Main prompt={prompt} chatGPT={chatGPT}setPrompt={setPrompt} chatHistory={chatHistory} setChatHistory={setChatHistory} toggler={toggler} setToggler={setToggler}/>
    </div>
  )
}

export default App
