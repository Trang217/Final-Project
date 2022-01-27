// ---- hooks, dependencies, styling import ----
import { useState, useEffect, useRef } from "react";
import menuBtn from "../Navigation/menu-btn.jpg";

// ---- components ----
import Navigation from "./Navigation";

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----
export default function Sidebar() {
  //? ---- hooks ----
  const [isOpen, setIsOpen] = useState(false);

  //? ---- event handlers ----

  const closeSidebar = () => {
    setIsOpen(!isOpen);
  };

  //* close Sidebar when click outside the Sidebar Component is detected
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  //? ---- variables ----

  //? ---- rendering ----

  return (
    <div ref={wrapperRef}>
      <div
        className="fixed z-30 cursor-pointer right-10 top-6 p-3 w-20 rounded-full"
        onClick={closeSidebar}
      >
        <img alt="logo" src={menuBtn} className="object-cover" />
      </div>

      <div
        className={`fixed right-0 pt-20 h-full bg-yellow-300 w-60 transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Navigation />
      </div>
    </div>
  );
}
