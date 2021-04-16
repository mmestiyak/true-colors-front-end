import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
// imported components
import Order from "./Order";
import OrderList from "./OrderList";
import AddReview from "./AddReview";
import UsersNavItems from "./UsersNavItems";
import AdminNavItems from "./AdminsNavItems";
import AddService from "./AddService";
import ManageServices from "./ManageServices";
const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState("Order");
  const { currentUser } = useAuth();
  return (
    <div>
      <div className="columns min100vh dashboard">
        <aside className="column sidebar is-2 p-5 has-background-success">
          {/* <UsersNavItems setCurrentComponent={setCurrentComponent} /> */}
          <AdminNavItems setCurrentComponent={setCurrentComponent} />
        </aside>
        <div className="column is-10 p-5">
          <div class="navbar-menu">
            <div class="navbar-start">
              <h3 className="title mb-4">{currentComponent}</h3>
              <Link to="/home">home</Link>
            </div>

            <div class="navbar-end">
              {currentUser && currentUser.displayName}
            </div>
          </div>
          {currentComponent === "Add Review" && <AddReview />}
          {currentComponent === "Add Service" && <AddService />}
          {currentComponent === "Manage Services" && <ManageServices />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
