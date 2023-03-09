import React, { useEffect, useState } from 'react'
import { fetchRequest } from '../../common/api';
import MovieCard from './MovieCard';


 export  function ContentRow({title,endpoint}) {
    const [rowData, setRowData] = useState([]);

   
     async function fetchRowData(){
        const popularMovies= await fetchRequest(endpoint)
       
          setRowData(popularMovies.results);

     }

     
     useEffect(()=>{
      fetchRowData()
     },[])
  return (
    <section className='m-5 overflow-hidden' >
       
          <h1 className='font-semibold text-lg'>{title}</h1>
        <section className=' relative overflow-x-auto overflow-y-hidden -mb-14 pb-14 flex  py-1
        flex-nowrap '>
            {/* <button className='absolute right-0 h-full bg-black/25'>Next</button>
            <button className='absolute h-full bg-black/25'>prev</button> */}


              {rowData?.map((row)=>{
             
               return (
               <MovieCard {...row}/>
               )
             
               
             })}  

        </section>
    </section>
  )
}

export default ContentRow