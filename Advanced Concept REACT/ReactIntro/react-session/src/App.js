import React from "react";
import "./Style.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Product from "./Page/Product";
import ContactUs from "./ContactUs";
import About from "./About";
import Main from "./Main";
import Add from "./Page/Add";
import View from "./View";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <div>Demo</div>
          <ul className="navigation">
            <li>
              <NavLink to="Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="Contactus">ContactUs</NavLink>
            </li>
            <li>
              <NavLink to="About">About</NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="content">Component</div> */}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Home" element={<Home />} />
        <Route path="product" element={<Product />}>
          <Route path="Add" element={<Add />} />
          <Route path="View" element={<View />} />
        </Route>
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
