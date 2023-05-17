import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavList = styled.ul`
  list-style-type: none;
  display:flex;
  gap:20px;
`
export const VerticalNavList = styled.ul`
list-style-type: none;
display:flex;
flex-direction : column;
gap:20px;
`

export const NavListItem = styled.li`
    text-decoration:none;
`

export const VerticalNavListItem = styled.li`
  text-decoration : none;
  color : black;
  border-bottom : 1px solid black;
  margin : 2px auto;
  width : 150px;
  position : relative;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${props => props.$barsolid ? "#5c768d" : "black"};
  
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
  color: ${props => props.$barsolid ? "#5c768d" : "black"};

  &:hover {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }

  &.active {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#1ab4fc"};
  }
`
export const Logo =  styled.img`
width: 93px;
height: 32.16px;
left: 10px;
top: 67px;
fill : black;
`
