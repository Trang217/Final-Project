import aleksandra from "./images/aleksandra.jpeg";
import luisa from "./images/luisa.jpeg";
import patrick from "./images/patrick.jpeg";
import trang from "./images/trang.jpeg";
import "./about.scss";

// ---- hooks, dependencies, styling import ----

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const AboutUs = () => {
  //? ---- hooks ----

  //? ---- event handlers ----

  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div className="backgroundContainer">
      <div className="contentContainer">
        <h2>Why did we make it?</h2>
        <p>
          We created this website to offer you a fun experience while exploring
          different ecosystems/biomes and learn about their uniqueness and
          relevance in a playful way. We hope you enjoy discovering some
          interesting facts about our planet’s astonishing landscapes, amazing
          wildlife, and diverse flora. At the end of each exploration you can do
          a fun little quiz to test your knowledge and collect some badges on
          your profile!
        </p>
        <h2>Who made it?</h2>
        <div className="imagesContainer">
          <img src={aleksandra} alt="Aleksandra Bury" />
          <img src={luisa} alt="Luisa-Lisanne Forck" />
          <img src={patrick} alt="Patrick Mohr" />
          <img src={trang} alt="Trang Nguyen" />
        </div>
        <p>
          We are a team of four full stack web developers - Aleksandra, Luisa,
          Patrick and Trang - who are passionate about coding, art, animation,
          and our planet. We are graduating at Digital Career Institute in
          February 2022 and this is our final project.
        </p>
        <p>
          If you’d like to take a look at what’s happening behind the scenes,
          check out our project repository on GitHub:{" "}
        </p>
        <a
          href="https://github.com/Trang217/Final-Project"
          target="_blank"
          rel="noreferrer"
        >
          <button>go to repo</button>
        </a>
      </div>
    </div>
  );
};
export default AboutUs;
