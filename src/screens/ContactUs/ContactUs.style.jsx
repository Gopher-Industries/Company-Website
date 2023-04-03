import styled from "styled-components";

export const ContactUsContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
`

export const ContactUsInnerContainer = styled.div`
  width:100%;
`

export const ContactUsRow = styled.div`
  display:flex;
  justify-content: left;
  width:100%;
  max-width:1140px;
  flex-direction: column;
`

export const ContactPageHeader = styled.h2`
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
`

export const ContactPageText = styled.div`
  color:white;
  font-family: "Open Sans",sans-serif;
`

export const ContactUsTop = styled.div`
  margin-top:-70px;
  padding-top:70px;
  display: flex;
  justify-content: center;
  height:350px;
`

export const ContactUsBottom = styled.div`

  background-color: rgb(10, 30, 56);
  height:300px;
  padding-bottom: 30px;
`

export const FloatingRow = styled.div`
  //position: absolute;
  width:100%;
  padding-top:50px;
`

export const ContactPageForm = styled.div`
  position: relative;
`

export const ContactUsVideo = styled.video`
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
