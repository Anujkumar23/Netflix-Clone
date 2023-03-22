import React, { useEffect, useRef, useState } from 'react'
import NetflixProfile from "../assets/Netflix-avatar.png"
import PlusIcon from "@heroicons/react/24/solid/PlusCircleIcon"
import { useNavigate } from 'react-router-dom';
import PencilIcon from "@heroicons/react/24/solid/PencilIcon"
import Model from "./Model";

function Profiles({edit}) {
  const navigate=useNavigate();
     const [isProfileEditorOpen, setisProfileEditorOpen] = useState(false);
     
    const header= edit?"Manage Profiles":"Who's Watching?";

    function manageProfile(){
       console.log("manageProfile clicked")
        navigate("/manageprofile");
    }
    function handleDone(){
        navigate("/")
    }
    function onClose(){
      setisProfileEditorOpen(false)
    }

    function openEditor(event){
      event.stopPropagation();
      console.log("open editor clicked")
      setisProfileEditorOpen(true)
    }

    
  return (
    < >
        <h1 className='text-5xl mb-5 p-3'>{header}</h1>
        <section className='flex gap-4  '>
        <ProfileCard onEditClick={openEditor}  edit={edit}/>
        <ProfileCard onEditClick={openEditor}  edit={edit}/>
        <AddProfile onEditClick={openEditor} edit={edit}/>

        </section> 
        {edit?(<>
        <ProfileButton onClick={handleDone} buttonType='secondary'>Done</ProfileButton>
        <EditProfile isOpen={isProfileEditorOpen} edit={edit} onClose={onClose}/> </>)
        :(<ProfileButton onClick={manageProfile}
         >Manage Profile</ProfileButton>)
}
    </>
  )
}
  function ProfileButton({buttonType="primary",...props}){
    return (
        <button {...props} className={`py-1 text-xl px-2 mt-8 rounded-sm ${buttonType==="primary"? "bg-dark border border-gray-500 text-gray-500  hover:text-white hover:border-white ":"text-dark bg-gray-100 hover:bg-NetflixRed" }`}>{props.children}</button>
    )
   
  }
   function ProfileCard({edit,onEditClick }){

    // let profileCardRef=useRef(null);
    const navigate=useNavigate();

    function handleProfileCardClick(event){
      console.log("handle clicked")
     
        navigate("/browse");
    }


   
    
    return(
        <section onClick={!edit&&handleProfileCardClick}className="grid grid-col place-content-center place-items-center cursor-pointer text-gray-400 hover:text-white overflow-hidden">
            <section  className='relative h-[10vw] w-[10vw] rounded-sm min-h-[84px] min-w-[84px] max-h-[200px] max-w-[200px] hover:border-2 border-white '>
                <img src={NetflixProfile} alt="profile img" />
                {edit?<button onClick={onEditClick} className='absolute inset-0  grid     place-items-center bg-black/50' >
                 <PencilIcon className='w-[25%] text-white'/>
                </button>:null}

            </section>
        <h1 className='text-xl' >Profile name</h1>
        </section>
    )

  }
  function AddProfile({onEditClick,}){
    return(
        <>
        <section className="flex flex-col place-content-center text-gray-400 hover:text-white place-items-center overflow-hidden">
         <button  onClick={onEditClick} className='overflow-hidden h-[10vw] w-[10vw] rounded-md min-h-[84px] min-w-[84px] max-h-[200px] max-w-[200px] hover:border-2 border-white grid  place-items-center  place-content-center hover:bg-gray-400 hover:text-white
         '>
            <PlusIcon className='w-[85%]'/>
         </button>
         <h1 className='text-xl'>Add Profile</h1>
        </section >

        </>
        
    )
  }


  function EditProfile({ isOpen,edit,onClose}){
    const heading=edit?"EditProfile":"Add Profile";

    function onEditorClose(){
    onClose(); 
    }
    

    return(
    <Model isOpen={isOpen} onClose={onClose} >
        <section className='h-screen w-screen '>
          <section className='mx-auto max-w-4xl my-16 '>
         <h1 className='text-4xl p-2 mb-4 '>{heading}</h1>
         <section className='grid grid-cols-[200px_auto] border-t-2 border-white  border-b-2 p-2 gap-4 '>
         <section>
          <img src={NetflixProfile} alt="img" className='w-[180px]' />
         </section>
         <section>
         <input
                type="text"
                id="name"
                name="name"
                placeholder=" Enter name for Profile"
                className="mt-1 required block w-full rounded-md border border-slate-300 bg-zinc-500  px-3 py-2 text-sm text-gray-400 placeholder-slate-400 shadow-sm  focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 
    "
              />
         </section>
          </section>
          <section className='flex gap-2'>
            <ProfileButton buttonType="secondary">Save</ProfileButton>
            <ProfileButton onClick={onEditorClose}>Cancel</ProfileButton>
          </section>
         </section>
         

        </section>
      </Model>
    )
  }


export default Profiles