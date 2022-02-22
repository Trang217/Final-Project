// ---- hooks, dependencies, styling import ----
import { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import capitalize from "../../utils/capitalize.jsx";

// ---- components ----
import Badge from "./Badge";

// ---- COMPONENT ----

const MyBadges = () => {
  //? ---- hooks ----
  const [badges, setBadges] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/badges");
        setBadges(res.data.badges);
        setUserName(res.data.userName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //? ---- rendering ----
  return (
    <div className="myBadges">
      <div className="greeting">Hello {capitalize(userName)}!</div>
      <p>
        See all the chapters change as you explore the ecosystems! <br></br>{" "}
        Help the scientist finish his book before he wakes up!
      </p>
      <div className="allBadges">
        {badges.map((badge, i) => (
          <Badge key={i} badge={badge} />
        ))}
      </div>
    </div>
  );
};
export default MyBadges;
