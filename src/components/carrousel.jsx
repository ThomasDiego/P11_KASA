import "../styles/carrousel.css";
import ArrowLeft from "../assets/arrow_left.svg";
import ArrowRight from "../assets/arrow_right.svg";
import React, { useEffect } from "react";

function Carrousel({ pictures }) {
  let [currentPicture, setCurrentPicture] = React.useState(0);
  let [pictureCount, setPictureCount] = React.useState(0);

  function nextPicture(value) {
    if (currentPicture + value < 0) {
      setCurrentPicture(pictures.length - 1);
    } else if (currentPicture + value > pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + value);
    }
  }
  useEffect(() => {
    console.log(pictures?.[0]);
    setPictureCount(pictures?.length);
  }, [pictures]);
  return (
    <>
      {pictures?.map((picture, index) => (
        <>
          {currentPicture === index && (
            <div
              className="carrousel"
              style={{ backgroundImage: `url(${picture})` }}
            >
              <div className="carrouselArrows">
                <div
                  className="carrouselArrowLeft"
                  onClick={() => nextPicture(-1)}
                  style={{ backgroundImage: `url(${ArrowLeft})` }}
                ></div>
                <div
                  className="carrouselArrowRight"
                  onClick={() => nextPicture(1)}
                  style={{ backgroundImage: `url(${ArrowRight})` }}
                ></div>
              </div>
              <div className="carrouselPictureCount">
                {currentPicture + 1}/{pictureCount}
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}
export default Carrousel;
