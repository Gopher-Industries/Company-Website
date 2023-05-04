import React, { useState } from "react";
import * as s from "./Nav.style";
import logoSrc from "@Assets/images/full-white-2.png";
import logoSrcBlack from "@Assets/images/full-black-2.png";

const Nav = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { barsolid } = props;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 50) {
      setIsVisible(true);
    } else if (scrolled <= 50) {
      setIsVisible(false);
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <s.HeaderContainer $isOpen={isOpen} $isVisible={isVisible}>
      <s.InnerHeader>
        <s.Logo
          $isOpen={isOpen}
          src={isVisible ? logoSrcBlack : logoSrc}
          alt={"Company Logo"}
        />
        <s.NavContainer $isOpen={isOpen}>
        <s.HamburgerIcon onClick={handleMenuToggle} $isOpen={isOpen}>
            <span />
            <span />
            <span />
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
              <s.Link $barsolid={barsolid} $isVisible={isVisible} to={""} end>
                Home
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/products"}>
                Products
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/company-timeline"}>
                Company Timeline
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $isVisible={isVisible} to={"/student-timeline"}>
                Student Timeline
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $isVisible={isVisible}to={"/contact-us"}>
                Contact Us
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.ExternalLink
                $barsolid={barsolid}
                href={"https://gorgeous-dragon-4d0ca6.netlify.app/"}
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
