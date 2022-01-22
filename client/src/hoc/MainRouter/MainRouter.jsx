import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Routes
import Landing from "../../pages/Landing/Landing";
// import Login from "../../pages/Login/Login";
// import Register from "../../pages/Register/Register";
import NotFound from "../../pages/NotFound/NotFound";

//* Protected Routes
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/AboutUs/AboutUs";
import AccountDetails from "../../pages/AccountDetails/AccountDetails";
import MyBadges from "../../pages/MyBadges/MyBadges";
import Quiz from "../../pages/Quiz/Quiz";

//* Games
import GameDesert from "../../pages/Game/GameDesert";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="login" element={<Register />} /> */}

        <Route path="about" element={<AboutUs />} />
        <Route path="account" element={<AccountDetails />} />
        <Route path="game">
          <Route path="desert" element={<GameDesert />} />
          {/* <Route path="jungle" element={<GameJungle/>} */}
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="badges" element={<MyBadges />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="quiz" element={<Quiz />}>
          {/* <Route path="desert" element={<QuizDesert />} /> */}
          {/* <Route path="jungle" element={<QuizJungle />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
