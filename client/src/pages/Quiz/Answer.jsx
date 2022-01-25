// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Answer = ({
  checkAnswer,
  correct_answer,
  message,
  handleNextQuestion,
  currentQuestion,
  questions,
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

  //? ---- rendering ----
  return (
    <div className="flex flex-col items-center h-80">
      <div>
        <span className="">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      <div className="mx-8 h-14 flex flex-col justify-center">
        {" "}
        {checkAnswer ? <p>{praise}</p> : null}
        <span>
          The correct answer is <i> {correct_answer.toLowerCase()}</i>.
        </span>
      </div>
      <p className=" mx-8 h-56 flex flex-col justify-center border-solid border-2 border-gray-400 rounded-lg m-4 p-3">{message}</p>
      <button
        className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md"
        onClick={handleNextQuestion}
      >
        {currentQuestion === questions.length - 1
          ? "See the results!"
          : "next question"}
      </button>
    </div>
  );
};
export default Answer;
