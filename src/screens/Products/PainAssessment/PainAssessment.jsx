import React from "react";
import * as s from "./PainAssessment.style";
import {Container, Row, Col} from 'react-grid-system';
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/painassessment.mp4";

const PainAssessment = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Pain Assessment</s.ProductPageHeader>
                        <s.ProductPageText>AI powered pain assessor</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
            </s.ProductInnerContainer>

            <s.ProductDescGradient>
                <Container>
                    <Row>
                        <Col xl={7} lg={12}>
                        <s.ProductTitle>
                                    Product <br/> <span style={{color:"white"}}>Overview</span>
                                </s.ProductTitle>
                                <s.ProductText style={{color:'white'}}>
                                Pain as a symptom is most commonly self-assessed and verbal communication is typically the primary source of information for 
                                medical practitioners to understand the level of discomfort a patient is experiencing, however when patients are unable to 
                                communicate clearly issues of pain mismanagement become significant The goal for this product is to empower age care 
                                professional to provide better care and pain management strategies for these vulnerable populations.<br/><br/>
                                Our targeted user is the healthcare provider who is looking to improve their pain diagnostic capability and enhance 
                                their pain tracking and diagnostic capability.
                            </s.ProductText>
                        </Col>
                        <Col xl={5} lg={12}>
                            <s.ProductVideo src={ProductVideoSrc} controls={true} />
                        </Col>
                    </Row>
                </Container>
            </s.ProductDescGradient>

            <s.ProductContentRow>
                <Container  style={{width:'100%'}}>
                    <Row>
                        <Col>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={5}>
                        <strong>Our team has plans on implementing the following features over a longer-time frame:</strong>
                            <s.FeatureText>
                                
                                <li>A Simple, user-friendly UI</li>
                                <li>A Cloud-based assessment engine</li>
                                <li>An alert system</li>
                                <li>A guided questionnaire</li>
                            </s.FeatureText>
                        </Col>
                        <Col xl={1}/>
                        <Col xl={5}>
                            
                        <strong>Our team has plans on implementing the following features over a longer-time frame:</strong>
                            <s.FeatureText>
                                
                                <li>Integration of wearable devices</li>
                                <li>Novel technologies for additional data sources</li>
                                <li>Facial Identification for Authentication</li>
                            </s.FeatureText>
                        </Col>
                        <Col xl={1}/>
                    </Row>
                </Container>
            </s.ProductContentRow>

            <s.ProductContentRow style={{backgroundColor:"rgb(10,30,56)"}}>
                <Container>
                    <Row>
                        <Col>
                            <s.ProductTitle style={{color:"white"}}>
                                Product Benefits
                            </s.ProductTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={3} md={6}>
                            <s.BenefitsText><li>Through implementation of pain history tracking, providers can easily track pain history, empowering recognition of pain trends and allowing for estimation of future needs</li></s.BenefitsText>
                        </Col>
                        <Col xl={3} md={6}>
                            <s.BenefitsText><li>Increase the accuracy of pain assessments, enabling more efficient pain management strategies and improving quality of life</li></s.BenefitsText>
                        </Col>
                        <Col xl={3}  md={6}>
                            <s.BenefitsText><li>Guide caregivers through the process, cutting down on training time and making the pain assessment process easier to perform</li></s.BenefitsText>
                        </Col>
                        <Col xl={3} md={6}>
                            <s.BenefitsText><li>Providing the data and history needed to construct and carry out a more comprehensive pain a management strategy</li></s.BenefitsText>
                        </Col>
                    </Row>
                </Container>
            </s.ProductContentRow>

            {/*
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:"white"}}>
                                Pain as a symptom is most commonly self-assessed and verbal communication is typically the primary source of information for medical practitioners to understand the level of discomfort a patient is experiencing, however when patients are unable to communicate clearly issues of pain mismanagement become significant The goal for this product is to empower age care professional to provide better care and pain management strategies for these vulnerable populations.<br/><br/>
                                Our targeted user is the healthcare provider who is looking to improve their pain diagnostic capability and enhance their pain tracking and diagnostic capability.
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
                                    <strong>Our Product will primarily take the form of an application with the following Features present in the minimum viable product:</strong><br/><br/>
                                    <s.FeatureList>
                                        <li>A Simple, user-friendly UI</li>
                                        <li>A Cloud-based assessment engine</li>
                                        <li>An alert system</li>
                                        <li>A guided questionnaire</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Our team has plans on implementing the following features over a longer-time frame:</strong><br/><br/>
                                    <s.FeatureList>
                                        <li>Integration of wearable devices</li>
                                        <li>Novel technologies for additional data sources</li>
                                        <li>Facial Identification for Authentication</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
                <s.ProductContentRowBlue>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite>
                                Product Benefits
                            </s.ProductTitleWhite>
                            <s.ProductSubColumnsWhite>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Increase the accuracy of pain assessments, enabling more efficient pain management strategies and improving quality of life</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Guide caregivers through the process, cutting down on training time and making the pain assessment process easier to perform</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Through implementation of pain history tracking, providers can easily track pain history, empowering recognition of pain trends and allowing for estimation of future needs.</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Providing the data and history needed to construct and carry out a more comprehensive pain a management strategy</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                            </s.ProductSubColumnsWhite>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRowBlue>
            */}
        </s.ProductContainer>

    );
};

export default PainAssessment;
