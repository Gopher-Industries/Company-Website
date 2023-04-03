import styled from "styled-components";

export const ProductImage = styled.div`
`

export const ProductImageContainer = styled.div`
  border-radius: 50%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width:200px;
  height:200px;
  transition: all ease 0.4s;
  
  &:hover {
    scale:0.95;
    cursor:pointer;
  }
`
