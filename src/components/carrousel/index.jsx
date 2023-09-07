import "./style.css";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right.svg";
import React, { useEffect } from "react";

function Carrousel({ pictures }) {
  let [currentPicture, setCurrentPicture] = React.useState(0);
  let [pictureCount, setPictureCount] = React.useState(0);

  function nextPicture(value) {
    // si la valeur est négative et que l'index est à 0, on passe à la dernière image
    if (currentPicture + value < 0) {
      setCurrentPicture(pictures.length - 1);
      // si la valeur est positive et que l'index est à la dernière image, on passe à la première image
    } else if (currentPicture + value > pictures.length - 1) {
      setCurrentPicture(0);
      // sinon on passe à l'image suivante
    } else {
      setCurrentPicture(currentPicture + value);
    }
  }
  useEffect(() => {
    setPictureCount(pictures?.length);
  }, [pictures]);
  return (
    <>
      {pictures?.map((picture, index) => (
        <div key={index}>
          {currentPicture === index && (
            <div
              className="carrousel"
              style={{ backgroundImage: `url(${picture})` }}
            >
              <div className="carrouselArrows">
                {pictures.length > 1 && (
                  <div
                    className="carrouselArrowLeft"
                    onClick={() => nextPicture(-1)}
                    style={{ backgroundImage: `url(${ArrowLeft})` }}
                  ></div>
                )}
                {pictures.length > 1 && (
                  <div
                    className="carrouselArrowRight"
                    onClick={() => nextPicture(1)}
                    style={{ backgroundImage: `url(${ArrowRight})` }}
                  ></div>
                )}
              </div>
              {pictures.length > 1 && (
                <div className="carrouselPictureCount">
                  {currentPicture + 1}/{pictureCount}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default Carrousel;
