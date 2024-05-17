import React from "react";
import { useGetProductsQuery } from "../../../context/api/productsApi";
import Product from "../../../components/product/Product";

const ManageProduct = () => {
  let { data } = useGetProductsQuery();
  return (
    <div className="container">
      <h1>ManageProduct</h1>
      <Product products={data} isAdmin={true} />
    </div>
  );
};

export default ManageProduct;
