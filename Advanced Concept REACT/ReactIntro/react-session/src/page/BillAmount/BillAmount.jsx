import React from "react";
import { useParams } from "react-router-dom";
import Data from "../OrderData";
const BillAmount = () => {
  const { OrderID } = useParams();
  console.log(OrderID);
  return (
    <div>
      {Data.map((item) => item.OrderID === OrderID && <div>{item.Price}</div>)}
    </div>
  );
};

export default BillAmount;
