import React from "react";

const View = () => {
  const allProducts = JSON.parse(localStorage.getItem("products"));
  return (
    <div className="view">
      {allProducts.map((item, index) => (
        <form key={item}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="flex">
                    <label htmlFor="product-id">Product ID</label>
                    <div id="product-id">{item.ID}</div>
                  </div>
                  <div className="flex">
                    <label htmlFor="product-Name">Product Name</label>
                    <div id="product-id">{item.Name}</div>
                  </div>
                  <div className="flex">
                    <label htmlFor="product-image">Product Image</label>

                    <img id="product-image" src={item.Image} alt="" />
                  </div>
                  <div className="flex">
                    <label htmlFor="product-Price">Product Price</label>
                    <div id="product-price">₹{item.Price}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      ))}
    </div>
  );
};

export default View;
