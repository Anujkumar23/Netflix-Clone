import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { fetchRequest, fetchVideoInfo } from '../../common/api'
import { ENDPOINT } from '../../common/endpoints'
import { createImageURL  } from '../utils'

import PlayIcon from "@heroicons/react/24/solid/PlayIcon";
import InfoIcon from "@heroicons/react/24/solid/InformationCircleIcon";


function Banner() {
    const [randomMovie, setRandomMovie] = useState()
     const [hidePoster,setHidePoster]=useState(false)
     const [videoInfo, setvideoInfo] = useState(null)
     const [backdrop, setBackdrop] = useState(false)

function getRandomIndex(length){
    return Math.floor(Math.random()*(length-1))
    
}

 async  function fetchPopularMovies(){
       const response=await fetchRequest(ENDPOINT.MOVIES_POPULAR);
       let filterMovies =response.results.filter(result=>result.backdrop_path)
       console.log(filterMovies)
        let randomSelection=   filterMovies[getRandomIndex(filterMovies.length)]
        setRandomMovie(randomSelection)
        const videoInfo= await fetchVideoInfo(randomSelection?.id)
        setvideoInfo(videoInfo)
        console.log(videoInfo.key)
        setTimeout(()=>{
        setHidePoster(true)}
        ,1000
        )


  }
  useEffect(() => {
     fetchPopularMovies()
 
  }, [])


  function onStateChange(event){
    console.log(event)
    if(event.data===0){
        setHidePoster(false);
        setBackdrop(false)
    }
    else if(event.data===1){
        setHidePoster(true);
        setBackdrop(true)
    }

  }

  

  return (
    randomMovie?
    <section className='relative aspect-video h-[700px] w-full overflow-hidden  '>
            <img src={createImageURL(randomMovie?.backdrop_path)} alt={randomMovie?.title} className={  hidePoster?"invisible h-0 ":"visible h-full w-full "} />

     
         {videoInfo? <YouTube  videoId={videoInfo?.key} onStateChange={onStateChange} className={`absolute w-full -mt-14 ${hidePoster? " visible h-full":" invisible h-0"}`}   opts={{
            width:document.body.clientWidth,
            height:700,
            playerVars:{
                autoplay:1,
                playsinline:1,
                controls:0
            }}} 
           
            
            />:null} 
            {backdrop?<section className='absolute h-full w-full top-0 left-0 bg-black/40'></section>:null}
            <section className=' absolute bottom-32 max-w-sm ml-10 flex flex-col gap-2 '>
              <h2 className='text-6xl overflow-y-hidden line-clamp-3'>{randomMovie.title}</h2>
              <p className='text-sm line-clamp-3'>{randomMovie.overview}</p>
              <section className=' flex gap-6 items-center'
             >
                <button className='p-2 w-[100px] rounded-md bg-white text-dark flex items-center'><PlayIcon className='w-8 h-8'/><span>play</span></button>
                <button className='p-2 w-[120px] rounded-md bg-zinc-400/90 text-white flex items-center justify-center'><InfoIcon className='w-8 h-8'/><span className='text-sm'>More info</span></button>
              </section>
            </section>

    </section>:null
  )
}

export default Banner
