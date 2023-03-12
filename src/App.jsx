import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Configuration, OpenAIApi } from "openai";


function App() {
  const [prompt, setPrompt] = React.useState("")
  const [loader, setLoader] = React.useState(false); 

  const API_KEY = "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"

  const configuration = new Configuration({
    // apiKey: import.meta.env.VITE_OPENAI_KEY
    apiKey: API_KEY
  });

  const openai = new OpenAIApi(configuration);

  const chatGPT = async (item, newChatHistory) => {
    try {
      const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: item,
      temperature: 0.5,
      max_tokens: 100
    })
    if(response !== null){
      setLoader(false);
      setChatHistory([...newChatHistory, {from: "ai", message: response.data.choices[0].text}])
    }
    else {
      throw new Error("No response gotten")
    }
  }
  catch(error){
    throw new Error(`Error gotten: ${error.response.data}`) 
  }
  } 

  const [toggler, setToggler] = React.useState(false);
  const [chatHistory, setChatHistory] = React.useState([])
 
  return (
    <div className='grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden w-screen'>
      <Sidebar chatHistory={chatHistory} setChatHistory={setChatHistory} toggler={toggler} setToggler={setToggler}/>
      <Main prompt={prompt} chatGPT={chatGPT}setPrompt={setPrompt} chatHistory={chatHistory} setChatHistory={setChatHistory} toggler={toggler} setToggler={setToggler} loader={loader} setLoader={setLoader}/>
    </div>
  )
}

export default App
