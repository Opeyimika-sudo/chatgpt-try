import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
// import Navbar from './components/Navbar'

function App() {
  const [toggler, setToggler] = React.useState(false);

  return (
    <div className='grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden'>
      <Sidebar toggler={toggler} setToggler={setToggler}/>
      <Main toggler={toggler} setToggler={setToggler}/>
    </div>
  )
}

export default App
