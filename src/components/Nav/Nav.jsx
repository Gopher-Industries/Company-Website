import React from "react";
import { useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Image from '../../assets/images/full-black-2.png'
import * as s from "./Nav.style";


const Nav = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const { barsolid } = props;
    return (
        <div className="Nav-Container">
            <s.NavList>
                <s.NavListItem>
                    <HamburgerButton toggleFunction = {setShowMenu} showMenu={showMenu} $barsolid = {barsolid}/>
                </s.NavListItem>
                <s.NavList id="Nav-Container-Links">
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={""} end>Home</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/products"}>Products</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/company-timeline"}>Company Timeline</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/student-timeline"}>Student Timeline</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/contact-us"}>Contact Us</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.ExternalLink $barsolid={barsolid} href={"https://gorgeous-dragon-4d0ca6.netlify.app/"} target="_blank">Login</s.ExternalLink>
                </s.NavListItem>
                </s.NavList>
                {showMenu ? <s.VerticalNavList id="Nav-Container-Links-Vertical">
                <HamburgerButton toggleFunction = {setShowMenu} showMenu={showMenu} $barsolid = {barsolid}/>
                <s.VerticalNavListItem className="VerticalLogo">
                    <s.Logo src={Image} alt="Gopher logo"></s.Logo>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.Link $barsolid={barsolid} to={""} end>Home</s.Link>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.Link $barsolid={barsolid} to={"/products"}>Products</s.Link>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.Link $barsolid={barsolid} to={"/company-timeline"}>Company Timeline</s.Link>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.Link $barsolid={barsolid} to={"/student-timeline"}>Student Timeline</s.Link>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.Link $barsolid={barsolid} to={"/contact-us"}>Contact Us</s.Link>
                </s.VerticalNavListItem>
                <s.VerticalNavListItem>
                    <s.ExternalLink $barsolid={barsolid} href={"https://gorgeous-dragon-4d0ca6.netlify.app/"} target="_blank">Login</s.ExternalLink>
                </s.VerticalNavListItem>
                </s.VerticalNavList>: null}
            </s.NavList> 
        </div>
    );
};

export default Nav;
