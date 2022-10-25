import React from 'react';
import { UseCartContext } from '../../Context/CartContext'; 


const CartItem = ({ product }) => {
    const  {removeCart}  = UseCartContext();
    return (
        <div className='itemCart'>
            <img src={product.imagen} alt={product.nombre} />
            <div>
                <p>Título: {product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio u.: {product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={() => removeCart(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;