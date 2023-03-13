import React, { useEffect, useState } from 'react'
import { fetchRequest } from '../../common/api';
import MovieCard from './MovieCard';


 export  function ContentRow({title,endpoint}) {
    const [rowData, setRowData] = useState([]);

   
     async function fetchRowData(){
        const popularMovies= await fetchRequest(endpoint)
       console.log(popularMovies.results)
          setRowData(popularMovies.results);

     }

     
     useEffect(()=>{
      fetchRowData()
     },[])
  return (
    <section className='m-3 overflow-hidden' >
       
          <h1 className='font-semibold text-lg text-dark'>{title}</h1>
        <section className=' relative overflow-x-auto overflow-y-hidden  flex  py-1
        flex-nowrap '>
            {/* <button className='absolute right-0 h-full bg-black/25'>Next</button>
            <button className='absolute h-full bg-black/25'>prev</button> */}


              {rowData?.map((row)=>{
             
               return (
               <MovieCard  uid={`${row.id}-${title}`}  key={`${row.id}-${title}`}{...row}/>
               )
             
               
             })}  

        </section>
    </section>
  )
}

export default ContentRow