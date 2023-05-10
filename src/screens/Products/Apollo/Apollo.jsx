import React from "react";
import * as s from "./Apollo.style";
import {Container, Row, Col} from 'react-grid-system';
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/apollo.mp4";

const Apollo = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Apollo</s.ProductPageHeader>
                        <s.ProductPageText>Standardised Patient History Database</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
            </s.ProductInnerContainer>

            <s.ProductDescGradient>
                <Container>
                    <Row>
                        <Col xxl={6} xl={5} lg={12}>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:'white'}}>
                                At Gopher Industries we are developing a central database, called the Apollo Database, (to host and integrate all 
                                the company’s products and manage core services across the company. The goal of Team Peacemaker is to provide the 
                                Apollo central database to host and integrate Gopher Industries product suite, centrally manage patient history, 
                                provide core services company-wide and eventually enable artificial intelligence data analytics on patient data. 
                                <br/><br/> The Apollo Database will enable the storage, access, and retrieval of sensitive personal and health 
                                information collated through the various applications offered by Gopher Industries. The Apollo Database employs 
                                cloud technologies and cybersecurity practices to ensure the confidentiality, integrity and availability of 
                                sensitive health data required for the various applications developed internally within Gopher Industries.  <br/><br/>
                                The Apollo Database enables access through APIs (Application Programming Interface) for better health outcomes for 
                                aged persons. Additionally, the Apollo Database reduces duplication of effort for core services in Gopher Industries. 
                                The Apollo Database will also allow the application of advance artificial intelligence analytics in the future, 
                                to provide insights and improved services of Gopher Industries customers.<br/><br/> Apollo’s primary market are 
                                the internal development teams within Gopher Industries.
                            </s.ProductText>
                        </Col>
                        <Col xxl={6} xl={7} lg={12}>
                            <s.ProductVideo src={ProductVideoSrc} controls={true} />
                        </Col>
                    </Row>
                </Container>
            </s.ProductDescGradient>

            <s.ProductContentRow>
                <Container>
                    <Row>
                        <Col>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)", paddingBottom:"20px"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                        </Col>
                    </Row>
                    <Row>
                            <Col xl={5} lg={6}>
                                <s.FeatureText><li>Audit Logging to track user access and changes to data lake</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Data Model Management</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Data Security</li></s.FeatureText>
                            </Col>
                            <Col xl={5} lg={6}>
                                <s.FeatureText><li>Data Ingestion (i.e., ability to extract data from various sources)</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Scalable Data Storage</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Data Retrieval</li></s.FeatureText>
                            </Col>
                            <Col xl={5} lg={6}>
                                <s.FeatureText><li>Ability to store structured, semi-structured and unstructured data</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Data Manageability</li></s.FeatureText>
                            </Col>
                            <Col xl={3} lg={6}>
                                <s.FeatureText><li>Data Analytics</li></s.FeatureText>
                            </Col>
                            <Col xl={5} lg={6}>
                                <s.FeatureText><li>Authentication/Authorisation to maintain confidentiality/privacy</li></s.FeatureText>
                            </Col>
                            <Col xl={4} lg={6} />
                            <Col xl={3} lg={6} />
                            
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
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Easy for Gopher Industries applications to collect, store and retrieve data</li></s.BenefitsText>
                        </Col>
                        <Col xl={4}  md={6}>
                            <s.BenefitsText><li>Enhanced data integration enabling information to be shared between various Gopher Industries applications/services</li></s.BenefitsText>
                        </Col>
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Universal data security standards across Gopher Industries (i.e., no weak links)</li></s.BenefitsText>
                        </Col>
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Continuous access to stored data regardless of time or location</li></s.BenefitsText>
                        </Col>
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Consolidates sensitive information into a single repository, enhancing security</li></s.BenefitsText>
                        </Col>
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Increased efficiency in Gopher Industries with a reduction in data duplication</li></s.BenefitsText>
                        </Col>
                        <Col xl={4} md={6}>
                            <s.BenefitsText><li>Data Ingestion (i.e., ability to extract data from various sources)</li></s.BenefitsText>
                        </Col>
                    </Row>
                    
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
                                At Gopher Industries we are developing a central database, called the Apollo Database, (to host and integrate all the company’s products and manage core services across the company. The goal of Team Peacemaker is to provide the Apollo central database to host and integrate Gopher Industries product suite, centrally manage patient history, provide core services company-wide and eventually enable artificial intelligence data analytics on patient data. <br/><br/> The Apollo Database will enable the storage, access, and retrieval of sensitive personal and health information collated through the various applications offered by Gopher Industries. The Apollo Database employs cloud technologies and cybersecurity practices to ensure the confidentiality, integrity and availability of sensitive health data required for the various applications developed internally within Gopher Industries.  <br/><br/>The Apollo Database enables access through APIs (Application Programming Interface) for better health outcomes for aged persons. Additionally, the Apollo Database reduces duplication of effort for core services in Gopher Industries. The Apollo Database will also allow the application of advance artificial intelligence analytics in the future, to provide insights and improved services of Gopher Industries customers.<br/><br/> Apollo’s primary market are the internal development teams within Gopher Industries.
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
                                        <li>Authentication/Authorisation to maintain confidentiality/privacy</li>
                                        <li>Audit Logging to track user access and changes to data lake</li>
                                        <li>Data Ingestion (i.e., ability to extract data from various sources)</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Scalable Data Storage</li>
                                        <li>Ability to store structured, semi-structured and unstructured data</li>
                                        <li>Data Manageability</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Data Security</li>
                                        <li>Data Analytics</li>
                                        <li>Data Retrieval</li>
                                        <li>Data Model Management</li>
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
                                        <li>Easy for Gopher Industries applications to collect, store and retrieve data</li>
                                        <li>Continuous access to stored data regardless of time or location</li>
                                        <li>Advanced analytics to provide insights to improve services to Gopher Industries customers </li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Enhanced data integration enabling information to be shared between various Gopher Industries applications/services</li>
                                        <li>Consolidates sensitive information into a single repository, enhancing security</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Universal data security standards across Gopher Industries (i.e., no weak links)</li>
                                        <li>Increased efficiency in Gopher Industries with a reduction in data duplication.</li>
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

export default Apollo;
