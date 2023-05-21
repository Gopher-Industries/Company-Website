import styled from "styled-components";

export const StyledButton = styled.input`
  background: #1ab4fc;
  color: #fff;
  border: 0;
  padding: 10px 15px;
  height: 50px;
  border-radius: 0;
  transition: .2s;
  width:124px;
  font-family: "Open Sans", sans-serif;

  &:hover {
    background: #069fe6;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
