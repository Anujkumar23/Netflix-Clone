import { fetchRequest } from "../common/api";
import { ENDPOINT } from "../common/endpoints";

export function createImageURL(path){
   
   return `${process.env.REACT_APP_IMAGE_API_URI}/${path}`
}
  

