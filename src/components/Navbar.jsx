import React from 'react'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="./coolage_logo2-removebg-preview.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-28 h-28 text-white p-1 bg-black rounded-full" viewBox="0 0 24 24" />
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar   