// ---- hooks, dependencies, styling import ----
import { useNavigate, useLocation } from "react-router";

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const GameDesert = () => {
  //? ---- hooks ----
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);

  //? ---- event handlers ----

  // helper function that should be called on quiz-button-click and stored somewhere else so it can be used in different components
  const goToQuiz = () => {
    navigate(`/quiz${location.pathname}`);
  };

  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div>
      <h1>Desert</h1>
      <button className="bg-yellow-500 border-black" onClick={goToQuiz}>
        QUIZ
      </button>
    </div>
  );
};
export default GameDesert;
