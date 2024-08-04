import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
   
     const [images, setImagenes] = useState([])
     const [isLoading, setisLoading] = useState(true)
    const getImages = async() => {
        const newImagenes = await  getGifs(category);
       // console.log(newImagenes)
        setImagenes(newImagenes);
       setisLoading(false);
    }
    useEffect(() => {
      getImages(); 
    }, [])
  return{
    images,
    isLoading
  }
}
