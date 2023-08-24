import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import Tag from "../components/tag";
import Host from "../components/host";
import "../styles/room.css";
import Rating from "../components/rating";
import Carrousel from "../components/carrousel";
import Dropdown from "../components/dropdown";
function Rooms() {
  const { id } = useParams();
  let [roomInfos, setRoomInfos] = useState([]);

  useEffect(() => {
    fetch("/datas/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const room = data.find((room) => room.id === id);
        if (room === undefined) return (window.location.href = "/404");
        setRoomInfos(room);
      });
  }, [id]);
  return (
    <>
      {/* Carrousel */}
      <Carrousel pictures={roomInfos.pictures}></Carrousel>
      {/* Fin carrousel */}
      {/* Logements détails */}
      <div className="roomDetails">
        <div className="roomDetailsLeft">
          <h1 className="roomTitle">{roomInfos.title}</h1>
          <div className="roomLocation">{roomInfos.location}</div>
          <div className="tags">
            {roomInfos.tags?.map((tag) => {
              return <Tag text={tag} key={tag} />;
            })}
          </div>
        </div>
        <div className="roomDetailsRight">
          <Host name={roomInfos.host?.name} photo={roomInfos.host?.picture} />
          <Rating note={roomInfos.rating} />
        </div>
      </div>
      {/* Fin Logement détails */}
      {/* Logement dropdown */}
      <div className="roomDropdown">
        <Dropdown
          state={true}
          title={"Description"}
          content={roomInfos.description}
        />
        <Dropdown
          state={true}
          title={"Équipements"}
          content={roomInfos.equipments?.map((equipment) => {
            return <li>{equipment}</li>;
          })}
        />
      </div>
      {/* Fin logement dropdown */}
    </>
  );
}

export default Rooms;
