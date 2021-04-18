import React, { useEffect, useState } from "react";
import { currencyFormatter } from "../../util";
import axios from "axios";
const AdminOrdersRecords = ({
  serviceName,
  servicePrice,
  _id: id,
  customerName,
  customerEmail,
  paymentMethod,
  status,
}) => {
  const [selectedOptionStatus, setSelectedOptionStatus] = useState();
  useEffect(() => {
    (async () => {
      try {
        await setSelectedOptionStatus(status);
        console.log(selectedOptionStatus, "haha", status);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const getSelectedValue = (e, id) => {
    (async () => {
      try {
        axios.put("https://true-colorss.herokuapp.com/orders", {
          id,
          status: e.target.value,
        });
        setSelectedOptionStatus(e.target.value);
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <tr key={id}>
      <th>{customerName}</th>
      <td>{customerEmail}</td>
      <td>{serviceName}</td>
      <td>{currencyFormatter(servicePrice)}</td>
      <td>{paymentMethod}</td>
      <td>
        <div class="select is-normal is-arrowless">
          <select
            name="status"
            onChange={(e) => {
              getSelectedValue(e, id);
            }}
          >
            <option
              selected={selectedOptionStatus === "pending"}
              value="pending"
            >
              Pending
            </option>
            <option selected={selectedOptionStatus === "done"} value="done">
              Done
            </option>
            <option
              selected={selectedOptionStatus === "on going"}
              value="on going"
            >
              On going
            </option>
          </select>
        </div>
      </td>
    </tr>
  );
};

export default AdminOrdersRecords;
