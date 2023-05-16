import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0a1e38;
  color: #fff;
  font-size: 14px;
  width:100%;
  box-sizing: border-box;
`
export const FooterTop = styled.div`
  background: #0a1e38;
  padding: 60px 0 30px 0;
  box-sizing:border-box;
  display:flex;
  justify-content: center;
  padding-left: 15px;
`
export const FooterTopContent = styled.div`
  width:1140px;
  justify-content: space-between;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
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
`

export const FooterTopRight = styled.div`
  width:600px;
  text-align: center;
  font-family: "Open Sans",sans-serif;
  `

export const Logo = styled.img`
  height:55px;
  padding-bottom:20px;
  `
