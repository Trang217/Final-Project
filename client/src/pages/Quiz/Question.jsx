// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Question = ({questions, currentQuestion, handleAnswer, answers, chooseAnswer}) => {

  //? ---- rendering ----
  return ( <>
         <div className="question-section">
            <div className="question-count"></div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {answers.map((answer, i) => (
              <button onClick={chooseAnswer} key={i}>
                {answer}
              </button>
            ))}
          </div>
          <button onClick={handleAnswer}>Answer</button>
         
          <span>{currentQuestion + 1}</span>/{questions.length}
        </>)
};
export default Question ;