// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Answer = ({checkAnswer, correct_answer, message, handleNextQuestion}) => {

  //? ---- variables ----
const correctMessages = ["Well done!", "Fantastic!", "Great job!", "Wow, you got it right!", "Brilliant!", "A gold star for you!", "Excellent!", "Way to go!", "Outstanding!", "Well, look at you go!", "You remembered!", "Exactly right!", "You’ve just mastered that!"]

const praise = correctMessages[Math.floor(Math.random()*correctMessages.length)];

  //? ---- rendering ----
  return <div>
  {checkAnswer ? <p>{praise}</p> : null }
  <span>The correct answer is <i> {correct_answer.toLowerCase()}</i>.</span>
  <p>{message}</p>
   <button onClick={handleNextQuestion}>Next Question</button>
</div>;
};
export default Answer ;