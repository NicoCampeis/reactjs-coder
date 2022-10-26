import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartWidget/CartItem";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const Cart = () => {
    const {cart, total} = UseCartContext();


    const order = {
        buyer:{
            name:'nicolas',
            email:'nico.campeis@gmail.com',
            phone:'2234563216',
            address:'cnel suarez 663'
    },
    items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
    })),
    total: total(),
};
const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id));
};





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
			<button onClick={handleClick}>Emitir compra</button>
		</>
	);
};

export default Cart;