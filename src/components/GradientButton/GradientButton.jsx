import React, {useEffect, useState} from "react";

import * as s from "./GradientButton.style";
import PropTypes from "prop-types";

const GradientButton = (props) => {
    const {href, target} = props;
    return (
        <s.StyledButton href={href} target={target}>{props.placeholder}</s.StyledButton>
    );
};

GradientButton.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
}


export default GradientButton;
