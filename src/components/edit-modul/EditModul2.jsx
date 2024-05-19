import React, { useEffect } from "react";
import { useUpdateUserMutation } from "../../context/api/UsersApi";

const EditModul2 = ({ data, setData }) => {
  let [updateProduct, { isLoading, isSuccess }] = useUpdateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(null);
    }
  }, [isSuccess]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let product = {
      lname: data.lname,
      sname: data.sname,
      age: data.age,
    };
    updateProduct({ body: product, id: data.id });
  };
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overly"></div>
      <form onSubmit={handleUpdateProduct} className="edit__wrapper" action="">
        <input
          value={data.lname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, lname: e.target.value }))
          }
          type="text"
          placeholder="Name"
        />
        <input
          value={data.sname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, sname: e.target.value }))
          }
          type="text"
          placeholder=" SourName"
        />
        <input
          type="number"
          value={data.age}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
          placeholder="Age"
        />
        <button disabled={isLoading} className="edit-btn">
          {isLoading ? "Loading..." : "Save"}
        </button>
        <button
          type="button"
          onClick={() => setData(null)}
          className="edit-btn"
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditModul2;
