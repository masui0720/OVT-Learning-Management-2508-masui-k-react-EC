import "./TopPage.scss";
import Header from "../../Components/Organisms/Header/Header";
import Footer from "../../Components/Organisms/Footer/Footer";

function TopPage() {
  return (
    <div className="topPage">
      <Header />
      <h1>トップページ</h1>

      <Footer />
    </div>
  );
}

export default TopPage;