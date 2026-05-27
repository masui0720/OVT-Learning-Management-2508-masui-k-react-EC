import "./Header.scss";
import { useState } from "react";
import MenuModal from "../Modal/Modal";
import { Link } from "react-router-dom";
import HeaderIcons from "../../molecules/HeaderIcons/HeaderIcons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="logo">LH-EC-SHOP</h1>

        <HeaderIcons />

        <button
          className="menuButton"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src="/user-icon.svg"
            alt="menu"
            className="menuIcon"
          />
        </button>
      </header>

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Header;