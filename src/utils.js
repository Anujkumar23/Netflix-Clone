export function createImageURL(path,width){
    return `${process.env.REACT_APP_IMAGE_API_URI}/w${width}/${path}`

  }