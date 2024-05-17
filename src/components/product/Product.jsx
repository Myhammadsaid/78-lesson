import React from "react";
import "./Product.css";
import { useDeleteProductMutation } from "../../context/api/productsApi";

const Product = ({ products, isAdmin }) => {
  let [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  let product = products?.map((val) => (
    <div className="product-card" key={val.id}>
      <img src={val.img} alt="img" />
      <h3>{val.name}</h3>
      <h3>{val.fname}</h3>
      <p>Age: {val.age}</p>
      {isAdmin ? (
        <button onClick={() => handleDeleteProduct(val.id)}>Delete</button>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <div>
      <section className="product">
        <div className="container">
          <h1 className="product-title">Product</h1>
          <div className="product-cards">{product}</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
