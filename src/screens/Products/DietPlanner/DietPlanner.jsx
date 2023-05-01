import React from "react";
import * as s from "./DietPlanner.style";
import {Container, Row, Col} from 'react-grid-system';
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/dietplanapplication.mp4";
import ProductImage from "@Components/ProductImage/ProductImage";

import Pic1 from "@Assets/images/products/dietplanner/nutrihelp-1.png";
import Pic2 from "@Assets/images/products/dietplanner/nutrihelp-2.png";
import Pic3 from "@Assets/images/products/dietplanner/nutrihelp-3.png";
import Pic4 from "@Assets/images/products/dietplanner/nutrihelp-4.png";


const DietPlanner = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>NutriHelp</s.ProductPageHeader>
                        <s.ProductPageText>Personalised diet planning Android app</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
            </s.ProductInnerContainer>

            <s.ProductDescGradient>
                    <Container>
                        <Row>
                            <Col xxl={6} xl={7} lg={12}>
                                <s.ProductTitle>
                                    <span style={{fontSize: '70px'}}>Product</span> <br/> <span style={{fontSize: '65px', color:"white"}}>Overview</span>
                                </s.ProductTitle>
                                <s.ProductText>
                                NutriHelp is an Android application that aims to promote healthy eating habits for Australia's senior population, by 
                                providing personalised recipes based on the user's specified health conditions and nutritional preferences.<br/><br/> 
                                Our goal is to decrease the number of elderly people that are either malnourished or at risk of malnutrition, promote 
                                nutritional health through food intake and increase transparency and awareness of our user’s current nutritional health.
                            </s.ProductText>
                            </Col>
                            <Col xxl={6} xl={5} lg={12}>
                                <s.ProductVideo src={ProductVideoSrc} controls={true} />
                            </Col>
                        </Row>
                    </Container>
                </s.ProductDescGradient>

                <s.ProductContentRow>
                    <Container>
                        <Row>
                            <Col>
                                <s.ProductTitle style={{fontSize: '70px', color:"rgb(92, 118, 141)"}}>
                                    Product <span style={{fontSize: '70px', color:"rgb(26, 180, 252)"}}>Features</span>
                                </s.ProductTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>We’ll keep their family/carer and GP up to date with their nutritional health</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>Our daily recipe plan provides flexibility, select which time of day you would like meals provided, or select your own</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>The user can shop online within the application using their shopping list or sent it to a family member to collect</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>We support our user's health through nutrition derived from food, giving more control to the user over their nutritional health</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>As the users’ health changes over time, their preferences can be updated and the application will respond to their changing health</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>Users are provided with recipe steps and a convenient shopping list. We provide an abundance of recipes that can be swapped, added, deleted and favourited</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>NutriHelp generates nutritional plans by understanding our users' needs. The user tells us their personal characteristics, mobility, nutritional requirements and nutrient-related deficiencies/diseases and we provide nutritional planning, tracking and daily recipes to support the user</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>NutriHelp supports our users in managing their general nutritional wellbeing and the management of nutrient-related diseases and deficiencies through personalised nutritional planning</s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6}>
                                <s.FeatureText>The nutritional plan makes sure the user meets and stays within their optimal nutritional targets throughout each day, assisting the user to maintain and improve their health</s.FeatureText>
                            </Col>
                        </Row>
                    </Container>
                </s.ProductContentRow>

                <s.ProductDescGradient2>
                    <Container>
                        <Row>
                            <Col>
                                <s.ProductTitle>
                                    <span style={{fontSize: '70px'}}>Product  </span> <span style={{fontSize: '65px', color:"white"}}> Overview</span>
                                </s.ProductTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <s.ProductText style={{color: 'white'}}>
                                <strong>Convenient, Accurate, Tailored</strong><br/><br/>NutriHelp makes sure that our users maintain a healthy, balanced diet specific to their individual needs. It takes away the complicated guesswork and ensures that seniors stay healthy and looked after!
                                </s.ProductText>
                            </Col>
                        </Row>
                    </Container>
                </s.ProductDescGradient2>

                <s.ProductContentRow style={{backgroundColor:"rgb(10,30,56)"}}>
                    <Container>
                        <Row>
                            <Col>
                                <s.ProductTitle style={{fontSize: '70px', color:"white"}}>
                                    Product Preview
                                </s.ProductTitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={3} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ProductImage image={Pic1} />
                            </Col>
                            <Col xl={3} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ProductImage image={Pic2} />
                            </Col>
                            <Col xl={3} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ProductImage image={Pic3} />
                            </Col>
                            <Col xl={3} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <ProductImage image={Pic4} />
                            </Col>
                        </Row>
                        <hr style={{marginTop:'20px'}} />
                    </Container>
                </s.ProductContentRow>

                {/**
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:"white"}}>
                                NutriHelp is an Android application that aims to promote healthy eating habits for Australia's senior population, by providing personalised recipes based on the user's specified health conditions and nutritional preferences.<br/><br/> Our goal is to decrease the number of elderly people that are either malnourished or at risk of malnutrition, promote nutritional health through food intake and increase transparency and awareness of our user’s current nutritional health.
                            </s.ProductText>
                        </s.ProductContentLeft>
                        <s.ProductContentRight>
                            <s.ProductVideo src={ProductVideoSrc} controls={true} />
                        </s.ProductContentRight>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>
                <s.ProductContentRow>
                    <s.ProductContentRowInner>
                        <s.ProductContent>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.ProductSubColumns>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>NutriHelp supports our users in managing their general nutritional wellbeing and the management of nutrient-related diseases and deficiencies through personalised nutritional planning.</li>
                                        <li>We support our user's health through nutrition derived from food, giving more control to the user over their nutritional health.</li>
                                        <li>The user can shop online within the application using their shopping list or sent it to a family member to collect.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>NutriHelp generates nutritional plans by understanding our users' needs. The user tells us their personal characteristics, mobility, nutritional requirements and nutrient-related deficiencies/diseases and we provide nutritional planning, tracking and daily recipes to support the user.</li>
                                        <li>Users are provided with recipe steps and a convenient shopping list. We provide an abundance of recipes that can be swapped, added, deleted and favourited. </li>
                                        <li>Our daily recipe plan provides flexibility, select which time of day you would like meals provided, or select your own. </li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>The nutritional plan makes sure the user meets and stays within their optimal nutritional targets throughout each day, assisting the user to maintain and improve their health.</li>
                                        <li>.</li>
                                        <li>We’ll keep their family/carer and GP up to date with their nutritional health.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite style={{paddingBottom:"5px"}}>
                                <span style={{color:"rgb(10,30,56)"}}>Product</span> Benefits
                            </s.ProductTitleWhite>
                            <s.ProductSubColumnsWhite>
                                <s.ProductText style={{maxWidth:"100%", color:"white"}}>
                                    <strong>Convenient, Accurate, Tailored</strong><br/><br/>NutriHelp makes sure that our users maintain a healthy, balanced diet specific to their individual needs. It takes away the complicated guesswork and ensures that seniors stay healthy and looked after!
                                </s.ProductText>
                            </s.ProductSubColumnsWhite>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>
                <s.ProductContentRow style={{backgroundColor:"rgb(10,30,56)"}}>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitle style={{color:"white", paddingBottom:"50px"}}>
                                Product Images
                            </s.ProductTitle>
                            <s.ProductSubColumns style={{justifyContent:"space-between"}}>
                                <ProductImage image={Pic1} />
                                <ProductImage image={Pic2} />
                                <ProductImage image={Pic3} />
                                <ProductImage image={Pic4} />
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
             */}
        </s.ProductContainer>

    );
};

export default DietPlanner;
