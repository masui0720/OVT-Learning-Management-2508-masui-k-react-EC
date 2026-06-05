import "./Header.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

function Header() {
  const [anchorEl, setAnchorEl] =
    useState<HTMLElement | null>(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">
          LH-EC-SHOP
        </h1>

        <HeaderIcons
          onMenuClick={handleOpen}
        />
      </header>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
}

export default Header;