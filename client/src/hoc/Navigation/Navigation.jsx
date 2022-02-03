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
    <nav>
      <ul className="p-9">
        <li className="mt-16 p-4">
          <Link to="/home" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="/badges" onClick={closeSidebar}>
            My Badges
          </Link>
        </li>
        <li className="p-4 mb-8">
          <Link to="/about" onClick={closeSidebar}>
            About Us
          </Link>
        </li>
        <hr></hr>
        <li className="p-4 mt-16">
          <Link to="/account" onClick={closeSidebar}>
            Account Details
          </Link>
        </li>
        <li className="p-4">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
