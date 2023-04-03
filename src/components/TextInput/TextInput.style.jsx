import styled from "styled-components";

export const TextInput = styled.input`
  display:block;
  width:100%;
  height:calc(1.5em + 0.75rem + 2px);
  padding:20px 15px;
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  outline: none;
  box-sizing: border-box;
  
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: none;
  }
`
