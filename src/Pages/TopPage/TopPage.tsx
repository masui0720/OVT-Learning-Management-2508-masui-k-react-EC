import "./TopPage.scss";
import Header from "../../components//Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Card,CardContent,Typography,Box,} from "@mui/material";

function TopPage() {

  const navigate = useNavigate();

  return (
    <div className="topPage">
      <Header />

      <div className="topPageContent">

      <h1 className="welcomeTitle">LH-EC-SHOPへようこそ！</h1>

      <p className="productTitle">商品一覧</p>


      <Card
          className="productCard" onClick={() => navigate("/product-detail")}>
          <Box className="imageBox">画像</Box>
          
          <CardContent>
            <Typography>商品名</Typography>
            <Typography>¥1000</Typography>
          </CardContent>

        </Card> 
    </div>
    
    <Footer />
    </div>
  );
}

export default TopPage;