import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "../../contexts/AuthContext/AuthContext";

// Import Protected & Public Routes
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

//* Nav/Sidebar
import Sidebar from "../Navigation/Sidebar";

//* Public Routes
import Landing from "../../pages/Landing/Landing";
import LoginAndRegistration from "../../pages/LoginAndRegistration/LoginAndRegistration";
import NotFound from "../../pages/NotFound/NotFound";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ForgetPassword from "../../pages/ForgetAndResetPassword/ForgetPassword";
import ResetPassword from "../../pages/ForgetAndResetPassword/ResetPassword";

//* Protected Routes
// Pages
import AccountDetails from "../../pages/AccountDetails/AccountDetails";
import Home from "../../pages/Home/Home";
import MyBadges from "../../pages/MyBadges/MyBadges";
import HallOfFame from "../../pages/HallOfFame/HallOfFame";

// Games
import GameDesert from "../../pages/Game/GameDesert";
import GameRainforest from "../../pages/Game/placeholders/GameRainforest";

// Quizzes
import Quiz from "../../pages/Quiz/Quiz";

export default function MainRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Sidebar />
        <main className="backgroundContainer">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<AboutUs />} />

            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Landing />} />
              <Route path="login" element={<LoginAndRegistration />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              {/* PAGES */}
              <Route path="account" element={<AccountDetails />} />
              <Route path="badges" element={<MyBadges />} />
              <Route path="home" element={<Home />} />
              <Route path="hall-of-fame" element={<HallOfFame />} />

              {/* GAMES */}
              <Route path="desert" element={<GameDesert />} />
              <Route path="rainforest" element={<GameRainforest />} />

              {/* QUIZZES */}
              <Route path="quiz/desert" element={<Quiz biomeName="Desert" />} />
              <Route
                path="quiz/rainforest"
                element={<Quiz biomeName="Rainforest" />}
              />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
