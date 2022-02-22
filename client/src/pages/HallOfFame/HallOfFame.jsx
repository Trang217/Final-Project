// ---- hooks, dependencies, styling import ----
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";

// ---- COMPONENT ----

const HallOfFame = () => {
  //? ---- hooks ----

  const [league, setLeague] = useState([]);
  const [placement, setPlacement] = useState("");
  const [score, setScore] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  //? ---- API CONNECTION ----
  const getData = async () => {
    try {
      const response = await axios.get(`/api/users/hall-of-fame`);
      setLeague(response.data.users);
      setPlacement(response.data.placement);
      setCurrentUser(response.data.userName);
      setScore(response.data.score.totalScore);
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  //? ---- variables ----
  //add a rank to each player
  let rank = 1;
  for (let i = 0; i < league.length; i++) {
    if (i > 0 && league[i].totalScore < league[i - 1].totalScore) {
      rank++;
    }
    league[i].rank = rank;
  }
  // create top 3 arrays
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

  // establish if current user on podium
  const findMe = (array) =>
    array.findIndex((player) => player.userName === currentUser);

  const isTop1 = findMe(rank1);
  const isTop2 = findMe(rank2);
  const isTop3 = findMe(rank3);

  // randomly select a user to be displayed if more than 1
  const randomUser = (array) => array[Math.floor(Math.random() * array.length)];

  const random1 = randomUser(rank1);
  const random2 = randomUser(rank2);
  const random3 = randomUser(rank3);

console.log(score);
  useEffect(() => getData(), []);

  //? ---- rendering ----

  return (
    <div className="hallOfFame">
      {hasLoaded ? (
        <>
          <h1>Hall of Fame</h1>
          {placement >= 0 ? (
            <p>You are currently #{placement} in the league with {score} points!</p>
          ) : null}{" "}
          <p>
            {placement >= 0 && placement <= 3
              ? `Congratulations, ${currentUser}! You're a champion!`
              : placement >= 0 && placement <= 10
              ? `Wow, ${currentUser}, you're in the top 10, that's amazing!`
              : placement >= 0 && placement <= 20
              ? `That's a great score, ${currentUser}, keep it on!`
              : placement >= 0
              ? `Good job, ${currentUser}! Keep on learning!`
              : null}
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
