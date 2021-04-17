import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminOrdersRecords from "./AdminOrdersRecords";

const AdminOrders = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const orders = await axios.get("http://localhost:8888/orders");
        setOrders(orders.data);
        console.log(orders);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      {orders && (
        <table
          class="table table is-fullwidth
        "
        >
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Service Name </th>
              <th>Service Price</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <AdminOrdersRecords {...order} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AdminOrders;
