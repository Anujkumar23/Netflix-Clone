import React, { useEffect, useState } from 'react'
import { fetchRequest } from '../../common/api';

 export  function ContentRow({title,endpoint}) {
    const [rowData, setRowData] = useState([]);

   
     async function fetchRowData(){
        const popularMovies= await fetchRequest(endpoint)
       
          setRowData(popularMovies.results);

     }

     function createImageURL(path){
      return `${process.env.REACT_APP_IMAGE_API_URI}/${path}`

    }
     useEffect(()=>{
      fetchRowData()
     },[])
  return (
    <section className='m-5 overflow-hidden' >
       
          <h1 className='font-semibold text-lg'>{title}</h1>
        <section className=' overflow-x-auto overflow-y-hidden -mb-14 pb-14 flex  py-1
        flex-nowrap '>
              {rowData?.map((row)=>{
              const {id,title,poster_path}=row;
               return (
               
               <section key={id} className=" flex-none ">
                <img className='w-[200px] h-[170px]  rounded-xl pt-2 pb-2 pr-2' src={createImageURL(poster_path)} alt={title} />
              </section>)
             
               
             })}  

        </section>
    </section>
  )
}

export default ContentRow