// ---- hooks, dependencies, styling import ----
import aleksandra from "./images/aleksandra.jpeg";
import luisa from "./images/luisa.jpeg";
import patrick from "./images/patrick.jpeg";
import trang from "./images/trang.jpeg";

// ---- COMPONENT ----

const AboutUs = () => {
  //? ---- rendering ----
  return (
    <div className="about">
      <h2>About the project ...</h2>
      <p>
        This website is a final project for a Full Stack Web Development Course
        at Digital Career Institute. We hope you enjoy discovering some
        interesting facts about our planet’s astonishing landscapes, amazing
        wildlife, and diverse flora. At the end of each exploration you can do a
        fun little quiz to test your knowledge and collect some badges on your
        profile!
      </p>
      <h2>... and the team:</h2>
      <div className="imagesContainer">
        <img src={aleksandra} alt="Aleksandra Bury" />
        <img src={luisa} alt="Luisa-Lisanne Forck" />
        <img src={patrick} alt="Patrick Mohr" />
        <img src={trang} alt="Trang Nguyen" />
      </div>
      <p>
        We are a team of four full stack web developers - Aleksandra, Luisa,
        Patrick and Trang - who are passionate about coding, art, animation, and
        our planet. We graduate at DCI in February 2022.
      </p>
      <p>
        If you’d like to take a look at what’s happening behind the scenes,
        <br></br>
        check out our project repository on GitHub:{" "}
      </p>

      <button>
        <a
          href="https://github.com/Trang217/Final-Project"
          target="_blank"
          rel="noreferrer"
        >
          Take me to the repo
        </a>
      </button>
    </div>
  );
};
export default AboutUs;
