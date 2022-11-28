import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../API/apiService";

const NewCategory = () => {
  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");
  const navigate = useNavigate();
  const add = async () => {
    if (Name === "" || Desc === "") {
      alert("Field is Empty");
    } else {
      const addC = {
        category_name: Name,
        category_desc: Desc,
      };
      try {
        await addCategory(addC);
        alert("Added");
        setName("");
        setDesc("");
        navigate(window.location.reload());
      } catch (e) {
        console.log(e);
      }
    }
  };
  const update=async()=>{
    const updC = {
      category_name: Name,
      category_desc: Desc,
    };
    try {
      await addCategory(updC);
      alert("Added");
      setName("");
      setDesc("");
      navigate(window.location.reload());
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="addCategories">
      <h1>Add New Category</h1>
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
