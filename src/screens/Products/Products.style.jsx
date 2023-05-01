import styled from "styled-components";

export const ProductContainer = styled.div`
  width:100%;
  height: calc(100vh + 70px);
  margin-top: -70px;
  justify-content: center;
  background: linear-gradient(190deg,rgba(63,184,175,1),rgb(57,109,137));
`
export const ProductContainerHeader = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
`

export const Left = styled.div`
  width: 20%;
  @media only screen and (max-width: 768px) {
    width:0%;
  }
`

export const Mid = styled.div`
  width:60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width:20%;
  @media only screen and (max-width: 768px) {
    width:0%;
  }
`


export const ProductInnerContainer = styled.div`
  width:100%;

  display: flex;
  
  align-items: center;
`

export const ProductLink = styled.a`
  text-decoration: none;
`


export const ProductHeader = styled.h2`
  padding-top:150px;
  padding-bottom: 0;
  color: white;
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  margin:0;
  font-size:40px;
  line-height:60px;
  letter-spacing: -2px;
  text-align: left;
  z-index: 97;
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const ProductText = styled.div`
  color:white;
  font-family: "Open Sans",sans-serif;
  z-index: 98;
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
{/*
export const ProductVideo = styled.video`
  width: 100%;
  height:100vh;
  object-fit: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
` 
*/}

export const ProductItemsContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  margin-top:45px;
  margin-bottom:40px;
  z-index: 99;
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
{/* 
export const ProductRow = styled.div`
  display:flex;
  align-items: left;
  width:100%;
  max-width:1140px;
  flex-direction: row;
  z-index: 100;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
*/}



export const ProductItemsRow = styled.div`
  display:flex;
  justify-content: center;
  
  gap:30px;
  
`

export const BlueOcean = styled.img`
  width: 100%;
  margin-top: -400px;
`

