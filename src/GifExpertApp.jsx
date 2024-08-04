import React, { useState } from 'react'
import {AddCategory,GifGrid} from './components'
export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['one punch']);

    const onAddCategory = (NewCategory) => {
   
    //console.log(NewCategory);
        //categorias.push(NewCategory)
     if(categorias.includes(NewCategory)) return;
     setCategorias([NewCategory,...categorias])
    }
    // const poco = (newpocoyo) => {
    //     console.log(newpocoyo)
    // }
  return (
  <>
    <h1>GifExpertApp</h1>
     <AddCategory 
      onNewCategory={ event => onAddCategory(event) }

     />
    {/* <button onClick={onAddCategory}>agregar</button> */}
    
    {
       categorias.map( category => (
         <GifGrid key={category} category={category}/>
        )
      )
      }
     </>
  )
}
 