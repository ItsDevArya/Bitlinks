import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <nav className="bg-gray-600 h-14 flex justify-between items-center text-white p-4">
    <div className="logo font-bold text-2xl  ">BitLinks</div>
    <ul className="flex justify-center gap-4 items-center">
       <a href="/"><li>Home</li></a>
       <a href="/about"><li>About</li></a>
       <a href="/shorten"><li>Shorten</li></a>
       <a href="/contact"><li>Contact US</li></a>
       <li className="flex gap-3">
      <a href="/shorten"> <button className="bg-gray-700 rounded-lg shadow-lg p-3 py-1 font-bold"> 
        Try Now</button></a>  
       <a href="/github"><button className="bg-gray-700 rounded-lg shadow-lg p-3 py-1 font-bold"> 
        GitHub</button></a>
       </li>
    </ul>
   </nav>

  )
}

export default Navbar

