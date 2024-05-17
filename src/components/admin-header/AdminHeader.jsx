import menu from "../../assets/menu.png";
import React from "react";

const AdminHeader = ({ setClose }) => {
  return (
    <div className="admin__header container">
      <button onClick={() => setClose((p) => !p)}>
        <img src={menu} alt="menu" />
      </button>
      <div>
        <p>John doe</p>
      </div>
    </div>
  );
};

export default AdminHeader;
