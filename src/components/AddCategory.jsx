import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = ({target}) => {
     setinputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
   //onNewCategory(categorias => [inputValue, ...categorias]);
   // pocoyo('pato es el amigo de pocoyo');
   setinputValue('');
   onNewCategory(inputValue.trim());
  }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
     <input
    type='text'
    placeholder="Buscar gifss"
    value={inputValue}
    onChange={onInputChange}
    />
    </form>
    
  )
}
