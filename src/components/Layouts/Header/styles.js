import styled from "styled-components";
import mobile from "../../../assets/styles/size";
import Button from "../../Button/Button";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  transition: 0.5s;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  z-index: 1;

  ${mobile.lg} {
    padding: 0px 30px;
  }
`;

export const Logo = styled.h1`
  display: flex;
  padding: 0px 60px;
  flex-direction: column;

  p {
    font-size: 25px;
  }

  ${mobile.lg} {
    padding: 0px;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
`;

export const ListsWrapper = styled.div`
  display: flex;
`;

export const NavbarMenu = styled.span`
  color: ${({ theme }) => theme.navbarMenu};
  font-size: 30px;
  display: none;
  ${mobile.sm} {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${mobile.sm} {
    display: ${({ navbarOpen }) => (navbarOpen ? `flex` : "none")};
    flex-direction: column;
    background-color: ${({ theme }) => theme.menu};
    text-align: center;
    width: 100%;
    height: 94vh;
    position: absolute;
    right: 0;
    left: 0;
    margin-top: 60px;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
`;

export const Link = styled.li`
  padding: 0px 14px;
  display: inline;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  &:hover {
    ${mobile} {
      display: block;
      transition: 0.3s ease;
    }
  }

  ${mobile.sm} {
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

export const DownloadButton = styled(Button)`
  width: 130px;
  height: 40px;
  margin: -10px 30px;
`;

export const ToggleButton = styled.button`
  width: 40px;
  border-radius: 50%;
  margin: -10px;
  color: ${({ theme }) => theme.button};
  background-color: inherit;
  cursor: pointer;
  ${mobile.lg} {
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border: 3px solid #f54748;
    font-size: 23px;
  }
`;
