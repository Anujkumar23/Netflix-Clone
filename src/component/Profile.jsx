import React, { useEffect, useRef, useState } from 'react'
import NetflixProfile from "../assets/Netflix-avatar.png"
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";

function Profile() {
const [showMenu, setShowMenu] = useState(false)
const menuRef=useRef(null);

const timerId=useRef(null);


function onMenuEnter(){
    if(timerId.current){
        clearTimeout(timerId.current)
    }
 setShowMenu(true)

}
function onMenuLeave(){

   timerId.current= setTimeout(()=>{
        setShowMenu(false)
    },300)
}
useEffect(() => {
  menuRef.current.addEventListener("mouseenter" ,onMenuEnter)
  menuRef.current.addEventListener("mouseleave" ,onMenuLeave)

  return () => {
    menuRef.current.removeEventListener("mouseenter" ,onMenuEnter)
    menuRef.current.removeEventListener("mouseleave" ,onMenuLeave)
  }
}, [])

  return (
<section ref={menuRef} className='relative overflow-hidden '>
    <section className='flex items-center gap-1'>
    <img src={NetflixProfile} alt="netflix-profile" className='w-8 h-8 rounded-md' /> 
    <ChevronDownIcon  className={`w-6 h-6 transition-transform ${showMenu?"rotate-180":""}`}/>
    </section>
  
      
   {showMenu? <ul className='absolute -left-24 bg-dark  justify-center top-[60] flex flex-col gap-4 px-4 py-2 w-[200px] '>
        <li>username</li>
        <li>Manage account </li>
        <li>Transfer account </li>
        <li>Account</li>
        <li>Help center</li>
        <li className='-mx-2 pt-2 px-4 border-t border-t-gray-500'>Sign Out</li>
    </ul>:null}
</section>

  
      
    
  
   
   
  

  )
    
}

export default Profile


    