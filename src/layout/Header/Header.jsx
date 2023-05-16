import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring"; // Transition animation for dropdown menu
import * as s from "./Header.style";
import { FaBars } from "react-icons/fa"; // hamburger menu icon
import logoSrc from "@Assets/images/full-white-2.png";
import logoSrcBlack from "@Assets/images/full-black-2.png";
import Nav from "@Components/Nav/Nav";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [iconColor, setIconColor] = useState("white");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 30) {
      setVisible(true);
      setIconColor("black");
    } else if (scrolled <= 30) {
      setVisible(false);
      setIconColor("white");
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleScroll = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Listens to the actions of the user (scrolling, clicking)
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDropdown]);

  const dropdownTransition = useTransition(showDropdown, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
  });

  return (
    <s.HeaderContainer
      style={{
        backgroundColor: visible ? "white" : "transparent",
        boxShadow: visible ? "0 6px 10px -2px rgb(0 0 0 / 30%)" : "",
      }}
    >
      <s.InnerHeader>
        <s.Logo src={visible ? logoSrcBlack : logoSrc} alt="Company Logo" />
        {isMobile ? (
          <div style={{ paddingRight: 15 }}>
            <FaBars size={24} color={iconColor} onClick={toggleDropdown} />
            {dropdownTransition((style, item) =>
              item && (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: "100%",
                    right: 0,
                  }}>
                  <s.DropdownContainer ref={dropdownRef}>
                    <s.DropdownList>
                        <s.DropdownItem><s.Link to={""} onClick={closeDropdown}>Home</s.Link></s.DropdownItem>
                        <s.DropdownItem><s.Link to={"/products"} onClick={closeDropdown}>Products</s.Link></s.DropdownItem>
                        <s.DropdownItem><s.Link to={"/company-timeline"} onClick={closeDropdown}>Company Timeline</s.Link></s.DropdownItem>
                        <s.DropdownItem><s.Link to={"/student-timeline"} onClick={closeDropdown}>Student Timeline</s.Link></s.DropdownItem>
                        <s.DropdownItem><s.Link to={"/contact-us"} onClick={closeDropdown}>Contact Us</s.Link></s.DropdownItem>
                        <s.DropdownItem><s.Link to={"/https://gorgeous-dragon-4d0ca6.netlify.app/"} onClick={closeDropdown}>Login</s.Link></s.DropdownItem>
                    </s.DropdownList>
                  </s.DropdownContainer>
                </animated.div>
              ))}
          </div>
        ) : (
          <Nav barsolid={visible} />
        )}
      </s.InnerHeader>
    </s.HeaderContainer>
  );
};

export default Header;
