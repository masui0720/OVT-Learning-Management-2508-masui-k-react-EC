import "./Modal.scss";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function MenuModal({ isOpen, onClose }: Props) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    onClose();
    navigate("/login");
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalList">
          <Link to="/mypage">マイページ</Link>

          {isLoggedIn ? (
            <Link to="/login"
              onClick={() => {
                localStorage.removeItem("token");
                onClose();
              }}>
              ログアウト
            </Link>
          ) : (
            <Link to="/login">ログイン</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuModal;