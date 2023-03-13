import { ENDPOINT } from "./endpoints";


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

export async function fetchVideoInfo(id) {
    
      const response = await fetchRequest(
        ENDPOINT.MOVIES_VIDEO.replace("{movie_id}", id)
      );
    
      return response.results.find(
        (result) => result.site.toLowerCase() === "youtube"
      );
    
    // catch(error){
    //   console.log(error)
    // }
    
  }