import React, { useEffect } from 'react'
import { useState } from 'react';

function GetProduct() {

  const [dataList,setDataList] = useState([]);
    console.log(dataList);

   const  listOfProducts = async ()=>{
    
   const  response = await fetch ("https://fakestoreapi.com/products");
   const data = await response.json();
    //console.log(data, " hiii");
    setDataList(data); // store the data in local state which is called useState of the react
  }

  useEffect(()=>{
    listOfProducts();

  },[])


console.log(dataList);
const renderProducts = () =>
  dataList.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title}</td> // Using 'title' for better product name representation
      <td>${product.price.toFixed(2)}</td> {/* Format price to two decimal places */}
      <td><img src={product.image} alt={product.title} width="50" height="50" /></td> {/* Add image with alt text and dimensions */}
    </tr>
  ));
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {renderProducts()}
      </tbody>
    </table>
  </div>
);
}

export default GetProduct