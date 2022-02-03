// ---- hooks, dependencies, styling import ----
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import closeSidebar from "./Sidebar";

// ---- context import ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- COMPONENT ----

export default function Navigation() {
  //? ---- variables ----
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  //? ---- event handlers ----
  const handleLogout = async () => {
    await axios.get("/api/users/logout");
    handleLogin("");
    navigate("/");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/home" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/badges" onClick={closeSidebar}>
            My Badges
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeSidebar}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/account" onClick={closeSidebar}>
            Account Details
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
