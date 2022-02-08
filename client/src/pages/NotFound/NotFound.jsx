// ---- hooks, dependencies, styling import ----
import "./notFound.scss";
import { useNavigate } from "react-router-dom";

// ---- COMPONENT ----

const NotFound = () => {
  //? ---- hooks ----
  const navigate = useNavigate();
  //? ---- event handlers ----

  const handleHome = () => {
    navigate("/");
  };
  //? ---- variables ----

  //? ---- rendering ----
  return (
    <div className="notFound">
      <div>
        <h2>404 Page Not Found</h2>
        <p>Whoops! Looks like we wandered off.</p>
        <button onClick={handleHome}>Take me back to Home Page</button>
      </div>
    </div>
  );
};
export default NotFound;
