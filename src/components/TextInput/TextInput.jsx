import React from "react";

import * as s from "./TextInput.style";
import PropTypes from "prop-types";


const TextInput = (props) => {
    const {name, id, required, placeholder} = props;
    return (
        <s.TextInput name={name} id={id} required={required} placeholder={placeholder} type={"text"} />
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
}

export default TextInput;
