// import React from "react";

// function CreateProduct() {
//   return <>CreateProduct</>;
// }

// export default CreateProduct;


import React, { useState } from "react";
import "./App.css";
function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  // FOR ENTERING DATA AND STORING INTO LOCAL STATE WHICH IS HOOK USESTATE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // AFTER ADDING FORM IT WILL CALL THIS METHOD 
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (form.name && form.price && form.image) {
      setProducts([...products, form]);
      setForm({ name: "", price: "", image: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>

      {/* Product Creation Form */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>   

      {/* Product List */}
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CreateProduct;