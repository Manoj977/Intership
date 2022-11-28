import { NavLink, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Products from "./page/products/Products";
import User from "./page/user/User";
import Profile from "./page/profile/Profile";
import Payment from "./page/Payment/Payment";
import Order from "./page/order/Order";
import BillAmount from "./page/BillAmount/BillAmount";

function App() {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/Users">User</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="Users" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
            <Route path="order" element={<Order />}>
              <Route path=":OrderID" element={<BillAmount />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
