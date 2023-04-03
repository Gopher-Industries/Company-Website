import styled from "styled-components";

export const TextArea = styled.textarea`
  display:block;
  width:100%;
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
  font-family: Arial,serif;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: none;
  }
  
  ::placeholder, ::-webkit-input-placeholder {
    font-family: Arial,serif;
  }
  ::-ms-input-placeholder {
    font-family: Arial,serif;
  }
  
    
`
