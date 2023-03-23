import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  
  // Open mobile navbar
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  }

  // Click outside mobile navbar will close it
  const navbarRef = useRef();
  useEffect(() => {
    const handler = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            setOpen(false);
        }
    }
    document.addEventListener("mousedown", handler);
  }); 

  return (
    <div className='flex px-4 bg-black text-white items-center'>

        {/* Desktop Navbar */}
        <div className='w-full p-4 text-4xl font-bold text-teal-400'>React</div>
        <div className={open ? 'hidden' : 'hidden md:flex'}>
            <p className='p-4'>Home</p>
            <p className='p-4'>Company</p>
            <p className='p-4'>Resources</p>
            <p className='p-4'>About</p>
            <p className='p-4 w-[120px]'>Contact Us</p>
        </div>

        {/* Mobile Navbar */}
        <div ref={navbarRef}>
            <div className='md:hidden' onClick={handleNav}>
                <AiOutlineMenu/>
            </div>
            <div className={open ? 'flex flex-col fixed left-0 top-0 bg-black w-[30%] border-r border-r-gray-300 h-full ease-in-out duration-300' : 'fixed left-[-100%]'}>
                <p className='p-4 border-b border-b-gray-400'>Home</p>
                <p className='p-4 border-b border-b-gray-400'>Company</p>
                <p className='p-4 border-b border-b-gray-400'>Resources</p>
                <p className='p-4 border-b border-b-gray-400'>About</p>
                <p className='p-4'>Contact Us</p>
            </div>
        </div>

    </div>
  )
}

export default Navbar