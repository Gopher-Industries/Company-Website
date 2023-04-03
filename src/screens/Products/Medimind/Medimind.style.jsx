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

export const ProductTitle = styled.h1`
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  font-size:70px;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;
  color: rgb(10, 30, 56);
  margin-bottom: 20px;
  text-transform: uppercase;
`

export const ProductText = styled.div`
  color:black;
  font-family: "Open Sans",sans-serif;
  padding-bottom: 40px;
`

export const ProductVideo = styled.video`
  width:80%;
  border-radius: 5px;
  box-shadow: 5px 5px 24px -1px #5e5e5e;
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
