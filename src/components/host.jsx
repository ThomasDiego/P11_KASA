import { useEffect, useState } from "react";
import "../styles/host.css";
function Host({ name, photo }) {
  let [hostLastName, setHostLastName] = useState("");
  let [hostFirstName, setHostFirstName] = useState("");

  useEffect(() => {
    if (name !== undefined) {
      let hostName = name.split(" ");
      setHostLastName(hostName[0]);
      setHostFirstName(hostName[1]);
    }
  }, [name]);
  return (
    <>
      <div className="hostDetails">
        <div className="hostName">
          <div className="hostFirstName">{hostFirstName}</div>
          <div className="hostLastName">{hostLastName}</div>
        </div>
        <div className="hostPhoto">
          <img className="hostPhotoImg" src={photo} alt={name} />
        </div>
      </div>
    </>
  );
}
export default Host;
