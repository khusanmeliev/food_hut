import React, { useContext, useRef, useState } from "react";
import {
  DownloadButton,
  HeaderLink,
  Link,
  ListsWrapper,
  Logo,
  LogoImage,
  Menu,
  NavbarMenu,
  NavbarWrapper,
  ToggleButton,
} from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../../App";
import Text from "../../Text/Text";

const Header = () => {
  const navbar = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <NavbarWrapper ref={navbar}>
      <Logo>
        <LogoImage src={logo} alt="logo" />
        <Text>Food Hut</Text>
      </Logo>
      <ListsWrapper>
        <NavbarMenu onClick={() => setNavbarOpen(!navbarOpen)}>
          <AiOutlineMenu />
        </NavbarMenu>
        <Menu navbarOpen={navbarOpen}>
          <HeaderLink href="#offers" onClick={handleCloseNavbar}>
            <Link>Today Special Offers</Link>
          </HeaderLink>
          <HeaderLink href="#whyfoodhut" onClick={handleCloseNavbar}>
            <Link>Why FoodHut</Link>
          </HeaderLink>
          <HeaderLink href="#menu" onClick={handleCloseNavbar}>
            <Link>Our Menu</Link>
          </HeaderLink>
          <HeaderLink href="#food" onClick={handleCloseNavbar}>
            <Link>Our Popular Food</Link>
          </HeaderLink>
          <HeaderLink href="#download">
            <DownloadButton>Download App</DownloadButton>
          </HeaderLink>
          <ToggleButton onClick={toggleTheme}>
            {theme === "light" ? (
              <FaSun style={{ color: "yellow" }} />
            ) : (
              <FaMoon />
            )}
          </ToggleButton>
        </Menu>
      </ListsWrapper>
    </NavbarWrapper>
  );
};

export default Header;
