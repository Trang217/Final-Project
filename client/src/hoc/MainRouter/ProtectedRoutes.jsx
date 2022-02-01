import React from "react";
import { Outlet } from "react-router-dom";
import LoginAndRegistration from "../../pages/LoginAndRegistration/LoginAndRegistration";

//! This would use AuthContext to check if user is properly authenticated
const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginAndRegistration />;
};

export default ProtectedRoutes;
