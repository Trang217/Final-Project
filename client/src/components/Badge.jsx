// ---- hooks, dependencies, styling import ----
import { format } from "date-fns";
import capitalize from "../utils/capitalize";

// ---- COMPONENT ----

const Badge = ({ badge }) => {

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
      {score < 0 ? <p>discovered on: {format(new Date(date), "EEEE, Do MMMM yyyy")}</p> : null }
      <button onClick={toQuiz}>Do the quiz again</button>
    </div>
  );
};
export default Badge;
