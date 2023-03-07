

export async function fetchRequest(endpoint){
    const url=new URL(endpoint,process.env.REACT_APP_BASE_API);
    
    url.searchParams.append("api_key",process.env.REACT_APP_API_KEY )
  console.log(url)

    try{
        const response=await fetch(url);
        return response.json();
    }
    catch(error){
        console.log(error.message)
    }
  

}