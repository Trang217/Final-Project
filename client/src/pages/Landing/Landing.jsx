// ---- hooks, dependencies, styling import ----

// ---- components ----
import AnimalBubble from "../../components/AnimalBubble";

// ---- COMPONENT ----
const Landing = () => {
  //? ---- hooks ----
  // const history = useHistory();

  //? ---- event handlers ----

  //Start the adventure button handler
  const handleSubmit = () => {};

  /* QUESTION: useHistory here? {history.push('/login')*/

  //? ---- rendering ----
  return (
    <>
      <div className="">
        {/* applies the map picture */}
        <div className="">
          <p>
            Hey there, little explorer! create an account or sign in to
            playfully discover some interesting facts about our planet’s
            astonishing landscapes, amazing wildlife, and diverse flora.
          </p>
          <p>
            At the end of each exploration you can do a fun little quiz to test
            your knowledge and collect some badges on your profile!
          </p>
          <button onClick={handleSubmit}>Start the adventure</button>
          {/* NAVIGATE - LINK type*/}
        </div>
        <AnimalBubble name="rainforest" />
        <AnimalBubble name="desert" />
        <AnimalBubble name="ocean" />
      </div>
    </>
  );
};

export default Landing;
