// ---- hooks, dependencies, styling import ----
import { useState } from "react";

// ---- data ----
import data from "../pages/Landing/data.json";

//---- COMPONENT ----
const AnimalBubble = ({ name, doesNavigate, type }) => {
  //? ---- hooks ----

  const [isShown, setIsShown] = useState();

  //? ---- variables ----
  const [animal, message] = data[`${name}`];
  const variant = animal.concat('-', type);

  //? ---- handlers

  const navigate = (game) => {
    console.log(`user clicked, navigate to ${game}`); // switch statement in the future
  };

  //? ---- rendering ----
  return (
    <div
      className={`${variant}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={doesNavigate ? ()=> navigate(animal) : null}
    >
      {isShown ? <div className="speechBubble">{message}</div> : null}
    </div>
  );
};

export default AnimalBubble;
