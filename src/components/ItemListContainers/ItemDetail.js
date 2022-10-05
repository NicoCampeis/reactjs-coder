import './ListContainer.css';

const ItemDetail = ( {item}) =>{
    return(
        <div className='fondo'>
            <p className='text'> Detalle de : {item.nombre}</p>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre}/>
        </div>
    )
};

export default ItemDetail;