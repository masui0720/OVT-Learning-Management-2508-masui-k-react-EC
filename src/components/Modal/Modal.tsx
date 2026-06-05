import "./Modal.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
};

function Modal({
  isOpen,
  onClose,
  anchorEl,
}: Props) {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const isLoggedIn = !!token;

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
    >
      <MenuItem
        component={Link}
        to="/mypage"
        onClick={onClose}
      >
        マイページ
      </MenuItem>

      {isLoggedIn ? (
        <MenuItem
          component={Link}
          to="/login"
          onClick={handleLogout}
        >
          ログアウト
        </MenuItem>
      ) : (
        <MenuItem
          component={Link}
          to="/login"
          onClick={onClose}
        >
          ログイン
        </MenuItem>
      )}
    </Menu>
  );
}

export default Modal;