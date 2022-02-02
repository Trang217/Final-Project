// ---- hooks, dependencies, styling import ----
import { useNavigate } from "react-router-dom";

// ---- COMPONENT ----

const Results = ({ biomeName, score, questions }) => {
  const navigate = useNavigate();
  //? ---- event handlers ----

  const refresh = () => {
    window.location.reload(false);
  };
  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div className="">
      <span>Congratulations, you finished the {biomeName} quiz! </span>
      <div>
        You scored {score} out of {questions.length}.
        {score >= questions.length / 2 ? "That's amazing!" : null}
      </div>
      <button
        className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48"
        onClick={() => navigate("/badges")}
      >
        I want to see the new badge!
      </button>
      <button
        className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48"
        onClick={refresh}
      >
        I want to do the quiz again!
      </button>
      <button
        className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md m-2 w-48"
        onClick={() => navigate("/home")}
      >
        I want to explore another ecosystem!
      </button>
    </div>
  );
};
export default Results;
