import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
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
      <p>ID: {roomInfos.id}</p>
      <p>Titre: {roomInfos.title}</p>
      <p>Host: {roomInfos.host?.name}</p>
      <img src={roomInfos.host?.picture} alt={roomInfos.title} />
      <p>Note: {roomInfos.rating}/5</p>
      <p>Location: {roomInfos.location}</p>
    </>
  );
}

export default Rooms;
