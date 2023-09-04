import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";
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
