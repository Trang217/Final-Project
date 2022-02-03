// ---- hooks, dependencies, styling import ----

// ---- context import ----

// ---- COMPONENT ----

const Answer = ({
  questions,
  checkAnswer,
  handleNextQuestion,
  currentQuestion,
}) => {
  //? ---- variables ----
  const correctMessages = [
    "Well done!",
    "Fantastic!",
    "Great job!",
    "Wow, you got it right!",
    "Brilliant!",
    "A gold star for you!",
    "Excellent!",
    "Way to go!",
    "Outstanding!",
    "Well, look at you go!",
    "You remembered!",
    "Exactly right!",
    "You’ve just mastered that!",
  ];

  const praise =
    correctMessages[Math.floor(Math.random() * correctMessages.length)];

  const { correct_answer, message } = questions[currentQuestion];

  //? ---- rendering ----
  return (
    <div className="answer-container">
      <div>
        <span className="">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      <div className="answer-container">
        {checkAnswer ? <p>{praise}</p> : null}
        <span>
          The correct answer is <i> {correct_answer}</i>.
        </span>
      </div>
      <p className="message">
        {message}
      </p>
      <button
        className="submit-btn hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md"
        onClick={handleNextQuestion}
      >
        {currentQuestion === questions.length - 1
          ? "See the results!"
          : "Next question"}
      </button>
    </div>
  );
};
export default Answer;
