// ---- hooks, dependencies, styling import ----
import { format } from "date-fns";
import {useNavigate} from "react-router-dom"
import capitalize from "../utils/capitalize";

// ---- COMPONENT ----

const Badge = ({ badge }) => {

  //? ---- hooks ----
  const navigate = useNavigate()

  //? ---- event handlers ----

  const toQuiz = () => {
   navigate(`/quiz/${type}`);
  };
  //? ---- variables ----

  const { type, score, date } = badge;

  //? ---- rendering ----
  return (
    <div>
      <p>{capitalize(type)}</p>
      <p>score: {score}</p>
      {score > 0 ? <p>discovered on: {format(new Date(date), "EEEE, do MMMM yyyy")}</p> : null }
      <button onClick={toQuiz}>Do the quiz again</button>
    </div>
  );
};
export default Badge;
