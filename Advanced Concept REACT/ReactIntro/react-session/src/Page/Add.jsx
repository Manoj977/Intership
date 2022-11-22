import React, { useEffect, useState } from "react";

const Add = () => {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const handle = (e) => {
    localStorage.setItem("ID", productID);
    localStorage.setItem("Name", productName);
    localStorage.setItem("Image", productImage);
    localStorage.setItem("Price", productPrice);
    alert("Product Added");
  };

  return (
    <div className="add">
      <form onSubmit={handle}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="product-ID">Product ID</label>
                <input
                  type="text"
                  id="product-ID"
                  placeholder="Enter the Product ID"
                  onChange={(e) => {
                    setProductID(e.target.value);
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Name">Product Name</label>
                <input
                  type="text"
                  id="product-Name"
                  placeholder="Enter the Product Name"
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Image">ProductImage</label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="product-Image"
                  alt="product-img"
                  onChange={(e) => setProductImage(e.target.files)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Price">Product Price</label>
                <input
                  type="number"
                  id="product-Price"
                  placeholder="₹"
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="submit-button" colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Add;
