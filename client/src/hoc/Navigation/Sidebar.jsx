import React, { useState } from "react";
import Navigation from "./Navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="fixed z-30 flex items-center cursor-pointer right-10 top-6 bg-green-500 p-3"
        onClick={() => setIsOpen(!isOpen)}
      >{`${!isOpen ? "open" : "close"}`}</button>

      {isOpen ? (
        <div className=" right-0 pt-20 h-full bg-red-500">
          <Navigation />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
