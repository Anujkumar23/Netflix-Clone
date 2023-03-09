import React, { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube';
import { fetchRequest } from '../../common/api';
import { ENDPOINT } from '../../common/endpoints';
import { createImageURL } from '../utils'
import Model from './Model';


export default function MovieCard({poster_path,title,id}) {
  const CARD_WIDTH=200;
  let movieCardRef=useRef(null);
const [isOpen, setIsOpen] = useState(false);
 const [videoInfo, setVideoInfo] = useState(null)

  async function fetchVideoInfo(){
      const response= await  fetchRequest(ENDPOINT.MOVIES_VIDEO.replace("{movie_id}",id.toString()));
      return response.results.find(result=>result.site.toLowerCase()==="youtube")

  }

  const onClose=()=>{
    setIsOpen(false)
    
  }

  const closeModal=()=>{
    setIsOpen(false);
  }

  async function onMouseEnter(){
   let videoInfo= await fetchVideoInfo();       
    console.log({videoInfo})
    setVideoInfo(videoInfo)
    setIsOpen(true)
  }

  useEffect(() => {
    movieCardRef?.current.addEventListener("mouseenter",onMouseEnter);
  
    ()=> movieCardRef?.current.removeEventListener("mouseenter",onMouseEnter)
    
  }, [])
  
  return (
    <>
     <section ref={movieCardRef} key={id} className=" flex-none ">
                <img  loading="lazy"  className='w-[200px] h-[170px]  rounded-xl pt-2 pb-2 pr-2' src={createImageURL(poster_path,CARD_WIDTH)} alt={title} />
     </section>
<Model isOpen={isOpen} onClose={onClose} title={""} closeModal={closeModal}  >

       
        <YouTube opts={{
        width:"450",
        playerVars:{
          autoplay:1,
          playsinline:1,
         controls:0
        }}}  videoId={videoInfo?.key}/>

        
        
</Model> 
     
</>
            
  )
}

 