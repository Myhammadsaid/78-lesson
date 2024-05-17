import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <span>Home</span>
        </Link>
      </h2>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"/admin/create-product"}>
            <span>Create Product</span>
          </NavLink>
        </li>
        <hr />
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"/admin/manage-product"}>
            <span>Manage Product</span>
          </NavLink>
        </li>
        <hr />
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"/admin/create-user"}>
            <span>Create User</span>
          </NavLink>
        </li>
        <hr />
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"/admin/manage-user"}>
            <span>Manage User</span>
          </NavLink>
        </li>
      </ul>
      <button className="sidebar__btn" onClick={handleLogOut}>
        Log
      </button>
    </div>
  );
};

export default memo(Sidebar);
