// ---- hooks, dependencies, styling import ----
import { useContext } from "react";
import { Outlet } from "react-router-dom";

// ---- components ----
import Home from "../../pages/Home/Home";

// ---- context import ----
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// ---- COMPONENT ----

const PublicRoutes = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? <Home /> : <Outlet />;
};

export default PublicRoutes;
