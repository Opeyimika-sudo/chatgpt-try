import React from 'react'
import {PlusIcon, Bars3Icon} from "@heroicons/react/24/outline"

export default function Navbar({toggler, setToggler}) {

    function handleToggle(){
        setToggler(true);
    }

  return (
    <div className='w-full flex justify-between px-5 sticky bg-gray-800 text-gray-200 z-0 lg:hidden py-3' style={{
        filter: toggler ? "blur(2px)" : "none",
    }}>
        <Bars3Icon className="h-6 w-6 hover:cursor-pointer" onClick={handleToggle} />
        <h4 className="mx-auto">New Chat</h4>
        <PlusIcon className="h-6 w-6 hover:cursor-pointer"/>
    </div>
  )
}
