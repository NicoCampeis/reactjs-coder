import './ListContainer.css';
import Contador from '../Contador/Contador';


const onAdd = (cantidad) => {
    console.log(` agregaste ${cantidad} unidad`);
}

const ItemDetail = ( {item}) =>{
    return(
        <div className='fondo'>
            <p className='text'> Detalle de : {item.nombre}</p>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre}/>
            <Contador initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
};

export default ItemDetail;