import React from "react";
import * as s from "./Footer.style"

import SocialsButton from "@Components/SocialButtons/SocialButtons"
import logoSrc from "@Assets/images/full-white-2.png";

const Footer = () => {
    return (
        <s.FooterContainer>
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
            <s.FooterBottom>
                © Copyright Gopher Industries 2022. All Rights Reserved
            </s.FooterBottom>
        </s.FooterContainer>
    );
};

export default Footer;
