// ---- hooks, dependencies, styling import ----
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";
// ---- components ----

// ---- COMPONENT ----

const HallOfFame = () => {
  //? ---- hooks ----

  const [league, setLeague] = useState([]);
  const [placement, setPlacement] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  //? ---- API CONNECTION ----
  const getData = async () => {
    try {
      const response = await axios.get(`/api/users/hall-of-fame`);
      setLeague(response.data.users);
      setPlacement(response.data.placement);
      setCurrentUser(response.data.userName);
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  //? ---- event handlers ----

  //? ---- variables ----
  //add a rank to each player
  let rank = 1;
  for (let i = 0; i < league.length; i++) {
    if (i > 0 && league[i].totalScore < league[i - 1].totalScore) {
      rank++;
    }
    league[i].rank = rank;
  }

  const rank1 = [];
  league.forEach((player) => {
    if (player.rank === 1) {
      rank1.push(player);
    }
  });
  const rank2 = [];
  league.forEach((player) => {
    if (player.rank === 2) {
      rank2.push(player);
    }
  });
  const rank3 = [];
  league.forEach((player) => {
    if (player.rank === 3) {
      rank3.push(player);
    }
  });

  const isTop3 = rank3.findIndex((player) => player.userName === currentUser);
  const isTop2 = rank2.findIndex((player) => player.userName === currentUser);
  const isTop1 = rank1.findIndex((player) => player.userName === currentUser);

  const random1 = rank1[Math.floor(Math.random() * rank1.length)];
  const random2 = rank2[Math.floor(Math.random() * rank2.length)];
  const random3 = rank3[Math.floor(Math.random() * rank3.length)];

  useEffect(() => getData(), []);

  //? ---- rendering ----

  return (
    <div className="hallOfFame">
      {hasLoaded ? (
        <>
          <h1>Hall of Fame</h1>
          <p>You are currently #{placement} in the league!</p>
          <p>
            {placement <= 3
              ? `Congratulations, ${currentUser}! You're a champion!`
              : placement <= 10
              ? `Wow, ${currentUser}, top 10, that's amazing!`
              : placement <= 20
              ? `That's a great score, ${currentUser}, keep it on!`
              : `Good job, ${currentUser}! Keep on learning`}
          </p>
          <div className="podium">
            <div className="medal">
              <h2>2</h2>
              {isTop2 === -1 ? (
                <div className="card">
                  <p>score: {random2.totalScore}</p>
                  <p className="name">{random2.userName}</p>
                </div>
              ) : (
                <div className="card">
                  <p>{rank3[isTop2].userName}</p>
                  <p>score: {rank3[isTop2].totalScore}</p>
                </div>
              )}
              {rank2.length > 1 ? (
                <p>... and {rank2.length - 1} other user(s) </p>
              ) : null}
            </div>
            <div className="medal">
              <h2>1</h2>
              {isTop1 === -1 ? (
                <div className="card">
                  <p>score: {random1.totalScore}</p>
                  <p className="name">{random1.userName}</p>
                </div>
              ) : (
                <div className="card">
                  <p>score: {rank1[isTop1].totalScore}</p>
                  <p>{rank1[isTop1].userName}</p>
                </div>
              )}
              {rank1.length > 1 ? (
                <p>... and {rank1.length - 1} other user(s) </p>
              ) : null}
            </div>

            <div className="medal">
              <h2>3</h2>
              {isTop3 === -1 ? (
                <div className="card">
                  <p>score: {random3.totalScore}</p>
                  <p className="name">{random3.userName}</p>
                </div>
              ) : (
                <div className="card">
                  <p>{rank3[isTop3].userName}</p>
                  <p>score: {rank3[isTop3].totalScore}</p>
                </div>
              )}
              {rank3.length > 1 ? (
                <p>... and {rank3.length - 1} other user(s) </p>
              ) : null}
            </div>
          </div>{" "}
        </>
      ) : null}
    </div>
  );
};
export default HallOfFame;
