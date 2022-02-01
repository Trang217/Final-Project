// ---- hooks, dependencies, styling import ----
import { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";

// ---- components ----
import Badge from "../../components/Badge";

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const MyBadges = () => {
  //? ---- hooks ----
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/badges");
        setBadges(res.data.badges);
        console.log(res.data.badges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //? ---- variables ----

  //destructure USER object from DB -> name + Badges

  // const { badges } = data; // Badges Objects from USER DB
  // console.log(badges);

  //? ---- rendering ----
  return (
    <div>
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
