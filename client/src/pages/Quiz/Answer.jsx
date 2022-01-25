// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----
import QuizContext from "../../contexts/QuizContext/QuizContext";
// ---- data ----

// ---- COMPONENT ----

const Answer = ({answer, correct, message, score}) => {
  //? ---- hooks ----

  //? ---- event handlers ----

  //? ---- variables ----
const correctMessages = ["Well done!", "Fantastic!", "Great job!", "Wow, you got it right!", "Brilliant!", "A gold star for you!", "Excellent!", "Way to go!", "Outstanding!", "Well, look at you go!", "You remembered!", "Exactly right!", "You’ve just mastered that!"]

const praise = correctMessages[Math.floor(Math.random()*correctMessages.length)];

  //? ---- rendering ----
  return <div>
  {answer ? <p>{praise}</p> : null }
  <span>The correct answer is <i> {correct.toLowerCase()}</i>.</span>
  <p>{message}</p>
</div>;
};
export default Answer ;