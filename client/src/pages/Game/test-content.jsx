// ---- hooks, dependencies, styling import ----
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";
// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const GameTest = ({ biomeName }) => {
  //? ---- hooks ----
  const [content, setContent] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  //? ---- API CONNECTION ----
  const getData = async () => {
    try {
      const response = await axios.get(`/api/content/game/${biomeName}`);
      setContent(response.data.gameContent.items);
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  //? ---- event handlers ----

  //? ---- variables ----

  const {
    item_0,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5: ostrich, //optional renaming 
    item_6,
    item_7,
    item_8,
    item_9,
    item_10,
    item_11,
    item_12,
    item_13,
    item_14,
    item_15,
  } = content;

  useEffect(() => getData(), []);
  //? ---- rendering ----
  return (
    <div className="testGame">
      {" "}
      {hasLoaded ? (
        <div>
          <p>{item_1[0]}</p>
          <p>{item_1[1]}</p>
           <p>ostrich title: {ostrich[0]}</p>
           <p>ostrich text: {ostrich[1]}</p>
        </div>
      ) : null}
    </div>
  );
};
export default GameTest;
