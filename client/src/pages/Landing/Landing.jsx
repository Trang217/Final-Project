// ---- hooks, dependencies, styling import ----
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Modal from "react-modal";
import ModalBackground from "./paper4.png";
// ---- components ----
import AboutUs from "../AboutUs/AboutUs";
import AnimalBubble from "../../components/AnimalBubble";

// ---- context ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- COMPONENT ----
const Landing = () => {
  //? ---- hooks ----
  let navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const { loggedIn } = useContext(AuthContext);

  //? ---- event handlers ----

  //Start the adventure button handler
  const handleClick = () => {
    loggedIn ? navigate("/home") : navigate("/login");
  };

  // Show Modal with AboutUS component
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  //? ---- rendering ----
  return (
    <div className="landing">
      <button className="modalButton" onClick={handleModal}>
        ABOUT
      </button>
      <div className="landingContent">
        <p className="title">Hey there, little explorer!</p>
        <p>
          Create an account or sign in to playfully discover some interesting
          facts about our planet’s astonishing landscapes, amazing wildlife, and
          diverse flora.
        </p>
        <p>
          At the end of each exploration you can do a fun little quiz to test
          your knowledge and collect some badges on your profile!
        </p>
        <button onClick={handleClick}>Start the Adventure</button>
      </div>
      <AnimalBubble name="rainforest" />
      <AnimalBubble name="desert" />
      <AnimalBubble name="ocean" />

      {modalOpen ? (
        <Modal
          isOpen={modalOpen}
          style={{
            content: {
              left: "15%",
              right: "15%",
              backgroundImage: `url(${ModalBackground})`,
            },
          }}
        >
          {" "}
          <button className="closeModal" onClick={handleModal}>
            X
          </button>
          <AboutUs />
        </Modal>
      ) : null}
    </div>
  );
};

export default Landing;
