import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  @media (max-width: 768px) {
    height: 800px;
    width: 170px;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: ${(props) =>
      props.$isOpen ? "0 8px 10px -1px rgba(0, 0, 0, 0.3)" : "none"};
    background-color: ${(props) => (props.$isOpen ? "white" : "transparent")};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    gap: 15px;
    padding: 0;
  }
`;

export const MenuItem = styled.li`
  text-decoration: none;

  @media (max-width: 768px) {
    margin-left: 10px;
    padding-bottom: 10px;
    padding-right: 40px;
    border-bottom: 1px solid black;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 20px;

  span {
    display: block;
    height: 3px;
    width: 25px;
    background-color: ${(props) => (props.$isOpen ? "#333" : "#ccc")};
    margin-bottom: 5px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(45deg) translateY(11px)" : "rotate(0)"};
  }

  span:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg) translateY(-11px)" : "rotate(0)"};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.$visible ? "#5c768d" : "white")};

  &:hover {
    color: ${(props) => (props.$visible ? "#334B48" : "#334B48")};
    font-weight: 900;
  }

  &.active {
    color: ${(props) => (props.$visible ? "#334B48" : "#334B48")};
    font-weight: 900;
  }

  @media (max-width: 768px) {
    color: #283642;
    font-size: 12px;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.$visible ? "#5c768d" : "white")};

  &:hover {
    color: ${(props) => (props.$visible ? "#334B48" : "#334B48")};
    font-weight: 900;
  }

  &.active {
    color: ${(props) => (props.$visible ? "#334B48" : "#334B48")};
    font-weight: 900;
  }

  @media (max-width: 768px) {
    color: #283642;
    font-size: 12px;
  }
`;

export const HeaderContainer = styled.div`
  background-color: ${(props) => (props.$visible ? "white" : "transparent")};
  box-shadow: ${(props) => (props.$visible ? "0 6px 10px -2px rgb(0 0 0 / 30%)" : "")};
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 9999;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    background-color: ${(props) => (!props.$isOpen && props.$visible ? "white" : "transparent")};
    box-shadow: ${(props) => (!props.$isOpen && props.$visible ? "0 6px 10px -2px rgb(0 0 0 / 30%)" : "0 0 0 0")};
  }
`;

export const InnerHeader = styled.div`
  max-width: 1140px;
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 44px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileLogoContainer = styled.span`
  display: inline-block;
`;

export const MobileLogo = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    width: 93px;
    margin-left: 8px;
  }
`;
