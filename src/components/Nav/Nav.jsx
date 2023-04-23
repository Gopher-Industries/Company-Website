import React from "react";

import * as s from "./Nav.style";

const Nav = (props) => {
    const { barsolid } = props;
    return (
        <div className="Nav-Container">
            <s.NavList>
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
        </div>
    );
};

export default Nav;
