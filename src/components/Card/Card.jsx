import React from "react";
import * as s from "./Card.style";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <s.Card
            initial={props.animate ? {opacity:0, scale:0.25} : {}}
            animate={props.animate ? {opacity:1, scale:1} : {}}
            transition={props.animate ? {duration:0.8, delay:0.5, ease: [0, 0.71, 0.2, 1.01]} : {}}
        >
            {props.children}
        </s.Card>
    );
};

Card.propTypes = {
    animate: PropTypes.bool
}

export default Card;
