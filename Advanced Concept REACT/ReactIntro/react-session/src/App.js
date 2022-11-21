import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Data from "./Data/ContentData";
import ComponentFive from "./Page/ComponentFive/ComponentFive";
import ComponentFour from "./Page/ComponentFour/ComponentFour";
import ComponentOne from "./Page/ComponentOne/ComponentOne";
import ComponentThree from "./Page/ComponentThree/ComponentThree";
import ComponentTwo from "./Page/ComponentTwo/ComponentTwo";
import ComponentZero from "./Page/ComponentZero/ComponentZero";
import "./Style.css";
const App = () => {
  const { products } = Data;
  const [cartItems, SetCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.ProductID === product.ProductID);
    if (exist) {
      SetCartItems(
        cartItems.map((x) =>
          x.ProductID === product.ProductID ? { ...exist } : x
        )
      );
      // alert("Already in cart");
    } else {
      let cart= [...cartItems, { ...product }]
      SetCartItems(cart);
      localStorage.setItem("Datas", JSON.stringify(cart));
      // alert("clicked");
    }
  };
  return (
    <div className="container">
      <ComponentOne />
      <div className="DisplayComponent container">
        <Routes>
          <Route path="/" element={<ComponentZero />} />
          <Route path="/Home" element={<ComponentZero />} />
          <Route
            path="/Products"
            element={
              <ComponentTwo
                onAdd={onAdd}
                Products={products}
                cartItems={cartItems}
              />
            }
          />

          <Route path="/Account" element={<ComponentFour />} />
          <Route path="/About" element={<ComponentFive />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
