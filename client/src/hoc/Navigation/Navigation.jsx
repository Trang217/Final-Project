import React from "react";
import { Link } from "react-router-dom";
import closeSidebar from "./Sidebar";

export default function Navigation() {
  return (
    <nav>
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
        <li>Logout</li>
      </ul>
    </nav>
  );
}
