import { useNavigate } from "react-router-dom";
import "./rainforest.scss";

function GameRainforest() {
  //? ---- hooks ----
  const navigate = useNavigate();

  //? ---- event handlers ----
  const handleHome = () => {
    navigate("/home");
  };

  //? ---- rendering ----
  return (
    <div className="placeholder">
      <h1>Coming soon ...</h1>
      <button onClick={handleHome}>Take me back home</button>
    </div>
  );
}

export default GameRainforest;
