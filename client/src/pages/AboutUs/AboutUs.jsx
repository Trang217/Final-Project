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
    <div className="container mx-auto text-center">
      <h1>About Us</h1>
      <h2>Why did we make it?</h2>
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
      <div className="flex justify-center">
        <img
          src={aleksandra}
          alt="Aleksandra Bury"
          className="w-40 h-40 rounded-full  m-3"
        />
        <img
          src={luisa}
          alt="Luisa-Lisanne Forck"
          className="w-40 h-40 rounded-full m-3"
        />
        <img
          src={patrick}
          alt="Patrick Mohr"
          className="w-40 h-40 rounded-full m-3"
        />
        <img
          src={trang}
          alt="Trang Nguyen"
          className="w-40 h-40 rounded-full m-3"
        />
      </div>
      <p>
        We are a team of four full stack web developers - Aleksandra, Luisa,
        Patrick and Trang - who are passionate about coding, art, animation, and
        our planet.
      </p>
      <p>
        If you’d like to take a look at what’s happening behind the scenes: This
        is our project repository on GitHub:{" "}
      </p>
      <a
        href="https://github.com/Trang217/Final-Project"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        go to repo
      </a>
    </div>
  );
};
export default AboutUs;
