import styled from "styled-components";
import {NavLink} from "react-router-dom";

// ADDED | "padding-right: 25px;"
// ADDED | "align-items: right;"
export const NavList = styled.ul`
  list-style-type: none;
  display:flex;
  gap:20px;
  padding-right: 25px;
  align-items: right;
`

export const NavListItem = styled.li`
    text-decoration:none;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${props => props.$barsolid ? "#5c768d" : "white"};
  
  &:hover {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }
  
  &.active {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }
`

export const ExternalLink = styled.a`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${props => props.$barsolid ? "#5c768d" : "white"};

  &:hover {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }

  &.active {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }
`

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const DropdownLink = styled.a`
  text-decoration: none;
  color: #333333;
`;
