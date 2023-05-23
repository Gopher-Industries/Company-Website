import React from "react";
import {VIDEO_SRC} from "@Assets/videos";
import LogoAnimate from "@Assets/images/logo-2.png";


import * as s from "./Home.style";
import Button from "@Components/Button/Button";
import TechStackSection from "@Components/TechStackSection/TechStackSection";

const Home = () => {

    return (
        <s.HomeContainer>
            <s.HomeVideoContainer>
                <s.HomeVideo src={VIDEO_SRC.connections} width="100%" controls={false} autoPlay={true} loop={true} muted={true}></s.HomeVideo>
                <s.VideoOverlay initial={{y:"-300px", opacity:0}} animate={{y:0, opacity:1, transform:"translate(-50%,0)"}} transition={{duration:0.8, delay:0.3, ease: [0, 0.71, 0.2, 1.01]}}>
                    <s.VideoOverlayText>
                        Building healthier communities through enabling technologies.
                    </s.VideoOverlayText>
                    <Button type="anchor" link={"home-page"} placeholder={"Learn More"} name={"Learn-More"} id={"learn-more"} />
                </s.VideoOverlay>
            </s.HomeVideoContainer>
            <s.HomeContentWide id={"home-page"}>
                <s.HomeCol>
                    <s.HomeTitleContainer>
                        <s.HomeTitle style={{color:"#1ab4fc"}}>GOPHER<br/>INDUSTRIES</s.HomeTitle>
                        <s.HomeTitle style={{color:"#5c768d"}}>INNOVATING LIVES</s.HomeTitle>
                    </s.HomeTitleContainer>
                </s.HomeCol>
                <s.HomeCol style={{backgroundColor:"#0a1e38"}}>
                    <s.AnimatedLogoContainer>
                    <s.AnimatedLogo src={LogoAnimate} alt={"Logo"} />
                    </s.AnimatedLogoContainer>
                </s.HomeCol>
            </s.HomeContentWide>
            <s.HomeContentWideImage2>
                <TechStackSection />
            </s.HomeContentWideImage2>
            <s.HomeContentWideGradient id={"about-us"}>
                <s.HomeCol>
                    <s.HomeColAlign>
                        <s.HomeTitle style={{color:"#0a1e38", marginBottom:"20px"}}><span style={{color:"white"}}>WHO IS</span><br/>GROPHER<br/>INDUSTRIES?</s.HomeTitle>
                        <s.SubtitleContainer>
                            <s.HomeSubTitle>
                                Gopher Industries is a Deakin University-owned company dedicated to providing consultancy and software solutions that make people's lives easier.
                            </s.HomeSubTitle>
                            <s.HomeSubTitle>
                                <strong>Our vision</strong> is to build healthier communities through enabling technologies.
                            </s.HomeSubTitle>
                            <s.HomeSubTitle>
                                <strong>Our mission</strong> is to develop innovative products to monitor, diagnose and manage health and well-being using state-of-the-art wearable technology, IoT and AI solutions to improve people's health and enable better access to healthcare for the elderly, disadvantaged and disabled.
                            </s.HomeSubTitle>
                        </s.SubtitleContainer>
                    </s.HomeColAlign>
                </s.HomeCol>
                <s.HomeCol>
                    <s.VideoContainer>
                    <s.AboutVideo src={VIDEO_SRC.about} controls={true} />
                    </s.VideoContainer>
                </s.HomeCol>
            </s.HomeContentWideGradient>
        </s.HomeContainer>
    );
};

export default Home;
