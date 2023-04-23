import React from "react";
import * as s from "./Guardian.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/guardian.mp4";
import ProductImage from "@Components/ProductImage/ProductImage";

import Pic1 from "@Assets/images/products/guardian/Guardians-1.jpg";
import Pic2 from "@Assets/images/products/guardian/Guardians-2.jpg";
import Pic3 from "@Assets/images/products/guardian/Guardians-3.jpg";
import Pic4 from "@Assets/images/products/guardian/Guardians-4.jpg";



const Guardian = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Guardian</s.ProductPageHeader>
                        <s.ProductPageText>Elderly Assistance App</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:"white"}}>
                                Many health conditions go unnoticed until it is too late, particularly in the elderly population, where a decline in health is sometimes associated with ageing and thus ignored. Guardian aims to provide a solution to this ongoing problem.<br/><br/>
                                Guardian is an activity monitoring and profiling system for the aged care sector with plans to expand to residential homes. Guardian uses a non-invasive radar technology to record a user’s activity and classify these activities over time. Guardian utilises the classified data to predict possible physical and mental health conditions associated with that behaviour. Guardian alerts the elderly person and their family members to see a health professional. Additionally, Guardian detects more urgent incidents such as fall detection.<br/><br/>
                                Guardian’s primary customer is aged care facilities with a plan to expand our scope to carers of elderly persons in residential settings.
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
                                        <li>Monitoring and profiling patient activities.</li>
                                        <li>Alerting caregivers and supervisors during an emergency.</li>
                                        <li>Predicting potential physical and mental health conditions at an early stage.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Providing suggestions to see a health professional based on health issue detected.</li>
                                        <li>Encouraging positive activities.</li>
                                        <li>Generating weekly and monthly activity dashboard.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Providing access to accurate real-time visualisation and position of patient(s).</li>
                                        <li>Ability to define a baseline for a patient.</li>
                                        <li>User management allowing for defining Patient, Carer, and Admin users.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite>
                                <span style={{color:"rgb(10,30,56)"}}>Product</span> Benefits
                            </s.ProductTitleWhite>
                            <s.ProductSubColumnsWhite>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Early detection of physical and mental health conditions.</li>
                                        <li>Peace of mind for both users and family members who cannot physically keep an eye on their elderly family members.</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Elderly people can live at home independently for longer.</li>
                                        <li>Easy for caregivers to monitor multiple patient activities.</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                    </s.FeatureListWhite>
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
            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default Guardian;
