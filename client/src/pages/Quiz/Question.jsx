// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Question = ({
  questions,
  currentQuestion,
  handleAnswer,
  answers,
  chooseAnswer,
}) => {
  //? ---- rendering ----
  return (
    <>
      <div className="flex flex-col items-center h-80">
        <div>
          <span className="">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <div className=" mx-6 h-14 flex flex-col justify-center">
          <span>{questions[currentQuestion].question}</span>
        </div>

        <div className=" h-56 flex flex-col items-center justify-around">
          {answers.map((answer, i) => (
            <button
              className="border-2 rounded-full text-stone-700 text-amber-50 font-bold py-2 px-4 w-60 focus:ring focus:ring-cyan-600 hover:bg-stone-100 focus:bg-stone-100"
              onClick={chooseAnswer}
              key={i}
            >
              {answer}
            </button>
          ))}
        </div>
        <button
          className="bg-cyan-700 hover:bg-cyan-900 text-amber-50 font-bold py-2 px-4 rounded-md"
          onClick={handleAnswer}
        >
          Answer
        </button>
      </div>
    </>
  );
};
export default Question;
