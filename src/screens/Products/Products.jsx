import React from "react";
import * as s from "./Products.style";
import ProductTile from "./ProductTile/ProductTile";
import { Container, Row, Col } from 'react-grid-system';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SickIcon from '@mui/icons-material/Sick';
import SpaIcon from '@mui/icons-material/Spa';

const Products = () => {
    return (

        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.Left></s.Left>
                <s.Mid> 
                    <s.ProductHeader>Products</s.ProductHeader>
                    <s.ProductText>
                        Our company is producing a range of products that meet the goals and objectives of the company.
                    </s.ProductText>
                    
                    <s.ProductItemsContainer>
                        <Row>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/medimind"><ProductTile icon={<MedicationLiquidIcon />} title={"MediMind"} subtitle={"Medication Management and Reminder App"} /></s.ProductLink>
                            </Col>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/apollo"><ProductTile icon={<CollectionsBookmarkIcon />} title={"Apollo Database"} subtitle={"Standardised Patient History Database"} /></s.ProductLink>
                            </Col>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/guardian"><ProductTile icon={<HealthAndSafetyIcon />} title={"Guardian App"} subtitle={"Elderly Assistance App"} /></s.ProductLink>
                            </Col>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/chatbot"><ProductTile icon={<HeadsetMicIcon />} title={"Medi"} subtitle={"Chatbot System for Remote Health Monitoring"} /></s.ProductLink>
                            </Col>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/painassessment"><ProductTile icon={<SickIcon />} title={"Pain Assessment"} subtitle={"AI powered pain assessor"} /></s.ProductLink>
                            </Col>
                            <Col md={6} lg={4}>
                                <s.ProductLink href="/products/dietplanner"><ProductTile icon={<SpaIcon />} title={"NutriHelp"} subtitle={"Personalised diet planning Android app"} /></s.ProductLink>
                            </Col>
                        </Row>
                    </s.ProductItemsContainer>
                    
                </s.Mid>
                
                <s.Right></s.Right>
            </s.ProductInnerContainer>
        </s.ProductContainer>
        
    );
};

export default Products;


{/*
            <s.ProductContainer>
                <s.ProductInnerContainer>
                    <s.ProductRow>
                        <s.ProductHeader>Products</s.ProductHeader>
                        <s.ProductText>
                            Our company is producing a range of products that meet the goals and objectives of the company.
                        </s.ProductText>
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
                
                <s.BlueOcean src={BlueOcean}/>
            </s.ProductContainer>
*/}