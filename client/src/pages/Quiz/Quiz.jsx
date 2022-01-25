// ---- hooks, dependencies, styling import ----

import { useState } from "react";

// ---- components ----
import Question from "./Question";
import Answer from "./Answer";
import Results from "./Results";

// ---- context import ----

// ---- data ----
import data from "./desert.json";

// ---- COMPONENT ----

const Quiz = ({ biomeName }) => {

  //? ---- hooks ----
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [score, setScore] = useState(0);

  //? ---- data----
  const { questions } = data;
  const { correct_answer, answers, message } = questions[currentQuestion];

  //? ---- event handlers ----
  const handleAnswer = () => {
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const chooseAnswer = (e) => {
    if (e.target.textContent === correct_answer) {
      setCheckAnswer(true);
      setScore(score + 1);
    } else {
      setCheckAnswer(false);
    }
  };

  //? ---- rendering ----
  return (
    <div className="app">
      <p>Quiz</p>
      {showResults ? (
        <Results biomeName={biomeName} score={score} questions={questions} />
      ) : isSubmitted ? (
        <Answer
          checkAnswer={checkAnswer}
          correct_answer={correct_answer}
          message={message}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <Question
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
          answers={answers}
          chooseAnswer={chooseAnswer}
        />
      )}
    </div>
  );
};
export default Quiz;
