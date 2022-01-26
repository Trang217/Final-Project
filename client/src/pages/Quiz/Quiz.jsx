// ---- hooks, dependencies, styling import ----
import './animation.scss'
import { useState, useEffect } from "react";

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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [notify, setNotify] = useState(false);

  //? ---- data----
  const { questions } = data;
  const { correct_answer, answers, message } = questions[currentQuestion];
 

  //? ---- event handlers ----

  const animate = () => {
    setNotify(true);
    setTimeout(()=>setNotify(false), 1000)
  }

  const handleAnswer = () => {
    selectedAnswer === ""
      ? animate()
      : setIsSubmitted(true);
    if (selectedAnswer === correct_answer) {
      setCheckAnswer(true);
      setScore(score + 1);
    } else {
      setCheckAnswer(false);
    }
    setSelectedAnswer("");
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
    setSelectedAnswer(e.target.textContent);
  };

  //? ---- rendering ----
  return (
    <div className="bg-neutral-50 w-1/2 text-center m-16 p-10">
      <p className="m-3">
        Can you help the Scientist write a chapter about the {biomeName}?
      </p>
      {showResults ? (
        <Results biomeName={biomeName} score={score} questions={questions} />
      ) : isSubmitted ? (
        <Answer
          checkAnswer={checkAnswer}
          correct_answer={correct_answer}
          message={message}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          questions={questions}
        />
      ) : (
        <Question
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          handleNextQuestion={handleNextQuestion}
          answers={answers}
          chooseAnswer={chooseAnswer}
          notify={notify}
        />
      )}
    </div>
  );
};
export default Quiz;
