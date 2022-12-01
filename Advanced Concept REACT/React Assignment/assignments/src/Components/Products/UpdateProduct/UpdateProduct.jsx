/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { addProduct, filterData, updateProduct } from "../../../API/apiService";
import { Navigate } from "react-router-dom";
const UpdateProduct = (props) => {
  const { selectedProduct, actionType, getAllProducts, categoriesData } = props;

  const [Productimage, setProductimage] = useState("");
  const [Productname, setProductname] = useState("");
  const [Productdescription, setProductdescription] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
    if (actionType === "update") {
      setProductimage(selectedProduct.product_image);
      setProductname(selectedProduct.product_name);
      setProductdescription(selectedProduct.product_desc);
      setPrice(selectedProduct.product_price);
    }
  }, [actionType, selectedProduct]);

  const add = async () => {
    if (
      Productimage === "" ||
      Productname === "" ||
      Productdescription === "" ||
      Price === ""
    ) {
      alert("Field is Empty");
    } else {
      const updtP = {
        product_image: Productimage,
        product_name: Productname,
        product_desc: Productdescription,
        product_price: Price,
      };
      try {
        if (actionType === "new") {
          await addProduct(updtP);
        } else {
          const updateC = {
            ...updtP,
            product_id: selectedProduct.product_id,
          };
          await updateProduct(updateC);
          alert("updated");
          <Navigate to="/Products" />;
        }
        getAllProducts();
        setProductimage("");
        setProductname("");
        setCategory("");
        setProductdescription("");
        setPrice("");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const productCategoryID = async (category_id) => {
    console.log(category_id);
    await filterData(category_id);
  };
  return (
    <div className="addProducts">
      <h1>
        {actionType === "new" ? "Add New Data" : "Update the Existing Data"}
      </h1>
      <label>Product Image</label>
      <input
        type="url"
        placeholder="Image of the Product"
        value={Productimage}
        onChange={(e) => {
          setProductimage(e.target.value);
        }}
      ></input>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Name of the Product"
        value={Productname}
        onChange={(e) => setProductname(e.target.value)}
      />

      <label>Product Category</label>

      <select
        defaultValue={"Please Select the Category"}
        value={Category}
        onChange={(e) => {
          setCategory(e.target.value);
          console.log(Category);
          productCategoryID(Category);
        }}
      >
        <option value={"Please Select the Category"}>
          Please Select the Category
        </option>
        {categoriesData.map((option, index) => (
          <option
            key={index}
            selected={selectedProduct.category_id === option.category_id}
            value={option.category_id}
          >
            {option.category_name}
          </option>
        ))}
      </select>
      <label>Product Description</label>
      <input
        type="text"
        value={Productdescription}
        placeholder="Product Description"
        onChange={(e) => setProductdescription(e.target.value)}
      />
      <label>Product Price</label>
      <input
        type="tel"
        value={Price}
        placeholder="₹"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button
        type="submit"
        onClick={() => {
          add();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
