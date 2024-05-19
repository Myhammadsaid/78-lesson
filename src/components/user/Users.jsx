import React, { useState } from "react";
import {
  useGetUserQuery,
  useDeleteUserMutation,
} from "../../context/api/UsersApi";
import "./User.css";
import EditModul2 from "../edit-modul/EditModul2";

const Users = () => {
  let { data: users, isLoading } = useGetUserQuery();
  let [userDelete, { isError }] = useDeleteUserMutation();
  const [editProduct, setEditUser] = useState(null);

  const handleDeleteUser = (id) => {
    userDelete(id);
  };

  let user = users?.map((val) => (
    <div className="user-card" key={val.id}>
      <img src={val.url} alt="img" />
      <div className="user-box">
        <h3>
          {val.lname} {val.sname}
        </h3>
        <p>Age: {val.age}</p>
        <div className="user-btns">
          <button onClick={() => handleDeleteUser(val.id)}>Delete</button>
          <button onClick={() => setEditUser(val)}>Edit</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <section className="user">
        <div className="container">
          <div className="user-cards">
            {isLoading ? <h2>Loading...</h2> : user}
          </div>
        </div>
      </section>
      {editProduct ? (
        <EditModul2 data={editProduct} setData={setEditUser} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Users;
