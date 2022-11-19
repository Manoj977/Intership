import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Order from "../order/Order";
import Payment from "../Payment/Payment";
import Profile from "../profile/Profile";

const User = () => {
  return (
    <div>
      <br />
      <hr />
      User
      <NavLink to="profile" element={<Profile />}>
        Profile
      </NavLink>
      ||
      <NavLink to="payment" element={<Payment />}>
        Payment
      </NavLink>
      ||
      <NavLink to="order" element={<Order />}>
        order
      </NavLink>
      <Outlet />
    </div>
  );
};

export default User;
