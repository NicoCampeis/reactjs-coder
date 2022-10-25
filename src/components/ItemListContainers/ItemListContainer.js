import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import Producto from "./List";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../index";

const ItemListContainer = () => {
const [data, setData] = useState([]);
const { categoriaId } = useParams();

useEffect(() => {
    const coleccionProductos =

    categoriaId ? query(collection(db, "Items"), where("categoria", "==", categoriaId))
    
    : collection(db, "products");
    

getDocs(coleccionProductos)
    .then((result) => {
    const lista = result.docs.map((producto) => {
        return {
            id: producto.id,
            ...producto.data(),
        };
        });
        setData(lista);
    })
    .catch((error) => console.log(error));
}, [categoriaId]);

  // useEffect(() => {
  //     const getData = new Promise((resolve) => {
  //     setTimeout(() => {
  //         resolve(Producto);
  //     }, 2000);
  //     });
  //     getData.then((listadoProducto) => {
  //     const genero = categoriaId
  //         ? listadoProducto.filter((item) => item.categoria === categoriaId)
  //         : listadoProducto;
  //     setData(genero);
  //     });
  // }, [categoriaId]);

return (
    <div>
    <ItemList data={data} />
    </div>
);
};

export default ItemListContainer;
