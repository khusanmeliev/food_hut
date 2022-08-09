import styled from "styled-components";
import colors from "../../assets/styles/colors";
import mobile from "../../assets/styles/size";

export const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: ${colors.navbar};
  transition: 0.5s;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
  input {
    display: none;
  }
  label {
    display: none;
    font-size: 40px;
  }
  ${mobile.sm} {
    width: auto;
    input:checked ~ .menu {
      display: none;
    }
    label {
      display: block;
    }
  }
`;

export const Logo = styled.h1`
  width: fit-content;
  font-size: 28px;
  font-family: "Marcellus SC", serif;
  color: ${colors.text.black};
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
  }
  ${mobile.sm} {
    font-size: 24px;
    text-align: center;
  }
`;

export const List = styled.li`
  padding: 5px 14px;
  display: inline;
  cursor: pointer;
  color: ${colors.text.black};
  &:hover {
    transition: 0.3s ease;
    ${mobile} {
      display: block;
      transition: 0.3s ease;
    }
  }
  ${mobile.sm} {
    font-family: "Roboto Slab", serif;
    font-size: 18px;
    color: white;
  }
`;

export const MenuButton = styled.div`
  display: none;
  ${mobile.sm} {
    display: block;
    font-size: 40px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${mobile.sm} {
    display: ${({ navbarOpen }) => (navbarOpen ? `flex` : "none")};
    flex-direction: column;
    background-color: #191919;
    text-align: center;
    width: 100%;
    height: 94vh;
    position: absolute;
    right: 0;
    left: 0;
  }
`;

export const NavbarButton = styled.span`
  color: #191919;
  font-size: 30px;
  display: none;
  ${mobile.sm} {
    display: block;
  }
`;
