import aleksandra from "./images/aleksandra.jpeg";
import luisa from "./images/luisa.jpeg";
import patrick from "./images/patrick.jpeg";
import trang from "./images/trang.jpeg";



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
    <div>
      <h1>About Us</h1>
      <h2>Why did we make it</h2>
      <p>
        We created this website to offer you a fun experience while exploring
        different ecosystems/biomes and learn about their uniqueness and
        relevance in a playful way. We hope you enjoy discovering some
        interesting facts about our planet’s astonishing landscapes, amazing
        wildlife, and diverse flora. At the end of each exploration you can do a
        fun little quiz to test your knowledge and collect some badges on your
        profile!
      </p>
      <h2>Who made it?</h2>
      <div>
        <img src={aleksandra} alt="" width="250px" />
        <img src={luisa} alt="" width="250px"/>
        <img src={patrick} alt="" width="250px"/>
        <img src={trang} alt="" width="250px"/>
      </div>
      <p>
        We are a team of four full stack web developers - Aleksandra, Luisa,
        Patrick and Trang - who are passionate about coding, art, animation, and
        our planet.
      </p>
      <p>
        If you’d like to take a look at what’s happening behind the scenes: This
        is our project repository on GitHub: <a href="https://github.com/Trang217/Final-Project">https://github.com/Trang217/Final-Project</a>
      </p>
    </div>
  );
};
export default AboutUs;
