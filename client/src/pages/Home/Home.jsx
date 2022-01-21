// ---- hooks, dependencies, styling import ----
import { useState } from "react";
import Modal from "react-modal"; //! I installed a dependency locally - can be replaced by Tailwind Modal
import "./dummy-style.scss";
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
    <div>
      <div>
        <div onClick={navigateToProfile}>Player Animated</div>
        <div onClick={openModal}>Read the journal trigger</div>
        <Modal isOpen={isOpen} ariaHideApp={false}>
          <Story />
          <div onClick={closeModal}>Explore</div>
        </Modal>
      </div>

      <div>
        <AnimalBubble name="rainforest" doesNavigate="true" />{" "}
        {/*triggers onClick function within the component */}
        <AnimalBubble name="desert" doesNavigate="true" />
        <AnimalBubble name="ocean" doesNavigate="true" />
      </div>
    </div>
  );
};
export default Home;
