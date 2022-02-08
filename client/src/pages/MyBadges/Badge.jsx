// ---- hooks, dependencies, styling import ----
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import capitalize from "../../utils/capitalize";

// ---- COMPONENT ----

const Badge = ({ badge }) => {
  //? ---- hooks ----
  const navigate = useNavigate();

  //? ---- event handlers ----

  const toQuiz = () => {
    navigate(`/quiz/${type}`);
  };
  //? ---- variables ----

  const { type, score, date } = badge;

  //? ---- rendering ----
  return (
    <div className={score > 0 ? " oneBadge" : "oneBadge grayscale"}>
      <p className="type">{capitalize(type)}</p>
      <p className="score">score: {score}</p>
      {score > 0 ? (
        <p className="date">
          discovered on: {format(new Date(date), "EEEE, do MMMM yyyy")}
        </p>
      ) : null}
      {score > 0 ? <button onClick={toQuiz}>Do the quiz again</button> : null}
    </div>
  );
};
export default Badge;
