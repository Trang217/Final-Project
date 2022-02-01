// ---- hooks, dependencies, styling import ----
import { useContext } from "react";

// ---- components ----

// ---- context import ----
import QuizContext from "../../contexts/QuizContext/QuizContext";

// ---- data ----

// ---- COMPONENT ----

const Results = ({biomeName, score, questions}) => {
  //? ---- hooks ----
//const {score, questions} = useContext(QuizContext)
  //? ---- event handlers ----

  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div className="">
      {" "}
      <span>Congratulations, you finished the {biomeName} quiz! </span>
      <div>
        You scored {score} out of {questions.length}.{" "}
        {score >= questions.length / 2 ? "That's amazing!" : null}
      </div>
      <button className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48" onClick={() => console.log("navigate to MyBadges")}>
        I want to see the new badge{" "}
      </button>
      <button className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48" onClick={() => console.log("navigate to Quiz/:biomeName")}>
        I want to do the quiz again!{" "}
      </button>
      <button className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48" onClick={() => console.log("navigate to Home")}>
        I want to explore another ecosystem!{" "}
      </button>
    </div>
  );
};
export default Results;
