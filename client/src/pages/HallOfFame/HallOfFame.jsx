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

  //? ---- API CONNECTION ----
  const getData = async () => {
    try {
      const response = await axios.get(`/api/users/hall-of-fame`);
      setLeague(response.data.users);
      setPlacement(response.data.placement);
      setCurrentUser(response.data.userName);
    } catch (error) {
      console.log(error);
    }
  };
  
  //? ---- event handlers ----
  
  //? ---- variables ----
  
    let rank = 1;
    for (let i = 0; i < league.length; i++) {
      if (i > 0 && league[i].totalScore < league[i - 1].totalScore) {
        rank++;
      }
      league[i].rank = rank;
    }
  
    const top3 = [];
    league.forEach((player) => {
      if (player.rank <= 3) {
        top3.push(player);
      }
    });
    
  useEffect(() => getData(), []);
 
  //? ---- rendering ----

  return (
    <div className="hallOfFame">
      <p>You are currently #{placement} in the league!</p>
      <p>
        {placement >= 3
          ? `Congratulations, ${currentUser}!`
          : placement >= 10
          ? `Wow, ${currentUser}, top 10, that's amazing!`
          : placement >= 20
          ? `That's a great score, ${currentUser}, keep it on!`
          : `Good job, ${currentUser}! Keep on learning`}
      </p>
      <div className="podium">
        <div className="medal">
          <h2>#1</h2>
          {top3.map((player, i) =>
            player.rank === 1 ? (
              <div className="card" key={i}>
                <p>{player.userName}</p>
                <p>score: {player.totalScore}</p>
              </div>
            ) : null
          )}
        </div>
        <div className="medal">
          <h2>#2</h2>
          {top3.map((player, i) =>
            player.rank === 2 ? (
              <div className="card" key={i}>
                <p>{player.userName}</p>
                <p>score: {player.totalScore}</p>
              </div>
            ) : null
          )}
        </div>
        <div className="medal">
          <h2>#3</h2>
          {top3.map((player, i) =>
            player.rank === 3 ? (
              <div className="player" key={i}>
                <p>{player.userName}</p>
                <p>score: {player.totalScore}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
export default HallOfFame;
