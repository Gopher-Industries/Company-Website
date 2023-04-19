import React, { useState } from "react";
import * as s from "./Nav.style";
import logoSrc from "@Assets/images/full-white-2.png";
import logoSrcBlack from "@Assets/images/full-black-2.png";

const Nav = (props) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { barsolid } = props;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <s.HeaderContainer $isOpen={isOpen} $visible={visible}>
      <s.InnerHeader>
        <s.Logo
          $isOpen={isOpen}
          src={visible ? logoSrcBlack : logoSrc}
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
              <s.Link $barsolid={barsolid} $visible={visible} to={""} end>
                Home
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $visible={visible} to={"/products"}>
                Products
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $visible={visible} to={"/company-timeline"}>
                Company Timeline
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $visible={visible} to={"/student-timeline"}>
                Student Timeline
              </s.Link>
            </s.NavListItem>
            <s.NavListItem>
              <s.Link $barsolid={barsolid} $visible={visible}to={"/contact-us"}>
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
