
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Producto from "./List";


const ItemListContainer = () => {
const [data, setData] = useState([]);
const {categoryId} = useParams();

useEffect(() => {
const getData = new Promise (resolve =>{
    setTimeout(() => {
        resolve (Producto)
    }, 1000)
});

 if (categoryId){

    getData.then(res => setData(res.filter ((prod) => prod.genero === parseInt(categoryId))))
 }
 else 
getData.then(res => setData(res))

}, [categoryId])


    return(
        <div>

        <ItemList data={data} />

        </div>
    )
    }

export default ItemListContainer;