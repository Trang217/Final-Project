// ---- hooks, dependencies, styling import ----
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import capitalize from "../../utils/capitalize";
import AnimalBubble from "../../components/AnimalBubble";

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
    <div className={score > 0 ? "oneBadge" : "oneBadge grayscale"}>
      <p className="type">{capitalize(type)}</p>
      <div className="bubble">
        <AnimalBubble name={type} />
      </div>

      {score > 0 ? (
        <div className="active">
          <p className="score">Your score: {score}</p>
          <p className="date">
            Discovered on: {format(new Date(date), "EEEE, do MMMM yyyy")}
          </p>
        </div>
      ) : (
        <div className="inactive">
          <p className="message">
            Once you explored the {type} you'll find your badge here!
          </p>
        </div>
      )}
      {score > 0 ? <button onClick={toQuiz}>Do the quiz again</button> : null}
    </div>
  );
};
export default Badge;
