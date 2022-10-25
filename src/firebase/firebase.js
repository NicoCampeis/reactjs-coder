// import React, { UseEffect, UseState } from "react";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const fireBase = () => {
//   const [products, setProducts] = UseState([]);

//   UseEffect(() => {
//     const db = getFirestore();
//     const itemsCollection = collection(db, "items");
//     getDocs(itemsCollection).then((snapshot) => {
//       const arrproducts = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(arrproducts);
//     });
//   }, []);
//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>{product.title}</div>
//       ))}
//     </div>
//   );
// };

// export default fireBase;
