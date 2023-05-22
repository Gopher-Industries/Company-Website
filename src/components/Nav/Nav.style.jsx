import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  @media (max-width: 768px) {
    height: ${(props) =>
            props.$isOpen ? "100vh" : "50px"};
    width: 100%;
    flex-direction: column;
    box-shadow: ${(props) =>
      props.$isOpen ? "0 8px 10px -1px rgba(0, 0, 0, 0.3)" : "none"};
    background-color: ${(props) => (props.$isOpen ? "white" : "transparent")};
    transition: background-color 0.2s ease-in-out;
  }
`;

// ADDED | "padding-right: 25px;"
// ADDED | "align-items: right;"
export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 30px;
    padding: 0;
    padding-top: 75px;
    width:80%;
    margin:0 auto;
  }
`;

export const NavListItem = styled.li`
  text-decoration: none;

  @media (max-width: 768px) {
    padding-bottom: 10px;
    text-align: center;
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
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.$isVisible ? "#5c768d" : "white")};

  &:hover {
    color: ${(props) => (props.$visible ? "#1ab4fc" : "#1ab4fc")};
    font-weight: 900;
  }

  &.active {
    color: ${(props) => (props.$visible ? "#1ab4fc" : "#1ab4fc")};
    font-weight: 900;
  }

  @media (max-width: 768px) {
    color: #283642;
    font-size: 1.25rem;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.$isVisible ? "#5c768d" : "white")};

  &:hover {
    color: ${(props) => (props.$visible ? "#1ab4fc" : "#1ab4fc")};
    font-weight: 900;
  }

  &.active {
    color: ${(props) => (props.$visible ? "#1ab4fc" : "#1ab4fc")};
    font-weight: 900;
  }

  @media (max-width: 768px) {
    color: #283642;
    font-size: 1.25rem;
  }
`;

export const HeaderContainer = styled.div`
background-color: ${(props) => (props.$isVisible ? "white" : "transparent")};
box-shadow: ${(props) => (props.$isVisible ? "0 6px 10px -2px rgb(0 0 0 / 30%)" : "")};
position: sticky;
  top: 0;
  height: 70px;
  width: 100vw;
  padding: 10px 0;
  display: flex;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 9999;
  transition: all 0.05s ease;

  @media (max-width: 768px) {
    background-color: ${(props) => (!props.$isOpen && props.$isVisible ? "white" : "transparent")};
    box-shadow: ${(props) => (!props.$isOpen && props.$isVisible ? "0 6px 10px -2px rgb(0 0 0 / 30%)" : "0 0 0 0")};
    padding-top: 0;
  }
`;

export const InnerHeader = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: ${(props) => (props.$isOpen ? "100vh" : "0")};

  }
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
    width: 70%;
    margin:0 auto;
  }
`;
