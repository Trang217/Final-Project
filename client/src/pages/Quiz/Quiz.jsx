// ---- hooks, dependencies, styling import ----
import { useContext } from "react";
import "./animation.scss";

// ---- components ----
import Question from "./Question";
import Answer from "./Answer";
import Results from "./Results";

// ---- context import ----
import QuizContext from "../../contexts/QuizContext/QuizContext";

// ---- COMPONENT ----

const Quiz = ({ biomeName }) => {
  //? ---- hooks ----
  const { showResults, isSubmitted } = useContext(QuizContext);

  //? ---- rendering ----
  return (
    <div className="bg-neutral-50 w-1/2 text-center m-16 p-10">
      <p className="m-3">
        Can you help the Scientist write a chapter about the {biomeName}?
      </p>
      {showResults ? (
        <Results biomeName={biomeName} />
      ) : isSubmitted ? (
        <Answer />
      ) : (
        <Question />
      )}
    </div>
  );
};
export default Quiz;
