// ---- hooks, dependencies, styling import ----
import React, { useState } from "react";

// ---- components ----
import Navigation from "./Navigation";

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

export default function Sidebar() {
  //? ---- hooks ----
  const [isOpen, setIsOpen] = useState(false);

  //? ---- event handlers ----
  //! Add event handler to detect click outside the sidebar -> close sidebar

  //? ---- variables ----

  //? ---- rendering ----

  return (
    <div>
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
