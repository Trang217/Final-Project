// ---- hooks, dependencies, styling import ----
import { format } from "date-fns";
import capitalize from "../utils/capitalize";

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Badge = ({ badge }) => {
  //? ---- hooks ----

  //? ---- event handlers ----

  const toQuiz = () => {
    console.log(`navigate to URL -> /quiz/${type}`);
  };
  //? ---- variables ----

  const { type, score, date } = badge;

  //? ---- rendering ----
  return (
    <div>
      <p>{capitalize(type)}</p>
      <p>score: {score}</p>
      {/* <p>discovered: {format(date, "EEEE, do MMM")}</p> */}
      <button onClick={toQuiz}>Do the quiz again</button>
    </div>
  );
};
export default Badge;
