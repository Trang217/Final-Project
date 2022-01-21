// ---- hooks, dependencies, styling import ----
import { useState } from "react";
// import "./bubble.scss";

// ---- data ----
import data from "./data.json";

//---- COMPONENT ----
const AnimalBubble = ({ name }) => {
  //? ---- hooks ----

  const [isShown, setIsShown] = useState();

  //? ---- variables ----
  const [animal, message] = data[`${name}`];
  
  //? ---- rendering ----
  return (
    <div
    //  className={`bubble ${animal}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >  
{/*temporarily displaying the name instead of picture */}
      {animal}
      {isShown ? <div>{message}</div> : null}
    </div>
  );
};

export default AnimalBubble;
