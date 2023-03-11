import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [toggler, setToggler] = React.useState(false);

  return (
    <div className='flex relative min-w-screen justify-between min-h-screen'>
      <Sidebar toggler={toggler} setToggler={setToggler}/>
      <Main toggler={toggler} setToggler={setToggler}/>
    </div>
  )
}

export default App
