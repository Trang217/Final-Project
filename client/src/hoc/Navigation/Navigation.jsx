// ---- hooks, dependencies, styling import ----
import React, { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import axios from "../../utils/axiosInstance";
//import closeSidebar from "./Sidebar";

// ---- context import ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- COMPONENT ----

export default function Navigation({ closeSidebar }) {
  //? ---- variables ----
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  //? ---- event handlers ----
  const handleLogout = async () => {
    await axios.get("/api/users/logout");
    closeSidebar();
    handleLogin("");
    navigate("/");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home" onClick={closeSidebar}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/badges" onClick={closeSidebar}>
            Badges
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/hall-of-fame"
            onClick={closeSidebar}
          >
            Hall of Fame
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about" onClick={closeSidebar}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/account"
            onClick={closeSidebar}
          >
            Account
          </NavLink>
        </li>
        <li>
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
