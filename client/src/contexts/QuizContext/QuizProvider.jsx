import { useState } from "react";
import QuizContext from "./QuizContext";
import data from "../../pages/Quiz/desert.json";

export default function QuizProvider({ children }) {
  //? ---- STATE ----
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [score, setScore] = useState(0);

  //? ---- DATA ----
  const { questions } = data;
  const { correct_answer, answers, message } = questions[currentQuestion];

  //? ---- EVENT HANDLERS ----

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

  const providedData = {
    answers,
    message,
    correct_answer,
    currentQuestion,
    showResults,
    isSubmitted,
    checkAnswer,
    score,
    handleAnswer,
    handleNextQuestion,
    chooseAnswer,
    questions
  };

  return (
    <QuizContext.Provider value={providedData}>{children}</QuizContext.Provider>
  );
}
