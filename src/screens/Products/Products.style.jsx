import styled from "styled-components";

export const ProductContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
`

export const ProductInnerContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`

export const ProductRow = styled.div`
  display:flex;
  justify-content: left;
  width:100%;
  max-width:1140px;
  flex-direction: column;
  z-index:100;
  position: relative;
  
`

export const ProductHeader = styled.h2`
  padding-top:40px;
  padding-bottom: 0;
  color: white;
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  margin:0;
  font-size:40px;
  line-height:60px;
  letter-spacing: -2px;
  text-align: left;

  @media (max-width: 768px) {
    margin-left:30px;
    margin-right:30px;
  }
`

export const ProductText = styled.div`
  color:white;
  font-family: "Open Sans",sans-serif;
  @media (max-width: 768px) {
    margin-left:30px;
    margin-right:30px;
  }
`


export const ProductVideo = styled.video`
  width: 100%;
  height:100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 768px) {
    height:100%;
    object-fit: cover;
  }
`

export const ProductItemsContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:45px;
  margin-bottom:40px;
`

export const ProductItemsRow = styled.div`
  display:flex;
  flex-direction: row;
  gap:30px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`


