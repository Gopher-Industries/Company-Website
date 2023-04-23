import React, {useState} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as s from "./ScrollButton.style";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <s.Container>
            <s.StyledIcon sx={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop} >
                <KeyboardArrowUpIcon />
            </s.StyledIcon>
        </s.Container>

    );
};
export default ScrollButton;
