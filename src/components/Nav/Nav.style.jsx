import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavList = styled.ul`
  list-style-type: none;
  display:flex;
  gap:20px;
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
