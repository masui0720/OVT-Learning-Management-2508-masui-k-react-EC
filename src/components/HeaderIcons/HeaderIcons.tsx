import "./HeaderIcons.scss";
import { Link } from "react-router-dom";

type Props = {
  onMenuClick: (
    event: React.MouseEvent<HTMLElement>
  ) => void;
};

function HeaderIcons({ onMenuClick }: Props) {
  return (
    <div className="headerIcons">
      <Link to="/cart">
        <img
          src="/cart.svg"
          alt="cart"
          className="cartIcon"
        />
      </Link>

      <button
        type="button"
        className="menuButton"
        onClick={onMenuClick}
      >
        <img
          src="/user-icon.svg"
          alt="menu"
          className="menuIcon"
        />
      </button>
    </div>
  );
}

export default HeaderIcons;