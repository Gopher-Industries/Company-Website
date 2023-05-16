import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const HeaderContainer = styled.div`
  position: sticky; top: 0;
  height:70px;
  width:100vw;
  padding:10px 0;
  display:flex;
  align-content: center;
  justify-content: left;
  box-sizing: border-box;
  z-index:9999;
  transition:all 0.3s ease;
  padding-left: 15px;
`

export const InnerHeader = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;
`

export const Logo = styled.img`
  height:44px;
`

export const MobileMenu = styled.div`
`

export const DropdownContainer = styled.div`
  position: relative;
  width: 170px;
  background-color: white;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  text-color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    text-color: white;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${props => props.$barsolid ? "#5c768d" : "black"};
  &.active {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }
`