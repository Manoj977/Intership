import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BillAmount from "../BillAmount/BillAmount";
import Data from "../OrderData";

const Order = () => {
  return (
    <div>
      Your Previous Order List are:
      {Data.map((item, index) => (
        <div className="datas" key={index}>
          <div className="orderedHistory">
            <NavLink to={item.OrderID}>
              <div className="OrderID">{item.OrderID}</div>
            </NavLink>
            <div className="Product">
              <div className="ProductName">{item.ProductName}</div>
            </div>
            <div className="Product">
              <div className="ProductImage">
                <img className="image" src={item.image} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Order;
