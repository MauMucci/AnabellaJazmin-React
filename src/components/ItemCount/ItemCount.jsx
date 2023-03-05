import { useState } from "react"
import {toast} from 'react-toastify'

export const ItemCount = ({valInicial, stock,onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)
        //Variable    //Modificar var     //Estado inicial

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador> valInicial)  && setContador(contador - 1) //operador ternario sin else
    const agregarCarrito = () => {
        onAdd(contador)
        toast(`Agregaste ${contador} productos al carrito!`) 
      }

    return (
        <>
         <button className='btn btn-dark' onClick={(e) => 
            sumar()} >+</button>   
         {contador}
         <button className='btn btn-dark' onClick={(e) => 
            restar()} >-</button>
            <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
