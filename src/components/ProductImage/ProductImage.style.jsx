import styled from "styled-components";

export const ProductImage = styled.div`
`

export const ProductImageContainer = styled.div`
  border-radius: 10px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  max-width: 250px;
  height:250px;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 30px;
  margin-left: 30px;
  transition: all ease 0.4s;
  
  &:hover {
    scale:0.95;
    cursor:pointer;
  }
`
