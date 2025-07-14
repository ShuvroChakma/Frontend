import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white h-[80px] w-[85%] mx-auto font-medium">
      <h2 className='w-[64px]'>Logo.</h2>
      <div className='flex gap-6'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
