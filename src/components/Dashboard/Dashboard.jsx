import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// imported components
import Order from "./Order";
import OrderList from "./OrderList";
import AddReview from "./AddReview";
import UsersNavItems from "./UsersNavItems";
import AdminNavItems from "./AdminsNavItems";
import AddService from "./AddService";
import ManageServices from "./ManageServices";
import AddAdmin from "./AddAdmin";
import Loading from "../common/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [currentComponent, setCurrentComponent] = useState("Order");
  const [isAdmin, setIsAdmin] = useState(null);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "https://true-colorss.herokuapp.com/admins/checkIsAdmin",
          { email: currentUser.email }
        );
        setIsAdmin(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [currentUser.email]);
  useEffect(() => {
    if (isAdmin) {
      setCurrentComponent("Orders List");
    }
  }, [isAdmin]);

  if (isAdmin === null) {
    return <Loading isFull />;
  }
  return (
    <div>
      <div className="columns min100vh is-align-items-stretch dashboard">
        <aside className="column sidebar is-2 p-5 has-background-success">
          <div className="is-flex is-justify-content-center">
            <Link className="py-3" to="/">
              TRUE COLORS
            </Link>
          </div>
          <div className="navbar-divider"></div>
          {isAdmin ? (
            <AdminNavItems setCurrentComponent={setCurrentComponent} />
          ) : (
            <UsersNavItems setCurrentComponent={setCurrentComponent} />
          )}
          <a
            onClick={async () => {
              await logout();
              history.push("/");
            }}
            class="sidebar-nav-link is-clickable"
          >
            <span class="icon-text  my-5">
              <span class="icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              <span>Logout</span>
            </span>
          </a>
        </aside>
        <div className="column is-10 p-5">
          <div class="navbar-menu">
            <div class="navbar-start">
              <h3 className="title mb-4">{currentComponent}</h3>
            </div>

            <div class="navbar-end">
              {currentUser && currentUser.displayName}
            </div>
          </div>
          {currentComponent === "Add Review" && <AddReview />}
          {currentComponent === "Add Service" && <AddService />}
          {currentComponent === "Manage Services" && <ManageServices />}
          {currentComponent === "Add Admin" && <AddAdmin />}
          {currentComponent === "Order" && (
            <Order setCurrentComponent={setCurrentComponent} />
          )}
          {currentComponent === "Orders List" && (
            <OrderList isAdmin={isAdmin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
