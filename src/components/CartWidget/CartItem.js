import React from 'react';
import { useCartContext } from 'react'; //PREGUNTAR PORQ NO FUNCIONA ../../Context/CartContext


const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio u.: {product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;