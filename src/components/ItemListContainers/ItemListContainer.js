
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Producto from "./List";


const ItemListContainer = () => {
const [data, setData] = useState([]);
const {categoria} = useParams();

useEffect(() => {
const getData = new Promise (resolve =>{
    setTimeout(() => {
        resolve (Producto)
    }, 1000)
});

if (categoria){

    getData.then(res => setData(res.filter ((prod) => prod.categoria === parseInt(categoria))))
}
else 
getData.then(res => setData(res))

}, [categoria])


    return(
        <div>

        <ItemList data={data} />
        
        </div>
    )
    }

export default ItemListContainer;