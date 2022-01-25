// ---- hooks, dependencies, styling import ----
//import { useQuizContext } from "../../contexts/QuizContext/context";
import { useState, useContext } from "react";
import QuizProvider from "../../contexts/QuizContext/QuizProvider";
// ---- components ----
//import Question from "./Question";
//import Answer from "./Answer";
//import Results from "./Results";

// ---- context import ----

// ---- data ----


// ---- COMPONENT ----

const Quiz = ({ biomeName }) => {
  //? ---- hooks ----
  
  const {showResults,isSubmitted, score} = useContext(QuizProvider)

  //? ---- event handlers ----


  //? ---- variables ----
  

  //? ---- rendering ----
  return (
     
    <div className="app">

    <p>Quiz</p>
      {showResults ? ( <p>test true</p>
     //   <Results biomeName={biomeName} score={score} />
      ) : 
       null }
      {isSubmitted ? (<p>test true</p>
     //   <Answer/> 
      ) : null} 
    </div>
    
  );
};
export default Quiz;
