import React, {useState } from "react";

const Add = () => {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  function handle() {
    let allProducts = [];
    if (localStorage.getItem("products") !== null) {
      allProducts = JSON.parse(localStorage.getItem("products"));
    }

    console.log(allProducts);
    const obj = {
      ID: productID,
      Name: productName,
      Image: productImage,
      Price: productPrice,
    };
    allProducts.push(obj);

    localStorage.setItem("products", JSON.stringify(allProducts));

    alert("Product Added");
  }

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
                  type="url"
                  id="product-Image"
                  alt="product-img"
                  onChange={(e) => setProductImage(e.target.value)}
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
