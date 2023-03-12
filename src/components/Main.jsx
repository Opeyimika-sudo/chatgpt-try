import React from 'react'
import Hero from './Hero'
import Chat from './Chat'
import Navbar from './Navbar'
import useWindowSize from './useWindowSize'


export default function Main({toggler, setToggler }) {
  const size = useWindowSize();

  return (
    <div className="flex-1 relative h-screen overflow-y-hidden" style={{backgroundColor: toggler ?  "#4d4f5f": "#343541"}}>
      {/* <p>I love you</p> */}
      <Navbar toggler={toggler} setToggler={setToggler} />
      <Hero toggler={toggler} setToggler={setToggler}/>
      <Chat />
    </div>
  )
}
