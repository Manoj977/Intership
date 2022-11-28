import React, { useEffect, useState } from "react";
import { addProduct, updateProduct } from "../../../API/apiService";

const UpdateProduct = (props) => {
  const { selectedProduct, actionType, getAllProducts } = props;

  const [Productimage, setProductimage] = useState("");
  const [Productname, setProductname] = useState("");
  const [Productdescription, setProductdescription] = useState("");
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
        }
        alert("Added");
        getAllProducts();
        setProductimage("");
        setProductname("");
        setProductdescription("");
        setPrice("");
      } catch (e) {
        console.log(e);
      }
    }

    const update = async () => {
      const updC = {
        product_image: Productimage,
        product_name: Productname,
        product_desc: Productdescription,
        product_price: Price,
      };
      try {
        await addProduct(updC);
        alert("updated");
        getAllProducts();
        setProductimage("");
        setProductname("");
        setProductdescription("");
        setPrice("");
      } catch (e) {
        console.log(e);
      }
      
    };
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
        onChange={(e) => setProductimage(e.target.value)}
      ></input>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Name of the Product"
        value={Productname}
        onChange={(e) => setProductname(e.target.value)}
      />
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
