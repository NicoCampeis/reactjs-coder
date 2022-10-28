import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartWidget/CartItem";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../index";

const Cart = () => {
    const {cart, total, cleanCart} = UseCartContext();
    const comprador={
        name:'nicolas',
        email:'nico.campeis@gmail.com',
        phone:'2234563216',
        address:'cnel suarez 663'
        }

const handleClick = () => {
    const ordersCollection = collection(db, "ordenes");
    addDoc(ordersCollection,{
        comprador,
        items: cart,
        total: total(),
        date: serverTimestamp()
    })
    .then((res) => alert(`Muchas gracias por su compra ${res.id}`));
    cleanCart()
}
    if (cart.length === 0) {
        return (
            <>
                <p>No hay articulos. </p>
                <Link to='/'>Hacer Compras</Link>
            </>
        )
    }
    return (
        <div>
            <>
            {cart.map((product) => (<CartItem key={product.id} product={product} />))}
            <p>total: {total()}</p>
            <button onClick={handleClick}>Emitir compra</button>
            </>
        </div>
    );
};

export default Cart;