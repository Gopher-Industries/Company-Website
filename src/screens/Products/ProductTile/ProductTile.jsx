import React from "react";
import * as s from "./ProductTile.style";
import PropTypes from "prop-types";

const ProductTile = (props) => {
    const {icon, title, subtitle, link, linkTitle} = props;
    return (
        <s.ProductTile>
            <s.ProductIcon>{icon}</s.ProductIcon>
            <s.ProductTitle>{title}</s.ProductTitle>
            {subtitle && (
                <s.ProductSubtitle>{subtitle}</s.ProductSubtitle>
            )}
            {link && (
                <s.ProductLink href={link} alt={linkTitle}>{linkTitle}</s.ProductLink>
            )}
        </s.ProductTile>
    );
};

ProductTile.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string
}

export default ProductTile;
