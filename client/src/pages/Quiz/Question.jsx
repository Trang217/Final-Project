
// ---- COMPONENT ----

const Question = ({
  handleAnswer,
  currentQuestion,
  chooseAnswer,
  notify,
  questions,
}) => {
  //? ---- variables ----

  const { question, answers } = questions[currentQuestion];

  //? ---- rendering ----
  return (
    <>
      <div className="answer-container">
        <div>
          <span>
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
    
          <span>{question}</span>
   

        <div className="answer-container">
          {answers.map((answer, i) => (
            <button
              className={`answer border-2 focus:ring focus:ring-cyan-600 hover:bg-stone-100 focus:bg-stone-100 ${
                notify ? "wobble-me" : null
              }`}
              onClick={chooseAnswer}
              key={i}
            >
              {answer}
            </button>
          ))}
        </div>
        <button
          className="submit-btn"
          onClick={handleAnswer}
        >
          Answer
        </button>
      </div>
    </>
  );
};
export default Question;
