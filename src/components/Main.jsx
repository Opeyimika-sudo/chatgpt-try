import React from 'react'
import Hero from './Hero'
import Chat from './Chat'
import Navbar from './Navbar'


export default function Main({toggler, setToggler }) {

  return (
    <div className="h-full flex-1" style={{backgroundColor: toggler ?  "#4d4f5f": "#343541"}}>
      <Navbar toggler={toggler} setToggler={setToggler} />
      <Hero toggler={toggler} setToggler={setToggler}/>
      <Chat />
    </div>
  )
}
