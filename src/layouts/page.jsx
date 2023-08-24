import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/page.css";
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
