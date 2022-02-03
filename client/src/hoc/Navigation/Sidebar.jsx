// ---- hooks, dependencies, styling import ----
import { useState, useEffect, useRef, useContext } from "react";
import menuBtn from "../Navigation/images/menu-btn.jpg";
import "./sidebar.scss";

// ---- components ----
import Navigation from "./Navigation";

// ---- context import ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- data ----

// ---- COMPONENT ----
export default function Sidebar() {
  //? ---- hooks ----
  const { loggedIn } = useContext(AuthContext);

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
    <div>
      {loggedIn ? (
        <div ref={wrapperRef}>
          <div className="menuBtn" onClick={closeSidebar}>
            <img alt="logo" src={menuBtn} className="object-cover" />
          </div>

          <div
            className={`fixed right-0 pt-20 p-8 bgSidebar h-full w-80 transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Navigation />
          </div>
        </div>
      ) : null}
    </div>
  );
}
