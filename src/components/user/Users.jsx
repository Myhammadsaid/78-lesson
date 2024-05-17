import React from "react";
import {
  useGetUserQuery,
  useDeleteUserMutation,
} from "../../context/api/UsersApi";
import "./User.css";

const Users = () => {
  let { data: users, isLoading } = useGetUserQuery();
  let [userDelete, { isError }] = useDeleteUserMutation();

  const handleDeleteUser = (id) => {
    userDelete(id);
  };

  let user = users?.map((val) => (
    <div className="user-card" key={val.id}>
      <img src={val.url} alt="img" />
      <h3>{val.lname}</h3>
      <h3>{val.sname}</h3>
      <p>Age: {val.age}</p>
      <button onClick={() => handleDeleteUser(val.id)}>Delete</button>
    </div>
  ));
  return (
    <div>
      <section className="user">
        <div className="container">
          <h1 className="user-title">User</h1>
          <div className="user-cards">
            {isLoading ? <h2>Loading...</h2> : user}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;
