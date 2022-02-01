import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import LoginAndRegistration from "../../pages/LoginAndRegistration/LoginAndRegistration";

const ProtectedRoutes = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? <Outlet /> : <LoginAndRegistration />;
};

export default ProtectedRoutes;
