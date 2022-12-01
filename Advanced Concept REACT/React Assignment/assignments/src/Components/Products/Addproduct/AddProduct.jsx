import React, { useState } from "react";
import { addProduct } from "../../../API/apiService";

const AddProduct = () => {
  const [Image, setImage] = useState("");
  const [Name, setName] = useState("");
  const [Model, setModel] = useState("");
  const [Price, setPrice] = useState("");
  const add = async () => {
    if (Name === "" || Model === "") {
      alert("Field is Empty");
    } else {
      const add_Product = {
        product_name: Name,
        product_desc: Model,
        product_price: Price,
        product_image: Image,
      };
      try {
        await addProduct(add_Product);
        setName("");
        setModel("");
        setImage("");
        setPrice("");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <div className="addCategories">
        <h1>Add Product</h1>
        <div className="addProducts_content">
          <input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            value={Image}
            placeholder="Product Image URL"
          />
          <br />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
            placeholder="Name of the Product"
          />
          <br />
          <input
            onChange={(e) => {
              setModel(e.target.value);
            }}
            type="text"
            value={Model}
            placeholder="Product Model"
          />
          <br />
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            value={Price}
            placeholder="Product Price"
          />
          <button onClick={add}>Add a Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
