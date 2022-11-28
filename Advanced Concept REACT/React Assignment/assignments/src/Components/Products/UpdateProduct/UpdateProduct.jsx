import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../../API/apiService";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [Product_Image, setProduct_Image] = useState();
  const [Product_Name, setProduct_Name] = useState("");
  const [Product_Description, setProduct_Description] = useState("");
  const [Price, setPrice] = useState("");
  const [id, setID] = useState(null);
  useEffect(() => {
    setID(localStorage.getItem("product_id"));
    setProduct_Image(localStorage.getItem("product_image"));
    setProduct_Name(localStorage.getItem("product_name"));
    setProduct_Description(localStorage.getItem("product_desc"));
    setPrice(localStorage.getItem("product_price"));
  }, []);
  const update = async () => {
    const updtP = {
      id: id,
      product_image: Product_Image,
      product_name: Product_Name,
      product_desc: Product_Description,
      product_price: Price,
    };
    await updateProduct(updtP);
    alert("updated");
    navigate("/Products");
    setProduct_Image("");
    setProduct_Name("");
    setProduct_Description("");
    setPrice("");
  };
  return (
    <div>
      <label>Product Image</label>
      <input
        type="url"
        placeholder="Image of the Product"
        value={Product_Image}
        onChange={(e) => setProduct_Image(e.target.value)}
      ></input>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Name of the Product"
        value={Product_Name}
        onChange={(e) => setProduct_Name(e.target.value)}
      />
      <label>Product Description</label>
      <input
        type="text"
        value={Product_Description}
        placeholder="Product Description"
        onChange={(e) => setProduct_Description(e.target.value)}
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
          update();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
