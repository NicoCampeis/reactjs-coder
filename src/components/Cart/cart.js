import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartWidget/CartItem";

const Cart = () => {
    const {cart, total} = UseCartContext();


    if (cart.length === 0) {
        return (
            <>
                <p>No hay articulos. </p>
                <Link to='/'>Hacer Compras</Link>
            </>
        )
    }

    return (
		<>
			{cart.map((product) => (
				<CartItem key={product.id} product={product} />
			))}
			<p>total: {total()}</p>
			<button >Emitir compra</button>
		</>
	);
};

export default Cart;