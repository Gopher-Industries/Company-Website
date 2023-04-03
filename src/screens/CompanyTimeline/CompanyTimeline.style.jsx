import styled from "styled-components";

export const CompanyTimelineContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
`

export const CompanyTimelineInnerContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`

export const CompanyTimelineRow = styled.div`
  display:flex;
  justify-content: left;
  width:100%;
  max-width:1140px;
  flex-direction: column;
  z-index:100;
  position: relative;
`

export const CompanyTimelineHeader = styled.h2`
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

export const CompanyTimelineText = styled.div`
  color:white;
  font-family: "Open Sans",sans-serif;
`


export const FloatingRow = styled.div`
  width:100%;
  margin-top:50px;
  box-sizing: border-box;
  padding:30px;
  
`

export const CompanyTimelineForm = styled.div`
  position: relative;
`

export const CompanyTimelineVideo = styled.video`
  width: 100%;
  height:100vh;
  object-fit: unset;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`

export const TimelineGraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::after {
    background-color: #1ab4fc;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`
