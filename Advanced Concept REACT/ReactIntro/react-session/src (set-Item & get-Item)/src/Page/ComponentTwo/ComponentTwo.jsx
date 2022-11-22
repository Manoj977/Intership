import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../src/Style.css";

const ComponentTwo = (props) => {
  let b = JSON.stringify(localStorage.getItem("Datas"));
  const remove = () => {
   console.log("removed");
  };
  const { Products, onAdd } = props;
  const { cartItems } = props;
  return (
    <div className="part-section">
      <div className="Component-Product">
        <p className="Heading">Products</p>
        <div className="List-of-Products">
          {Products.map((item) => (
            <div key={item.ProductID}>
              <div className="products">
                <div className="id">{item.ProductID}</div>
                <div className="image">
                  <img
                    className="products-image"
                    src={item.ProductImage}
                    alt="Product"
                  />
                </div>
                <div className="products-desc">
                  {item.ProductName}
                  <br />₹{item.ProductPrice}
                  <NavLink
                    onClick={() => {
                      onAdd(item);
                    }}
                  >
                    <button>Add To Cart</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
      <div className="Component-Cart">
        <p className="Heading">Cart Items</p>
        <div>
          {b != null ||
            (cartItems.length === 0 && (
              <div className="cart">Cart is Empty</div>
            ))}
        </div>
        {b != null &&
          b.map((item, index) => (
            <div key={index}>
              <table className="show-cart">
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="products-image"
                        src={item.ProductImage}
                        alt="cart-product-img"
                      />
                    </td>
                    <td>
                      {item.ProductName}
                      <br /> ₹ {item.ProductPrice}
                    </td>
                    <td>
                      <button onClick={remove()}>Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComponentTwo;
