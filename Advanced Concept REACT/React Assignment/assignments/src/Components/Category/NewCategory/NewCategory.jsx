import React, { useState, useEffect } from "react";

import { addCategory, updateCategory } from "../../../API/apiService";

const NewCategory = (props) => {
  const { selectedCategory, actionType, getAllCategories } = props;
  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");

  useEffect(() => {
    if (actionType === "update") {
      setName(selectedCategory.category_name);
      setDesc(selectedCategory.category_desc);
    }
  }, [actionType, selectedCategory]);

  const add = async () => {
    if (Name === "" || Desc === "") {
      alert("Field is Empty");
    } else {
      const addC = {
        category_name: Name,
        category_desc: Desc,
      };
      try {
        if (actionType === "new") {
          await addCategory(addC);
        } else {
          const updateObject = {
            ...addC,
            category_id: selectedCategory.category_id,
          };
          await updateCategory(updateObject);
        }
        alert("Added");
        getAllCategories();
        setName("");
        setDesc("");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const update = async () => {
    const updC = {
      category_name: Name,
      category_desc: Desc,
    };
    try {
      await addCategory(updC);
      alert("updated");
      getAllCategories();
      setName("");
      setDesc("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="addCategories">
      <h1>
        {actionType === "new" ? "Add New Data" : "Update the Existing Data"}
      </h1>

      <div className="addProducts_content">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={Name}
          placeholder="Name of the Category"
        />
        <br />
        <input
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          type="text"
          value={Desc}
          placeholder="Category Description"
        />
        <br />
        <button onClick={add}>Add New Category</button>
      </div>
    </div>
  );
};

export default NewCategory;
