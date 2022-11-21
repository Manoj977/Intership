import React from "react";

const ComponentThree = (props) => {
  var retrievedObject = localStorage.getItem("Data");
  const { cartItems } = props;
  return (
    <div>
      {/* <div>
        {cartItems.length === 0 && <div className="Account">Cart is Empty</div>}
      </div>
      {cartItems.map((item) => (
        <div key={item.ProductID}>
          <table>
            <tr>
              <td>
                <img className="products-image" src={item.ProductImage} />
              </td>
              <td>{item.ProductName}</td>
              <td className="price">₹ {item.ProductPrice}</td>
            </tr>
          </table>
        </div>
      ))} */}
    </div>
  );
};

export default ComponentThree;
