import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
// import Producto from "./List";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../index";



const ItemDetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()

useEffect(()=>{
  //le decimos nuestra base de datos y en que collecion tiene que ir
  const coleccionProd = collection(db, "Items")
  // hacer una referencia que me traiga el ID del useParams
  const referenciaDoc = doc(coleccionProd, id)
  //traemos el documento
  getDoc(referenciaDoc)
  .then((result)=>{
    setItem({
      id:result.id,
      ...result.data()
    })
  })
  .catch((error)=> console.log(error))
}, [id])

// useEffect(() => {
//     const getData = new Promise (resolve =>{
//         setTimeout(() => {
//             resolve(Producto)
//         }, 3000)
//     });

//     getData.then(res => setItem(res.find((prod)=> prod.id === Number(id))));
// },[id])

    return( <div className="text"> <ItemDetail item={item}/> <p>Id: {id}</p> <p>Precio producto: USD{item.price}</p> </div>
    )

}

export default ItemDetailContainer;


