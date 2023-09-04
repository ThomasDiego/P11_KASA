import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./page.css";
function Page({ children }) {
  return (
    <>
      <div className="page">
        <>
          <Header />
        </>
        <>{children}</>
      </div>
      <>
        <Footer />
      </>
    </>
  );
}

export default Page;
