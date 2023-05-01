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
  width:340px;
  height:340px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  transition: all ease 0.4s;
  justify-content: space-around;
  
  &:hover {
    scale:0.95;
    cursor:pointer;
  }

  @media only screen and (max-width: 1600px) {
    margin-right: 20px;
    width:250px;
    height:250px;
    margin-left: 15px;
    margin-right: 15px;
  }
`
