import "../styles/footer.css";
import LogoFooter from "../assets/logo_footer.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <img className="footerLogo" src={LogoFooter} alt="Logo KASA" />
        <div className="footerText">© 2023 Kasa. All rights reserved</div>
      </div>
    </>
  );
}

export default Footer;
