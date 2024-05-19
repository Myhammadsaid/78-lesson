import React, { useState } from "react";
import "./Product.css";
import { useDeleteProductMutation } from "../../context/api/productsApi";
import EditModul from "../edit-modul/EditModul";

const Product = ({ products, isAdmin }) => {
  const [editProduct, setEditUser] = useState(null);

  let [deleteProduct, { isLoading }] = useDeleteProductMutation();

  let product = products?.map((val) => (
    <div className="product-card" key={val.id}>
      <img src={val.img} alt="img" />
      <div className="product-box">
        <h3>
          {val.name} {val.fname}
        </h3>
        <p>Age: {val.age}</p>
        {isAdmin ? (
          <div className="product-btns">
            <button onClick={() => deleteProduct(val.id)}>Delete</button>
            <button onClick={() => setEditUser(val)}>Edit</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-cards">{product}</div>
        </div>
      </section>
      {editProduct ? (
        <EditModul data={editProduct} setData={setEditUser} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
