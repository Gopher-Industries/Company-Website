import styled, {keyframes} from "styled-components";
import { motion } from "framer-motion"

import Home2 from "@Assets/images/home-2.png";

export const HomeContainer = styled.div`
  margin-top:-70px;
`

const breatheAnimation = keyframes`
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`

export const HomeVideo = styled.video`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
`


export const HomeVideoContainer = styled.div`
  position:relative;
  width: 100vw;
  height: 100vh;
  margin-bottom:-5px;
`

export const HomeContent = styled.div`
  max-width:1140px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin:0 auto;
  padding:40px 0;
`

export const HomeContentWide = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;

  @media (max-width: 768px) {
    display: block;
  }
`

export const HomeContentWideImage2 = styled(HomeContentWide)`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  margin:0 auto;

  background-image: url(${Home2});
  background-position: center;
  background-size: cover;
  height:500px;

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (min-width: 768px, max-width: 959px) {
    height: 340px;
  }
`

export const HomeContentWideGradient = styled(HomeContentWide)`
  background: linear-gradient(50deg, rgba(63,184,175,1) 0%, rgba(20,157,215,1) 100%);
  padding:30px 0 30px 0;
`

export const HomeCol = styled.div`
  flex-grow: 1;
  max-width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HomeTitleContainer = styled.div`
  display:inline;
`

export const HomeTitle = styled.h1`
  font-weight: 700;
  font-family: "Poppins ExtraBold", sans-serif;
  padding-left: 30px;
  font-size:70px;
  line-height:60px;
  letter-spacing: -3px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 769px) and (max-width: 959px) {
    font-size: 42px;
  }
`

export const HomeSubTitle = styled.h4`
  font-family: "Open Sans", sans-serif;
  color:white;
  font-weight: lighter;
  margin:10px;
  margin-inline-start: 0px;
`

export const AnimatedLogoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const AnimatedLogo = styled.img`
  animation: ${breatheAnimation} 3s ease-out infinite normal;
  width:300px;
  scale: 1.5;

  @media (max-width: 768px) {
    width:180px;
  }

  @media (min-width: 769px) and (max-width: 959px) {
    width:270px;
  }
`

export const VideoOverlay = styled(motion.div)`
  z-index:999;
  position:absolute;
  left: 50%;
  top:40%;
  transform: translate(-50%, 0) !important;
  text-align: center;

  > input {
    margin-top:25px;
    border-radius:8px;
    font-size:17px;
    width:160px;
  }
`

export const VideoOverlayText = styled.div`
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  font-size:33px;
  color:white;
  text-align: center;
  min-width: 370px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 959px) {
    font-size: 24px;
  }
`

export const SlideContent = styled.div`
  position:absolute;
  top:40%;
  left:20%;
  text-align: center;
`

export const SlideHeader = styled.h1`
  color:white;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 48px;
`

export const VideoContainer = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const AboutVideo = styled.video`
width: 530px;
  border-radius: 5px;
  box-shadow: 5px 5px 24px -1px #5E5E5E;

  @media (max-width: 959px) {
    width: 400px;
  }
`

export const SubtitleContainer = styled.div`
margin-left: 30px;
width: 90%;

@media (max-width: 768px) {
  width: 70%;
  flex-wrap: wrap;
}
`


export const HomeColAlign = styled.div`
@media (max-width: 768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

`
