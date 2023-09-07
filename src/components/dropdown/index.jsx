import { useState } from "react";
import "./style.css";
import dropdownIcon from "../../assets/arrow_collapse.png";
function Dropdown({ title, content, state }) {
  let [dropdownState, setDropdownState] = useState(state);

  //Ici on inverse l'état du dropdown
  function toggleDropdown() {
    setDropdownState(!dropdownState);
  }
  return (
    <div className="dropdown">
      <div className="dropdownTitle" onClick={toggleDropdown}>
        <div className="dropdownTitleText">{title}</div>
        {dropdownState ? (
          <>
            <div
              className="dropdownTitleIcon"
              style={{ backgroundImage: `url(${dropdownIcon})` }}
            ></div>
          </>
        ) : (
          <>
            <div
              className="dropdownTitleIcon reverse"
              style={{ backgroundImage: `url(${dropdownIcon})` }}
            ></div>
          </>
        )}
      </div>
      {dropdownState ? <div className="dropdownContent">{content}</div> : <></>}
    </div>
  );
}
export default Dropdown;
