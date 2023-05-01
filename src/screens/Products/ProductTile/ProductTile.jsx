import React, { useState } from "react";
import * as s from "./ProductTile.style";
import PropTypes from "prop-types";

const ProductTile = (props) => {
    const {icon, title, subtitle, link, linkTitle} = props;
   {/* const {icon, title, subtitle, link} = props;*/}
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const boxStyle = {
        color: '#444',
        textAlign: 'center',
        marginBottom: '30px',
        //width:'300px',
        height:'150px',
        padding:'30px 30px 30px 30px',
        backgroundColor: 'white',
        transition: 'all 0.2s ease-out',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: isHover ? '0 0 0 rgba(0,0,0,0.2), 0 0 0 rgba(255,255,255,0.8), inset 18px 18px 30px rgba(0,0,0,0.2), inset -18px -18px 30px rgba(255,255,255,1)' : '18px 18px 30px rgba(0,0,0,0.1), -18px -18px 30px rgba(255,255,255,0.18)' ,
    }

    return (
        <s.ProductTile style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link}>
            <s.ProductIcon>{icon}</s.ProductIcon>
            <s.ProductTitle>{title}</s.ProductTitle>
            {subtitle && (
                <s.ProductSubtitle>{subtitle}</s.ProductSubtitle>
            )}
             {/*{link}*/}
           
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
