import "./Header.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1 className="logo">LH-EC-SHOP</h1>

        <HeaderIcons 
          onMenuClick={() => setIsOpen((prev) => !prev)}/>
      </header>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Header;