import "./style.css";

function Banner({ image, text }) {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${image})`,
        }}
      >
        {text}
      </div>
    </>
  );
}
export default Banner;
