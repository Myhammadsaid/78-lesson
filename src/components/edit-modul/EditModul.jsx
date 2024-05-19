import React, { useEffect } from "react";
import "./EditModul.css";
import { useUpdateProductMutation } from "../../context/api/productsApi";

const EditModul = ({ data, setData }) => {
  let [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      setData(null);
    }
  }, [isSuccess]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let product = {
      name: data.name,
      fname: data.fname,
      age: data.age,
    };
    updateProduct({ body: product, id: data.id });
  };
  return (
    <>
      <div onClick={() => setData(null)} className="edit__overly"></div>
      <form onSubmit={handleUpdateProduct} className="edit__wrapper" action="">
        <input
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Name"
        />
        <input
          value={data.fname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, fname: e.target.value }))
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

export default EditModul;
