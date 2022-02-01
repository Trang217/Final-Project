import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

// Context
import {
  AuthContext,
  AuthProvider,
} from "../../contexts/AuthContext/AuthContext";

// Import Protected Routes
import ProtectedRoutes from "./ProtectedRoutes";

//* Nav/Sidebar
import Sidebar from "../Navigation/Sidebar";

//* Unprotected Routes
import Landing from "../../pages/Landing/Landing";
import LoginAndRegistration from "../../pages/LoginAndRegistration/LoginAndRegistration";
import NotFound from "../../pages/NotFound/NotFound";
import AboutUs from "../../pages/AboutUs/AboutUs";

//* Protected Routes
// Pages
import AccountDetails from "../../pages/AccountDetails/AccountDetails";
import Home from "../../pages/Home/Home";
import MyBadges from "../../pages/MyBadges/MyBadges";

// Games
import GameDesert from "../../pages/Game/GameDesert";

// Quizzes
import Quiz from "../../pages/Quiz/Quiz";

export default function MainRouter() {
  //? ---- variables ----
  //const { loggedIn } = useContext(AuthContext);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<LoginAndRegistration />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<AboutUs />} />

            {/* ---Protected Routes--- */}
            <Route element={<ProtectedRoutes />}>
              <Route path="account" element={<AccountDetails />} />
              <Route path="badges" element={<MyBadges />} />
              <Route path="home" element={<Home />} />
              <Route path="desert" element={<GameDesert />} />
              <Route path="quiz" element={<Quiz />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
