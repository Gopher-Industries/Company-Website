import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import * as s from "./SocialButtons.style";


const SocialButtons = () => {

    return (
        <s.SocialsContainer>
            <s.StyledIcon>
                <TwitterIcon />
            </s.StyledIcon>
            <s.StyledIcon>
                <FacebookIcon />
            </s.StyledIcon>
            <s.StyledIcon>
                <InstagramIcon />
            </s.StyledIcon>
            <s.StyledIcon>
                <LinkedInIcon />
            </s.StyledIcon>
        </s.SocialsContainer>
    );
};
export default SocialButtons;
