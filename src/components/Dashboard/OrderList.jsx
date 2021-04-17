import React from "react";
import Loading from "../common/Loading";
import AdminOrders from "./AdminOrders";
import UserOrders from "./UserOrders";
const OrderList = ({ isAdmin }) => {
  if (isAdmin === null) {
    return <Loading isFull />;
  }
  if (!isAdmin) {
    return <UserOrders />;
  } else {
    return <AdminOrders />;
  }
};

export default OrderList;
