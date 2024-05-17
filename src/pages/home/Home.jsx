import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/api/productsApi";
import Users from "../../components/user/Users";

const Home = () => {
  let { data, error, isError, isLoading, isSuccess } = useGetProductsQuery();

  return (
    <div className="container">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Product products={data} isAdmin={false} />
      )}
    </div>
  );
};

export default Home;
