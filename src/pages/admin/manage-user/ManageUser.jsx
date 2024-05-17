import React from "react";
import { useGetUserQuery } from "../../../context/api/UsersApi";
import Users from "../../../components/user/Users";

const ManageUser = () => {
  let { data } = useGetUserQuery();
  return (
    <div className="container">
      <h1>ManageUser</h1>
      <Users users={data} />
    </div>
  );
};

export default ManageUser;
