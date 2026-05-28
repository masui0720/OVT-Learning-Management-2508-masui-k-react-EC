import "./TopPage.scss";
import Header from "../../components//Header/Header";
import Footer from "../../components/Footer/Footer";

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