import React, {useEffect, useState} from "react";

import * as s from "./AnchorLink.style";

const AnchorLink = (props) => {
    const [anchorTarget, setAnchorTarget] = useState(null);
    const {link, barsolid} = props;

    useEffect(() => {
        setAnchorTarget(document.getElementById(link));
    }, [link]);

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <s.AnchorNavLinkItem $barsolid={barsolid} href={`/#${link}`} onClick={handleClick}>About Us</s.AnchorNavLinkItem>
    );
};

export default AnchorLink;
