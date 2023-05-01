import styled from "styled-components";

export const ProductContainer = styled.div`
  width:100%;
  margin-top: -70px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(190deg,rgba(63,184,175,1),rgb(57,109,137));
`

export const ProductContentIsetForsted = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: inset 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1880px){
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const ProductContentForsted = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1880px){
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const ProductContentTrans = styled.div`
  
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1880px){
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const ProductPageHeader = styled.h2`
  padding-top:150px;
  padding-bottom: 0;
  color: #EEFCFA;
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  margin:0;
  font-size:50px;
  line-height:60px;
  letter-spacing: -2px;
  text-align: center;
`

export const ProductPageText = styled.div`
  color: #f5f5f5;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 100px;
  font-size: 20px;
  font-family: "Open Sans",sans-serif;
  text-align: center;
`

export const ProductTitle = styled.h1`
  font-family: "Poppins ExtraBold", sans-serif;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: rgb(10, 30, 56);
  margin-top: 50px;
  margin-left: 30px;
  text-transform: uppercase;
  @media (max-width: 576px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const ProductText = styled.div`
  color:black;
  font-family: "Open Sans",sans-serif;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 50px;
  @media (max-width: 1600px) {
    margin-bottom: 60px;
  }
`

export const ProductVideo = styled.video`
  width:80%;
  border-radius: 10px;
  
  margin-top: 90px;
`

export const FeatureText = styled.div`
  margin-top: 20px;
  margin-right: 30px;
  margin-left: 30px;
  font-weight:500;
  color: #f5f5f5;
  list-style-type: none;
  padding-bottom: 30px;
  @media (max-width: 992px) {
    list-style-type: disc;
    margin-left: 15px;
    margin-right: 15px;
  }
`







export const ProductContentGradient = styled.div`
  background: linear-gradient(225deg,rgba(63,184,175,1) 0%,rgba(20,157,215,1) 100%);
  padding: 30px 0 30px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;
`

export const ProductInnerContainer = styled.div`
  width:100%;
  background-color: grey;
  height: 250px;
`

export const ProductRow = styled.div`
  display:flex;
  justify-content: left;
  width:100%;
  max-width:1140px;
  flex-direction: column;
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
  object-fit: unset;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`

export const ProductContentRowGradient = styled.div`
  background: linear-gradient(225deg,rgba(63,184,175,1) 0%,rgba(20,157,215,1) 100%);
  padding: 30px 0 30px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;
`

export const ProductContentRow = styled.div`
  padding: 30px 0 30px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;
  background-color: white;
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

export const ProductSubColumns = styled.div`
  display:flex;
  flex-direction: row;
  color:black;
  gap:20px;
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
