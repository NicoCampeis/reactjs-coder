import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Producto from "./List";

const ItemListContainer = () => {
const [data, setData] = useState([]);
const { categoriaId } = useParams();

useEffect(() => {
    const getData = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Producto);
    }, 2000);
    });
    getData.then((listadoProducto) => {
    const genero = categoriaId
        ? listadoProducto.filter((item) => item.categoria === categoriaId)
        : listadoProducto;
    setData(genero);
    });
}, [categoriaId]);

return (
    <div>
    <ItemList data={data} />
    </div>
);
};

export default ItemListContainer;
