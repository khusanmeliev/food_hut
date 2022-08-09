import React, { useRef, useState } from "react";
import { List, Logo, Menu, NavbarButton, NavbarWrapper } from "./Navbar.style";
import { AiOutlineMenu } from "react-icons/ai";
import Flexbox from "../../components/Flexbox/Flexbox";
import Button from "../../components/Button/Button";

const Navbar = () => {
  const navbar = useRef(null);
  let prevScrollpos = window.pageYOffset;
  const [navbarOpen, setNavbarOpen] = useState(false);

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = "0";
    } else {
      navbar.current.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <NavbarWrapper ref={navbar}>
      <Logo>Food Hut</Logo>
      <Flexbox flexDirection="row">
        <ul>
          <NavbarButton onClick={() => setNavbarOpen(!navbarOpen)}>
            <AiOutlineMenu />
          </NavbarButton>
          <Menu navbarOpen={navbarOpen}>
            <a href="#home" onClick={handleCloseNavbar}>
              <List>Today Special Offers</List>
            </a>
            <a href="#about" onClick={handleCloseNavbar}>
              <List>Why FoodHut</List>
            </a>
            <a href="#advantages" onClick={handleCloseNavbar}>
              <List>Our Menu</List>
            </a>
            <a href="#lessons" onClick={handleCloseNavbar}>
              <List>Our Popular Food</List>
            </a>
          </Menu>
        </ul>
      </Flexbox>
    </NavbarWrapper>
  );
};

export default Navbar;