// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----
import QuizContext from "../../contexts/QuizContext/QuizContext";
// ---- data ----
import data from "./desert.json";
// ---- COMPONENT ----

const Results = ({ score, biomeName }) => {
  //? ---- hooks ----

  //? ---- event handlers ----

  //? ---- variables ----
  const { questions } = data;
  //? ---- rendering ----
  return (
    <div>
      {" "}
      <span>Congratulations, you finished the {biomeName} quiz! </span>
      <div>
        You scored {score} out of {questions.length}.{" "}
        {score >= questions.length / 2 ? "That's amazing!" : null}
      </div>
      <button onClick={() => console.log("navigate to MyBadges")}>
        I want to see the new badge{" "}
      </button>
      <button onClick={() => console.log("navigate to Quiz/:biomeName")}>
        I want to do the quiz again!{" "}
      </button>
      <button onClick={() => console.log("navigate to Home")}>
        I want to explore another ecosystem!{" "}
      </button>
    </div>
  );
};
export default Results;
