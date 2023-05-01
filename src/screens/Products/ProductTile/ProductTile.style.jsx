import styled from "styled-components";

export const ProductTile = styled.div`
  
`

{/*
export const ProductTile = styled.div`
  color: #444;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width:200px;
  height:200px;
  padding:20px 20px 30px 20px;
  background-color: white;
  transition: all 0.2s ease-out;
  border-radius: 20px;
  box-shadow: 18px 18px 30px rgba(0,0,0,0.1), -18px -18px 30px rgba(255,255,255,0.18);
  cursor: pointer;
` */}

export const ProductIcon = styled.div`
  > svg {
    margin-top: 15px;
    font-size:40px;
    color:#1ab4fc;
    @media(max-width: 1024px){
      margin-top:5px;
    }
    @media(max-width: 767px){
      margin-top:15px;
    }
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
`

export const ProductLink = styled.a`
  text-decoration: none;
  color:#1ab4fc;
  padding-top:15px;
  box-sizing: border-box;
  display: block;
  font-weight:bold;
  transition: all ease 0.4s;
`
