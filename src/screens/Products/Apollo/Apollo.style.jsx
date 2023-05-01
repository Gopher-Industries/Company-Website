import styled from "styled-components";

export const ProductContainer = styled.div`
  width:100%;
  align-items: center;
  justify-content: center;
`

export const ProductInnerContainer = styled.div`
  width:100%;
  height: 320px;
`

export const ProductRow = styled.div`
  display:flex;
  justify-content: left;
  width:100%;
  max-width:1140px;
  flex-direction: column;
`

export const ProductPageHeader = styled.h2`
  padding-top:50px;
  padding-bottom: 0;
  color: white;
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  margin:0;
  font-size:60px;
  line-height:60px;
  letter-spacing: -2px;
  text-align: center;
`

export const ProductPageText = styled.div`
  color:white;
  margin-top: 20px;
  margin-right: 15px;
  margin-left: 15px;
  font-size: 20px;
  font-family: "Open Sans",sans-serif;
  text-align: center;
`

export const ProductTop = styled.div`
  margin-top:-70px;
  padding-top:70px;
  display: flex;
  justify-content: center;
  height:250px;
`

export const PageVideo = styled.video`
  width: 100%;
  height:320px;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`

export const ProductDescGradient = styled.div`
  background: linear-gradient(225deg,rgba(63,184,175,1),rgba(20,157,215,1));
  width: 100%;
  justify-content: center;
`

export const ProductContentRow = styled.div`
  padding: 30px 0 30px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;
  background-color: white;
`


export const ProductTitle = styled.h1`
  font-family: "Poppins ExtraBold", sans-serif;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: rgb(10, 30, 56);
  margin-top: 50px;
  text-transform: uppercase;
  @ media only screen and (max-width: 576px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const ProductText = styled.div`
  color:black;
  font-family: "Open Sans",sans-serif;
  margin-bottom: 100px;
  @media only screen and (max-width: 1600px) {
    margin-bottom: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  @media only screen and (max-width: 1200px) {
    margin-bottom: -50px;
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const ProductVideo = styled.video`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 24px -1px #5e5e5e;
  display: flex;
  margin-top: 150px;
  margin-bottom: 150px;
  @media only screen and (max-width: 1600px) {
    margin-top: 250px;
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 100px;
  }
`

export const FeatureText = styled.li`
  margin-top: 20px;
  margin-right: 30px;
  font-weight:500;
  list-style-type: none;

  @media only screen and (max-width: 992px) {
    list-style-type: disc;
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const BenefitsText = styled.li`
  margin-top: 20px;
  margin-right: 30px;
  font-weight: 400;
  list-style-type: none;
  color: white;
  padding-bottom: 

  @media only screen and (max-width: 992px) {
    list-style-type: disc;
    margin-left: 15px;
    margin-right: 15px;
  }
`

{/* 
export const ProductContentRowBlue = styled(ProductContentRow)`
  background-color: rgb(10,30,56);
`

export const ProductContentRowInner = styled.div`
  max-width:1200px;
  display: flex;
  flex-direction: row;
`

export const ProductContentLeft = styled.div`
  max-width:55%;
`

export const ProductContentRight = styled.div`
  max-width:45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left:20px;
`

export const ProductContent = styled.div`
`
*/}

{/*
export const ProductSubColumns = styled.div`
  display:flex;
  flex-direction: row;
  color:black;
  gap:20px;
  
  > div {
    max-width:33%;
  }
`

export const ProductSubColumnsWhite = styled(ProductSubColumns)`
  color:white;
  justify-content: space-between;
`

export const FeatureList = styled.ul`
  margin:0;
  padding-inline-start: 20px;
  list-style:none;
  
  > li {
    padding-bottom:15px;
  }
  
  > li::before {
    content: "\\2022";
    color: rgb(92, 118, 141);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

export const FeatureListWhite = styled.ul`
  margin:0;
  padding-inline-start: 20px;
  list-style:none;
  
  > li {
    padding-bottom:15px;
    color:white;
  }
  
  > li::before {
    content: "\\2022";
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`
*/}