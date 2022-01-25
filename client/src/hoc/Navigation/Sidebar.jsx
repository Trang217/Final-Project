// ---- hooks, dependencies, styling import ----
import { useState, useEffect, useRef } from "react";

// ---- components ----
import Navigation from "./Navigation";

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----
export default function Sidebar() {
  //? ---- hooks ----
  const [isOpen, setIsOpen] = useState(false);

  //? ---- event handlers ----

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
      <button
        className="fixed z-30 flex items-center cursor-pointer right-10 top-6 bg-green-500 p-3"
        onClick={() => setIsOpen(!isOpen)}
      >{`${!isOpen ? "open" : "close"}`}</button>

      <div
        className={`fixed right-0 pt-20 h-full bg-red-500 w-80 transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Navigation />
      </div>
    </div>
  );
}
