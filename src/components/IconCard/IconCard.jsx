import React from "react";
import PropTypes from 'prop-types';
import * as s from "./IconCard.style";

const IconCard = (props) => {

    return (
        <s.IconCardContainer
            size={props.size}
            initial={props.animate ? {opacity:0, scale:0.25} : {}}
            animate={props.animate ? {opacity:1, scale:1} : {}}
            transition={props.animate ? {duration:0.8, delay:0.5, ease: [0, 0.71, 0.2, 1.01]} : {}}>
            <s.StyledIconNode>
                <s.StyledIcon>
                    {props.icon}
                </s.StyledIcon>
            </s.StyledIconNode>
            <s.Heading>
                {props.heading}
            </s.Heading>
            {props.callToAction && (
                <s.CallToAction>
                    {props.callToAction}
                </s.CallToAction>
            )}
            <s.Content>
                {props.children}
            </s.Content>
        </s.IconCardContainer>
    );
};

IconCard.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    size: PropTypes.string.isRequired,
    callToAction: PropTypes.string,
    animate: PropTypes.bool
}

export default IconCard;
