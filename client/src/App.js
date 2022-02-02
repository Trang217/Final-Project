import React from "react";
//import QuizContext from "./contexts/QuizContext/QuizContext";
// import QuizProvider from "./contexts/QuizContext/QuizProvider";
import MainRouter from "./hoc/MainRouter/MainRouter";
import Quiz from "./pages/Quiz/Quiz";

const App = () => {
  return (
    <div className="app">
      <MainRouter />
    </div>
  );
};

export default App;
