// ---- hooks, dependencies, styling import ----
import { useContext, useState, useEffect } from "react";
import "./animation.scss";
import axios from "../../utils/axiosInstance";
// ---- components ----
import Question from "./Question";
import Answer from "./Answer";
import Results from "./Results";

// ---- context import ----
//import QuizContext from "../../contexts/QuizContext/QuizContext";

// ---- COMPONENT ----

const Quiz = ({ biomeName }) => {
  //? ---- hooks ----
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [notify, setNotify] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correct_answer, setCorrectAnswer] = useState("");
 // const [answers, setAnswers] = useState([]);
 // const [message, setMessage] = useState("");

  //? ---- API CONNECTION ----
  const api = async () => {
    try {
      const response = await axios.get(`/api/content/quiz/${biomeName}`);
      const data = response.data.quizContent.questions
      setHasLoaded(true);
      setQuestions(data);
      if(hasLoaded){
  setCorrectAnswer(questions[currentQuestion].correct_answer)
}
    } catch (error) {
      console.log(error);
    }
  };


 
  //? ---- data----
  


  //? ---- event handlers ----

  const animate = () => {
    setNotify(true);
    setTimeout(() => setNotify(false), 1000);
  };

 
/*
  const handleAnswer = () => {
    selectedAnswer === "" ? animate() : setIsSubmitted(true);
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
*/
  useEffect(() => api(), []);
  //? ---- rendering ----
  return (
    <div className="bg-neutral-50 w-1/2 text-center m-16 p-10">
      <p className="m-3">
        Can you help the Scientist write a chapter about the {biomeName}?
      
      </p>
    {questions.map(el=> <p>{el.question}</p>)}
    </div>
  );
};
export default Quiz;

/*{showResults ? (
        <Results biomeName={biomeName} score={score} questions={data} />
      ) : isSubmitted ? (
        <Answer
          questions={data}
          checkAnswer={checkAnswer}
          correct_answer={correct_answer}
          message={message}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
        />
      ) : (
        <Question
          handleAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          answers={answers}
          chooseAnswer={chooseAnswer}
          notify={notify}
          questions={data}
        />
      )}*/