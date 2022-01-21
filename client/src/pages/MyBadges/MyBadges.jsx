// ---- hooks, dependencies, styling import ----

// ---- components ----
import Badge from "../../components/Badge";

// ---- context import ----

// ---- data ----

import user from './data.json'

// ---- COMPONENT ----

const MyBadges = () => {
  //? ---- hooks ----

  //? ---- event handlers ----

  //? ---- variables ----
  
  //destructure USER object from DB -> name + Badges


  const {firstName, badges} =  user // Badges Objects from USER DB 

//const badgess = []

  //? ---- rendering ----
  return <div>

    <div>Hello, {firstName}!</div>
    <p>See all the chapters change as you explore the ecosystems! Help the scientist finish his book before he wakes up!</p>
    <div className="allBadges">
      {badges.map((badge, i) => <Badge key={i} badge={badge}/>)}
    </div>
  </div>;
};
export default MyBadges ;