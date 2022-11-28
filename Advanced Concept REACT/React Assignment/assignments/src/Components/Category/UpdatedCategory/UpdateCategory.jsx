import React, { useEffect, useState } from "react";
import { updateCategory } from "../../../API/apiService";

const UpdateCategory = () => {
  const [category_name, setCategory_name] = useState("");
  const [category_desc, setCategory_desc] = useState("");
  const [id, setID] = useState(null);
  useEffect(() => {
    setID(localStorage.getItem("category_id"));
    setCategory_name(localStorage.getItem("category_name"));
    setCategory_desc(localStorage.getItem("category_desc"));
  }, []);

  const update = async () => {
    const updC = {
        id:id,
      category_name: category_name,
      category_desc: category_desc,
    };
    await updateCategory(updC);
    setCategory_name("");
    setCategory_desc("");
  };
  return (
    <div>
      <input
        placeholder="Name of the Category"
        value={category_name}
        onChange={(e) => setCategory_name(e.target.value)}
      />
      <input
        placeholder="Category Description"
        value={category_desc}
        onChange={(e) => setCategory_desc(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          update();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateCategory;
