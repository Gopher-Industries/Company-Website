import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import * as s from "./SocialButtons.style";


const SocialButtons = () => {

    return (
        <s.SocialsContainer>
            <s.StyledIcon>
                <a href="https://www.linkedin.com/company/gopher-industries"  target="_blank"><LinkedInIcon /></a>
            </s.StyledIcon>
        </s.SocialsContainer>
    );
};
export default SocialButtons;
