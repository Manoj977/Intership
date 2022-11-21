import React from "react";
import "../../../src/Style.css";
import { NavLink } from "react-router-dom";
import ComponentFive from "../ComponentFive/ComponentFive";
import ComponentFour from "../ComponentFour/ComponentFour";
import ComponentTwo from "../ComponentTwo/ComponentTwo";
import "./ComponentOne.css";
import ComponentZero from "../ComponentZero/ComponentZero";
import ComponentThree from "../ComponentThree/ComponentThree";
const ComponentOne = () => {
  return (
    <>
      <div className="Navigation">
        <div className="Heading">
          <h1>Demo</h1>
        </div>
        <div className="Navigation_Links">
          <ul>
            <li>
              <NavLink to="Home" element={<ComponentZero />}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="Products" element={<ComponentTwo />}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="Account" element={<ComponentFour />}>
                Account
              </NavLink>
            </li>
            <li>
              <NavLink to="About" element={<ComponentFive />}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ComponentOne;
