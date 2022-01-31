// ---- hooks, dependencies, styling import ----
import "./dummy.scss";
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
    <div className="h-screen bg-image flex flex-col justify-center items-center">
      <div className="w-38 text-3xl text-center text-stone-50">
        <h2 className="text-5xl m-5">404 Page Not Found</h2>
        <p>Whoops! Looks like we wandered off.</p>
      </div>
      <button
        className="tracking-wide mt-6 border-2 border-neutral-100 text-neutral-100 rounded-2xl px-8 py-1.5 inline-block font-semibold hover:bg-cyan-500 hover:border-cyan-500"
        onClick={handleHome}
      >
        Take me back to Home Page
      </button>
    </div>
  );
};
export default NotFound;
