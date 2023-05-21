import styled from "styled-components";

export const ProductContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
`

export const ProductInnerContainer = styled.div`
  width:100%;
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
  font-size:40px;
  line-height:60px;
  letter-spacing: -2px;
  text-align: center;
`

export const ProductPageText = styled.div`
  color:white;
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
  height:420px;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  bottom: 0;
  z-index: -1;
`

export const ProductContentRowGradient = styled.div`
  background: linear-gradient(225deg,rgba(63,184,175,1) 0%,rgba(20,157,215,1) 100%);
  padding: 50px 0 50px 0;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin:0 auto;
`

export const ProductContentRow = styled.div`
  padding: 50px 0 50px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;
  background-color: white;
`

export const ProductContentRowBlue = styled(ProductContentRow)`
  background-color: rgb(10,30,56);
`

export const ProductContentRowInner = styled.div`
  max-width:1200px;
  display: flex;
  flex-direction: row;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`

export const ProductContentLeft = styled.div`
  width:50%;

  @media (max-width: 991px){
    width: 100%;
  }
`

export const ProductContentRight = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left:20px;

  @media (max-width: 991px){
    width: 100%;
  }
`

export const ProductContent = styled.div`
`

export const ProductTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ProductTitleProduct = styled.h1`
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  font-size:70px;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: rgb(10, 30, 56);
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 30px;
  }

  @media (max-width: 767px){
    text-align: center;
    font-size:40px;
    margin:0;
  }
`

export const ProductTitleOverview = styled.h1`
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  font-size:70px;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  margin-top: -20px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 30px;
    margin-top: -20px;
  }

  @media (max-width: 767px){
    text-align: center;
    font-size:40px;
  }
`


export const ProductTitle = styled.div`
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  font-size:70px;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: rgb(10, 30, 56);
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 30px;
  }

  @media (max-width: 767px){
    text-align: center;
    font-size:40px;
  }
`


export const ProductTitleWhite = styled(ProductTitle)`
  color:white;
  padding-bottom: 50px;;
`

export const ProductText = styled.div`
  color:black;
  font-family: "Open Sans",sans-serif;
  padding-bottom: 40px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0px 30px 0px 30px;
  }

  @media (max-width: 767px){
    margin: 0px 50px 0px 50px;
    text-align: center;
  }
`

export const ProductVideo = styled.video`
  width:80%;
  border-radius: 5px;
  box-shadow: 5px 5px 24px -1px #5e5e5e;
`

export const InnerFeatureContainer = styled.div`
  display:flex;
  flex-direction: row;

  @media (max-width: 767px){
    flex-direction: column;
  }
`

export const FeastureColumn = styled.div`
  display:grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 10px;

  @media (min-width: 768px) and (max-width: 991px){
    margin-right: 30px;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 10px;
  }  
  
  @media only screen and (max-width: 767px) {
    margin-right: 0px;
    grid-template-columns: repeat(1, auto);
    grid-column-gap: 10px;
  }
`

export const FeatureList = styled.ul`
  margin:0;
  padding-inline-start: 20px;
  list-style:none;
  
  > li {
    padding: 0px 20px 30px 0;
  }
  
  > li::before {
    content: "\\2022";
    color: rgb(92, 118, 141);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 30px;
  }

  @media (max-width: 767px){
    margin: 0px 50px 0px 50px;
    text-align: left;
  }
`

export const BenefitList = styled.ul`
  margin:0;
  padding-inline-start: 20px;
  list-style:none;
  
  > li {
    padding: 0px 20px 30px 0;
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

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 30px;
  }

  @media (max-width: 767px){
    margin: 0px 50px 0px 50px;
    text-align: left;
  }
`
