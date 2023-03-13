import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/Netflix_Logo.png"
import Search from './Search';
import NotificationIcon from  "@heroicons/react/24/solid/BellIcon"
import Profile from './Profile';



function Header() {
  const [fixed,setFixed]=useState(false)
  

    function isActiveLink({isActive}){
       return isActive?"text-white font-semibold":undefined;
    }
function onWindowScroll(){
  if(window.scrollY> 8){
    setFixed(true)
  }
    else {
      setFixed(false)
    }

  }
  useEffect(()=>{
    window.addEventListener("scroll",onWindowScroll);

    ()=> window.addEventListener("scroll",onWindowScroll)
  },[])
  
  return (
    <header className= {`z-10 py-2 pr-16   w-full transition-colors duration-300 ease-linear ${fixed? "fixed top-0 bg-dark ":"relative bg-transparent"}`} >
   <nav className='  grid grid-cols-[200px_auto]  items-center  md:grid-cols-[200px_auto_auto]  '>
      <section className='h-16' >
        <Link to="/browse">
        <img  className=" h-full object-contain md:w-full" src={logo} alt="Netflix logo" />
        </Link> 
    
      </section>
       <section className=' hidden  md:block text-base text-gray-300  '>
        <ul className='flex gap-5  font-normal'>
            <li ><NavLink className={isActiveLink} to="/browse">Home</NavLink></li>
            <li><NavLink className={isActiveLink}>TV Shows</NavLink></li>
            <li><NavLink className={isActiveLink}>Movies</NavLink></li>
            <li><NavLink className={isActiveLink} to ="/latest">New & Popular</NavLink></li>
        </ul>
    </section>
    <section className='flex justify-self-end items-center gap-2'>
      <Search/>
      <NotificationIcon className='w-8 h-8'/>
      <Profile />

    </section>
  </nav>
    </header>
    
    )  
  }


export default Header