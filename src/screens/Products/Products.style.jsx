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

  //mobile
  @media only screen and (max-width: 767px) {
  width:100%;
  max-width: 720px;
  flex-direction: column;
  z-index:100;
  position: relative;
  }
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

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 33px;
    line-height: 40px;
    text-align: center;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 34px;
    text-align: center;
  }
`

export const ProductText = styled.div`
  color:white;
  font-family: "Open Sans",sans-serif;

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 15px;
    padding-left: 105px;
    padding-right: 105px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    padding-top: 15px;
    padding-left: 75px;
    padding-right: 75px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`


export const ProductVideo = styled.video`
  width: 100%;
  height:100%;
  object-fit: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

  //tablet
  @media (min-width: 768px) and (max-width: 991px){
    object-fit: cover;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    object-fit: cover;
  }
`

export const ProductItemsContainer = styled.div`
  margin-top:45px;
  margin-bottom:40px;

  //tablet
  @media (min-width: 768px) and (max-width: 991px){
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 30px; 
    margin-bottom: 30px;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 30px; 
    margin-bottom: 30px;
  }
`

export const ProductItemsRow = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 75px;

  //tablet
  @media (min-width: 768px) and (max-width: 991px){
    margin-right: 40px;
    grid-template-columns: repeat(2, 0.75fr);
    grid-column-gap: 75px;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    margin-left: 10px;
    grid-template-columns: repeat(1, 0.85fr);
  }
`



