import React from "react";
import * as s from "./Footer.style"
import { Col, Container, Row } from "react-grid-system";

import SocialsButton from "@Components/SocialButtons/SocialButtons"
import logoSrc from "@Assets/images/full-white-2.png";

const Footer = () => {
    return (
        <s.FooterContainer>
            <Container>
                <Row>
                    <Col lg={3}/>
                    <Col>
                        <s.FooterText>
                        We wish to acknowledge the Wurundjeri (‘were-un-juri’) people of the Kulin nations, the Traditional Owners of the land on which Deakin University Melbourne campus is built. We pay our respects to the local people for allowing us to have our gathering on their land and to their Elders: past, present and future.
                       <br/><br/>
                       Website design and development proudly completed by Gopher Industries - Project X
                        </s.FooterText>
                    </Col>
                    <Col lg={3}/>
                </Row>
                <s.FooterBottom>
                    © Copyright Gopher Industries 2023. All Rights Reserved
                </s.FooterBottom>
                <s.FooterBottom>
                    <s.Logo src={logoSrc} alt={"Company Logo"} />
                </s.FooterBottom>
                <SocialsButton />
            </Container>
            {/*
           <s.FooterTop>
               <s.FooterTopContent>
                  <s.FooterTopLeft>
                      <s.Logo src={logoSrc} alt={"Company Logo"} />
                      <s.FooterSocials>
                          <SocialsButton />
                      </s.FooterSocials>
                  </s.FooterTopLeft>
                   <s.FooterTopRight>
                       We wish to acknowledge the Wurundjeri (‘were-un-juri’) people of the Kulin nations, the Traditional Owners of the land on which Deakin University Melbourne campus is built. We pay our respects to the local people for allowing us to have our gathering on their land and to their Elders: past, present and future.
                       <br/><br/>
                       Website design and development proudly completed by Gopher Industries - Project X
                   </s.FooterTopRight>

               </s.FooterTopContent>
           </s.FooterTop>
           */}
        </s.FooterContainer>
    );
};

export default Footer;
