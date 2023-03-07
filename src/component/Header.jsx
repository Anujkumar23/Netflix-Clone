import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/Netflix_Logo.png"

function Header() {

    function isActiveLink({isActive}){
       return isActive?"text-white font-semibold":undefined;
    }
 return (
    <header className=' border-b-2 py-2 '>
   <nav className='grid grid-cols-[200px_auto]  items-center md:grid-cols-[200px_auto_200px]  '>
      <section className='h-12' >
        <Link to="/browse">
        <img  className=" h-full object-contain md:w-full" src={logo} alt="Netflix logo" />
        </Link> 
    
      </section>
       <section className=' hidden  md:block text-sm text-gray-300 font-thin '>
        <ul className='flex gap-5'>
            <li ><NavLink className={isActiveLink} to="/browse">Home</NavLink></li>
            <li><NavLink>TV Shows</NavLink></li>
            <li><NavLink>Movies</NavLink></li>
            <li><NavLink className={isActiveLink} to ="/latest">New & Popular</NavLink></li>
        </ul>
    </section>
    <section className='flex justify-end mr-5'>
        <h4>search</h4> 
        <p>notification</p>

    </section>
  </nav>
    </header>
    
  )  
}

export default Header