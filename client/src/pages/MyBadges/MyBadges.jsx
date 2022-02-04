// ---- hooks, dependencies, styling import ----
import { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";

// ---- components ----
import Badge from "../../components/Badge";

// ---- COMPONENT ----

const MyBadges = () => {
  //? ---- hooks ----
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/badges");
        setBadges(res.data.badges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //? ---- rendering ----
  return (
    <div className="myBadges">
      <div>Hello!</div>
      <p>
        See all the chapters change as you explore the ecosystems! Help the
        scientist finish his book before he wakes up!
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
