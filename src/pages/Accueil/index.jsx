import Banner from "../../components/banner";
import BannerImage from "../../assets/home_bg.png";
import "./style.css";
import GalleryCard from "../../components/gallerycard";
import { useEffect, useState } from "react";
function Accueil() {
  const [data, setData] = useState([]);
  //fetch /datas/logements.json
  useEffect(() => {
    fetch("/datas/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <Banner image={BannerImage} text={"Chez vous, partout et ailleurs"} />
      <div className="gallery">
        {data.map((logement) => {
          return (
            <GalleryCard
              text={logement.title}
              image={logement.cover}
              id={logement.id}
              key={logement.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Accueil;
