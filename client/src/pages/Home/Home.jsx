// ---- hooks, dependencies, styling import ----
import axios from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import useWindowDimensions from "../../utils/windowSize";

// ---- components ----

import AnimalBubble from "../../components/AnimalBubble";
import Story from "./Story";

// ---- COMPONENT ----

const Home = () => {
  //? ---- hooks ----
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/profile");
        setUsername(res.data.user.userName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //? ---- event handlers ----

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ left: e.pageX, top: e.pageY });
  };

  //? ---- rendering ----
  return (
    <div className="home" onMouseMove={(e) => handleMouseMove(e)}>
      <div className="start">
        {/* <p>
          {mousePosition.left.toString()} / {mousePosition.top.toString()}
        </p> */}
        <h1
        // style={{
        //   transform: `rotate(${mousePosition.top / mousePosition.left}deg)`,
        // }}
        >
          Hi {username},<br /> enjoy your exploration!
        </h1>

        <div
          className="inkBlot"
          style={{
            transform: mousePosition.left < width / 2 ? `scale(-1,1)` : null,
          }}
          onClick={() => navigate("/badges")}
        ></div>
        <button onClick={openModal}>What am I doing here?</button>
        <Modal
          isOpen={isOpen}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(204, 196, 157, 0.5)",
            },
            content: {
              border: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="story-overlay">
            <Story closeModal={closeModal} />
            <button className="closeModal" onClick={closeModal}>
              Back to home
            </button>
          </div>
        </Modal>
      </div>
      <div>
        <AnimalBubble name="rainforest" doesNavigate="true" type="home" />
        <AnimalBubble name="desert" doesNavigate="true" type="home" />
        <AnimalBubble name="ocean" doesNavigate="true" type="home" />
      </div>
    </div>
  );
};
export default Home;
