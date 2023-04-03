import React, {useEffect, useState} from "react";

import * as s from "./Button.style";
import PropTypes from "prop-types";

const Button = (props) => {
    const {type, link} = props;
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(link));
    }, [link]);

    const handleClick = event => {
        event.preventDefault();
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    return (
        <s.StyledButton type={"submit"} onClick={type === "anchor" ? handleClick : props.onClickHandler } value={props.placeholder} />
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button;
