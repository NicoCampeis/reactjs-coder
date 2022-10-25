import "./ListContainer.css";
import Contador from "../Contador/Contador";
import { useState } from "react";
import { UseCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const [goCart , setGoCart] = useState(false);
  const {addProduct} = UseCartContext();

  const onAdd = (cantidad) => {
    setGoCart(true);
    addProduct(item, cantidad);
  };
  
return (
    <div>
    <div className="fonda">
    
    <img className="ItemDetalle" src={item.imagen} alt={item.nombre} />
  </div>
  <div>
  <p className="text"> Detalle de: {item.nombre}</p>
    {goCart ? ( <Link to="/cart">terminar compra</Link> //creo que tengo un error 
    ) : (
      <Contador initial={1} stock={10} onAdd={onAdd} />)}
    </div>
    </div>   
        );
        };

export default ItemDetail;
