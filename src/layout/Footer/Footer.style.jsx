import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0a1e38;
  color: #fff;
  font-size: 14px;
  width:100%;
  box-sizing: border-box;

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const FooterTop = styled.div`
  background: #0a1e38;
  padding: 60px 0 30px 0;
  box-sizing:border-box;
  display:flex;
  justify-content: center;

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 40px 30px 20px 30px;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    padding: 40px 30px 20px 30px;
  }
`
export const FooterTopContent = styled.div`
  width:1140px;
  justify-content: space-between;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  
  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }

  //mobile
  @media only screen and (max-width: 767px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center; 
    grid-row-gap: 25px;
  }
`
export const FooterTitle = styled.div`
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  `

export const FooterSocials = styled.div`

`
export const FooterBottom = styled.div`
  text-align: center;
  padding:30px 0 30px 0;
  font-family: "Open Sans",sans-serif;
  display: flex;
  justify-content: center;
`

export const FooterTopLeft = styled.div`
  @media (max-width: 5000px) {
    justify-content: center;
  }
  @media (max-width: 840px) {
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
  }

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
    padding:20px 0 30px 0;
  }

  //mobile
  @media only screen and (max-width: 767px) {
    padding:20px 0 30px 0;
  }
`

export const FooterTopLeft = styled.div`
`

export const FooterTopRight = styled.div`
  width:600px;
  text-align: center;
  font-family: "Open Sans",sans-serif;

  //tablet
  @media (min-width: 768px) and (max-width: 991px) {
      width: 460px;
  }
  
  //mobile
  @media only screen and (max-width: 767px) {
      width: 330px;
  }
`

export const Logo = styled.img`
  height:55px;
  padding-bottom:20px;
  `
