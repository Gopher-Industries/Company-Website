import styled from "styled-components";

export const AnchorNavLinkItem = styled.a`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: ${props => props.$barsolid ? "#5c768d" : "white"};
  
  &:hover {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#2ecc71"};
  }
  
  &.active {
    color: ${props => props.$barsolid ? "#1ab4fc" : "#2ecc71"};
  }
`
export const AnchorLinkItem = styled.a`
  text-decoration: none;
  transition: all ease 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif; 
`
