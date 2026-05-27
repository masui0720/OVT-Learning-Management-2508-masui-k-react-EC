import "./HeaderIcons.scss";
import { Link } from "react-router-dom";


function HeaderIcons() {
  return (
    <div className="headerIcons">
      <Link to="/mypage">
        <img src="/user-icon.svg" alt="user" />
      </Link>

      <Link to="/cart">
        <img src="/cart.svg" style={{width:"60px"}} alt="cart" />
      </Link>
    </div>
  );
}

export default HeaderIcons;