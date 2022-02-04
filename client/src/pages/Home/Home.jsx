// ---- hooks, dependencies, styling import ----
import { useState } from "react";
import Modal from "react-modal"; //! I installed a dependency locally - can be replaced by Tailwind Modal

// ---- components ----

import AnimalBubble from "../../components/AnimalBubble";
import Story from "./Story";

// ---- COMPONENT ----

const Home = () => {
  //? ---- hooks ----

  const [isOpen, setIsOpen] = useState(false);

  //? ---- event handlers ----

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigateToProfile = () => {
    console.log("Player clicked, navigate to profile");
  };

  //? ---- rendering ----
  return (
    <div className="home">
      <div className="start">
        <div className="inkBlot" onClick={navigateToProfile}></div>
        <button onClick={openModal}>What am I doing here?</button>
        <Modal isOpen={isOpen} ariaHideApp={false}>
          <Story />
          <div onClick={closeModal}>Explore</div>
        </Modal>
      </div>
      <div>
        <AnimalBubble name="rainforest" doesNavigate="true" />
        <AnimalBubble name="desert" doesNavigate="true" />
        <AnimalBubble name="ocean" doesNavigate="true" />
      </div>
    </div>
  );
};
export default Home;
