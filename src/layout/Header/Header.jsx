import React, {useState} from "react";
import * as s from "./Header.style";
import logoSrc from "@Assets/images/full-white-2.png";
import logoSrcBlack from "@Assets/images/full-black-2.png";
import Nav from "@Components/Nav/Nav";

const Header = (props) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400){
            setVisible(true);
        }
        else if (scrolled <= 400){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <s.HeaderContainer style={{backgroundColor: visible ? 'white' : 'transparent', boxShadow: visible ? '0 6px 10px -2px rgb(0 0 0 / 30%)' : ''}}>
            <s.InnerHeader>
                <s.Logo src={visible ? logoSrcBlack : logoSrc} alt={"Company Logo"} />
                <Nav barsolid={visible}/>
            </s.InnerHeader>
        </s.HeaderContainer>
    );
};

export default Header;
