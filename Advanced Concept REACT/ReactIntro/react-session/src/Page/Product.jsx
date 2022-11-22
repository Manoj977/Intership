import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="container">
      Product
      <ul className="content-product">
        <li>
          <NavLink to="Add">Add Section</NavLink>
        </li>
        <li className="vr-line"></li>
        <li>
          <NavLink to="View">View Section</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Product;
