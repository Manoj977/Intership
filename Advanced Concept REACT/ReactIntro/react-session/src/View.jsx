import React from "react";

const View = () => {
  const allProducts = JSON.parse(localStorage.getItem("products"));
  return (
    <div className="view">
      <form>
        <table>
          <tbody>
            {allProducts.map((item, index) => (
              <tr>
                <td>
                  <label htmlFor="product-id">Product ID</label>
                  <div id="product-id">{item.ID}</div>
                </td>
                <td>
                  <label htmlFor="product-Name">Product Name</label>
                  <div id="product-id">{item.Name}</div>
                </td>
                <td>
                  <div id="product-id">
                    <div id="product-image">
                      <img src={item.Image} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <label htmlFor="product-Price">Product Price</label>
                  <div id="product-price">₹{item.Price}</div>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>
                <label htmlFor="product-ID">Product ID</label>
                <div id="product-ID">{localStorage.getItem("ID")}</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Name">Product Name</label>
                <div id="product-name">{localStorage.getItem("Name")}</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Image">Product Image</label>
                <div id="product-image">
                  <img src={localStorage.getItem("Image")} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="product-Price">Product Price</label>
                <div id="product-price">{localStorage.getItem("Price")}</div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default View;
