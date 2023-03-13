import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon"

function Search() {
    const [open, setOpen] = useState(false);
    const inputRef=useRef(null)
    const strokeWidth={strokeWidth:".2rem"}


    function onBottonToggle(e){
        e.stopPropagation()
        if(!open){
            inputRef.current?.focus();
            
        }
        if(e.target.id !=="searchbar"){
            setOpen(!open)

        }

    }
    function onWindowClick(){
        console.log("window clicked")

        

            setOpen(false)
        
    }
    useEffect(() => {
        if(open){
            window.addEventListener("click",onWindowClick);
        }
  
    
      return () => {
        window.removeEventListener("click",onWindowClick);
      }
    }, [open])
    
  return (
   <section className='flex items-center justify-end gap-2 w-[300px] overflow-hidden  '
   >
    <button  className={`${open?"w-0":"w-6 h-6"}`}  onClick={onBottonToggle}>
        <SearchIcon style={strokeWidth}/>
    </button>
    <section className= {`${open?" animate-slide-rtl w-full  border border-white p-2":"w-0"}  bg-dark  flex items-center gap-2 transition-transform duration-150 `}>
        <button onClick={onBottonToggle} className=' w-6 h-6'>
        <SearchIcon style={strokeWidth} />
        </button>
        <input id='searchbar' name='searchbar' ref={inputRef} type="text" placeholder='Title,genres,Movies' className='bg-dark outline-none'    />
    </section>
   </section>
  )
}

export default Search
