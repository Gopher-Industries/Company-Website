import React from "react";
import HomeVideo from "@Assets/videos/connections.mp4";
import * as s from "./Products.style";
import ProductTile from "./ProductTile/ProductTile";

import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SickIcon from '@mui/icons-material/Sick';
import SpaIcon from '@mui/icons-material/Spa';

const Products = () => {
    return (
        <s.ProductContainer>
            <s.ProductVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
            <s.ProductInnerContainer>
                <s.ProductRow>
                    <s.ProductHeader>Products</s.ProductHeader>
                    <s.ProductText>Our company is producing a range of products that meet the goals and objectives of the company.</s.ProductText>
                    <s.ProductItemsContainer>
                        <s.ProductItemsRow>
                            <ProductTile icon={<MedicationLiquidIcon />} title={"MediMind"} subtitle={"Medication Management and Reminder App"} link={"products/medimind"} linkTitle={"View More"} />
                            <ProductTile icon={<CollectionsBookmarkIcon />} title={"Apollo Database"} subtitle={"Standardised Patient History Database"} link={"products/apollo"} linkTitle={"View More"}  />
                            <ProductTile icon={<HealthAndSafetyIcon />} title={"Guardian App"} subtitle={"Elderly Assistance App"} link={"products/guardian"} linkTitle={"View More"} />
                        </s.ProductItemsRow>
                        <s.ProductItemsRow>
                            <ProductTile icon={<HeadsetMicIcon />} title={"Medi"} subtitle={"Chatbot System for Remote Health Monitoring"} link={"products/chatbot"} linkTitle={"View More"} />
                            <ProductTile icon={<SickIcon />} title={"Pain Assessment"} subtitle={"AI powered pain assessor"} link={"products/painassessment"} linkTitle={"View More"} />
                            <ProductTile icon={<SpaIcon />} title={"NutriHelp"} subtitle={"Personalised diet planning Android app"} link={"products/dietplanner"} linkTitle={"View More"} />
                        </s.ProductItemsRow>
                    </s.ProductItemsContainer>
                </s.ProductRow>
            </s.ProductInnerContainer>
        </s.ProductContainer>
    );
};

export default Products;
