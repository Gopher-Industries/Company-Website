import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import * as s from "./ProductImage.style";

const ProductImage = (props) => {
    const { image } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <s.ProductImage>
            <s.ProductImageContainer background={image} onClick={() => setOpen(true)} />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: image }
                ]}
                carousel={{ finite: true }}
                render={{ buttonPrev: () => null, buttonNext: () => null }}
            />
        </s.ProductImage>
    );
};

export default ProductImage;
