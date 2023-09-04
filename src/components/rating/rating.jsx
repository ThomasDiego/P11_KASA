import { useEffect, useState } from "react";
import "./rating.css";
import RedStar from "../../assets/red_star.png";
import GreyStar from "../../assets/grey_star.png";

function Rating({ note }) {
  let [noStars, setNoStars] = useState(5);
  useEffect(() => {
    setNoStars(5 - note);
  }, [note]);
  return (
    <>
      <div className="rating">
        {Array.apply(null, { length: note }).map((e, i) => (
          <div
            className="stars"
            key={i}
            style={{ backgroundImage: `url(${RedStar})` }}
          ></div>
        ))}
        {Array.apply(null, { length: noStars }).map((e, i) => (
          <div
            className="stars"
            key={i}
            style={{ backgroundImage: `url(${GreyStar})` }}
          ></div>
        ))}
      </div>
    </>
  );
}
export default Rating;
