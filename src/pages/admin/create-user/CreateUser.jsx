import React, { useState } from "react";
import { useCreateUserMutation } from "../../../context/api/UsersApi";
import "./CreateUser.css";

let initialState = {
  lname: "",
  sname: "",
  age: "",
};

const CreateUser = () => {
  const [CreateUser, { data }] = useCreateUserMutation();
  const [newUser, setNewUser] = useState(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    CreateUser(newUser);
    setNewUser(initialState);
  };
  return (
    <div className="container">
      <h1>CreateUser</h1>
      <form onSubmit={handleCreateUser} action="">
        <input
          value={newUser.lname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, lname: e.target.value }))
          }
          type="text"
          placeholder="Name"
        />
        <input
          value={newUser.sname}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, sname: e.target.value }))
          }
          type="text"
          placeholder="LastName"
        />
        <input
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: e.target.value }))
          }
          type="number"
          placeholder="Age"
        />
        <button className="user-btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
