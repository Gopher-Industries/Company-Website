import styled from "styled-components";

export const StyledButton = styled.a`
  border: 0;
  height:20px;
  border-radius: 5%;
  padding:5px 20px;
  transition: all ease 0.4s;
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(50deg,rgba(63,184,175,1) 0%,rgba(20,157,215,1) 100%);
  color:white;
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(50deg,rgba(63,184,175,1) 100%,rgba(20,157,215,1) 0%);
    cursor: pointer;
  }
`
