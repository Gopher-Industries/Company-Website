import React from "react";

import * as s from "./TextArea.style";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";

const TextArea = (props) => {
    const {name, id, required, placeholder, rows} = props;
    return (
        <s.TextArea name={name} id={id} required={required} placeholder={placeholder} rows={rows} />
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    rows: PropTypes.string
}

export default TextArea;
