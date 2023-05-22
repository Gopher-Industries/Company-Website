import React, {useState} from "react";
import * as s from "./Nav.style";
import logoSrc from "@Assets/images/full-white-2.png";
import logoSrcBlack from "@Assets/images/full-black-2.png";
import {SSO_LINK} from "@Settings/links";

const Nav = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const {barsolid} = props;

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setIsVisible(true);
        } else if (scrolled <= 400) {
            setIsVisible(false);
        }
    };

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <s.HeaderContainer $isOpen={isOpen} $isVisible={isVisible}>
            <s.InnerHeader $isOpen={isOpen}>
                <s.Logo
                    $isOpen={isOpen}
                    src={isVisible ? logoSrcBlack : logoSrc}
                    alt={"Company Logo"}
                />
                <s.NavContainer $isOpen={isOpen}>
                    <s.HamburgerIcon onClick={handleMenuToggle} $isOpen={isOpen}>
                        <span/>
                        <span/>
                        <span/>
                    </s.HamburgerIcon>
                    <s.NavList $isOpen={isOpen}>
                        {/* <s.MobileLogoContainer> */}
                        <s.MobileLogo
                            $isOpen={isOpen}
                            src={logoSrcBlack}
                            alt="Logo"
                        />
                        {/* </s.MobileLogoContainer> */}
                        <s.NavListItem>
                            <s.Link $barsolid={barsolid} $isVisible={isVisible} to={""} end onClick={handleMenuToggle}>
                                Home
                            </s.Link>
                        </s.NavListItem>
                        <s.NavListItem>
                            <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/products"} onClick={handleMenuToggle}>
                                Products
                            </s.Link>
                        </s.NavListItem>
                        <s.NavListItem>
                            <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/company-timeline"} onClick={handleMenuToggle}>
                                Company Timeline
                            </s.Link>
                        </s.NavListItem>
                        <s.NavListItem>
                            <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/student-timeline"} onClick={handleMenuToggle}>
                                Student Timeline
                            </s.Link>
                        </s.NavListItem>
                        <s.NavListItem>
                            <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/contact-us"} onClick={handleMenuToggle}>
                                Contact Us
                            </s.Link>
                        </s.NavListItem>
                        <s.NavListItem>
                            <s.ExternalLink
                                $barsolid={barsolid}
                                href={SSO_LINK}
                                target="_blank"
                            >
                                Login
                            </s.ExternalLink>
                        </s.NavListItem>
                    </s.NavList>
                </s.NavContainer>
            </s.InnerHeader>
        </s.HeaderContainer>
    );
};

export default Nav;
