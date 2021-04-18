import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { currencyFormatter } from "../../util";

const UserOrders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const orders = await axios.post(
          "https://true-colorss.herokuapp.com/orders/user",
          {
            email: currentUser.email,
          }
        );
        setOrders(orders.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      {orders && (
        <table
          class="table table is-fullwidth
   "
        >
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ serviceName, servicePrice, status, _id: id }) => (
              <tr key={id}>
                <th>{serviceName}</th>
                <td>{currencyFormatter(servicePrice)}</td>
                <th
                  className={`${status === "pending" && `has-text-danger`} ${
                    status === "on going" && `has-text-primary`
                  } ${status === "done" && `has-text-success`}`}
                >
                  {status.toUpperCase()}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserOrders;
