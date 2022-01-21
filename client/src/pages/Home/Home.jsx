// ---- hooks, dependencies, styling import ----

// ---- components ----

import AnimalBubble from "../../components/AnimalBubble";

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const Home = () => {
  //? ---- hooks ----

  //? ---- event handlers ----
  //onClick={() => history.push(`/${basePath}/${id}`)}

  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div>
      <AnimalBubble name="rainforest" doesNavigate="true"/>
      <AnimalBubble name="desert" doesNavigate="true"/>
      <AnimalBubble name="ocean" doesNavigate="true"/>
    </div>
  );
};
export default Home;
