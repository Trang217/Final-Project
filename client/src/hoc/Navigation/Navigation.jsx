import React from "react";
import { Link } from "react-router-dom";
import closeSidebar from "./Sidebar";

export default function Navigation() {
  return (
    <nav>
      <ul className="p-2">
        <li className="p-4">
          <Link to="/home" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="/badges" onClick={closeSidebar}>
            My Badges
          </Link>
        </li>
        <li className="p-4">
          <Link to="/about" onClick={closeSidebar}>
            About Us
          </Link>
        </li>
        <hr></hr>
        <li className="p-4">
          <Link to="/account" onClick={closeSidebar}>
            Account Details
          </Link>
        </li>
        <li className="p-4">Logout</li>
      </ul>
    </nav>
  );
}
