import React, { useState } from "react";
import { useCreateProductMutation } from "../../../context/api/productsApi";

let initialState = {
  name: "",
  fname: "",
  age: "",
};
const CreateProduct = () => {
  const [createProduct, { data }] = useCreateProductMutation();
  const [newProduct, setNewProduct] = useState(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    createProduct(newProduct);
    console.log(newProduct);
  };
  return (
    <div className="container">
      <h1>CreateProduct</h1>
      <form onSubmit={handleCreateUser} action="">
        <input
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Name"
        />
        <input
          value={newProduct.fname}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, fname: e.target.value }))
          }
          type="text"
          placeholder="LastName"
        />
        <input
          value={newProduct.age}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
          placeholder="Age"
        />
        <button className="user-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
