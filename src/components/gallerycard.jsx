import "../styles/gallerycard.css";
import { NavLink } from "react-router-dom";
function GalleryCard({ image, text, id }) {
  return (
    <>
      <NavLink
        to={`/rooms/${id}`}
        className="galleryCard"
        style={{
          backgroundImage: `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  ),url(${image})`,
        }}
      >
        <div className="galleryCardTitle">{text}</div>
      </NavLink>
    </>
  );
}

export default GalleryCard;
