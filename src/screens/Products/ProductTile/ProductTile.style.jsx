import styled from "styled-components";


export const ProductTile = styled.div`
  color: #444;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 30px;
  height: 180px;
  padding:20px 20px 30px 20px;
  background-color: white;
  opacity: 0.95;
  transition: all ease 0.4s;
  align-verital: middle;
  
  &:hover {
    transform: scale(0.95);
  }
`
export const ProductIcon = styled.div`
  > svg {
    margin-top: 30px;
    font-size:40px;
    color:#1ab4fc;
  }    
    
`

export const ProductTitle = styled.div`
  font-weight: 700;
  font-family: "Poppins ExtraBold",sans-serif;
  font-size:20px;
  color:#0a1e38;
  
`

export const ProductSubtitle = styled.div`
  font-family: "Open Sans",sans-serif;
  display: block;
  margin-right: 15px;
  margin-left: 15px;
`

export const ProductLink = styled.a`
  text-decoration: none;
  color:#1ab4fc;
  padding-top:15px;
  box-sizing: border-box;
  display: block;
  font-weight:bold;
  transition: all ease 0.4s;
  
  &:hover {
    color:#3db9ad;
  }
`
