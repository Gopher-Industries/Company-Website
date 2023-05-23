import React from "react";
import * as s from "./MedsOne.style";
import {VIDEO_SRC} from "@Assets/videos";

const MedsOne = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>MedsOne</s.ProductPageHeader>
                        <s.ProductPageText>Medication and Prescription Scan App</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={VIDEO_SRC.connections} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>

                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitleContainer>
                                <s.ProductTitleProduct>
                                    Product
                                </s.ProductTitleProduct>
                                <s.ProductTitleOverview>
                                    Overview
                                </s.ProductTitleOverview>
                            </s.ProductTitleContainer>
                            <s.ProductText style={{color:"white"}}>
                                MedsOne is an Android application that aims to provide an integrated platform for users to keep track of their prescription, remind patients to take medicine, scan their medication to ﬁnd the cheapest and nearest possible store, and deliver it to their home.<br/><br/>
                                By using machine learning, it allows user to identify the medication, extract necessary information from prescription, recommended the best possible pharmacy, and additional features such as text-to-speech, voice commands, and more.<br/><br/>
                                The intended user demographic for our app includes individuals who may face challenges in accessing medical facilities due to factors such as age, disability, and lack of personal support. Our goal is to provide a solution that allows these individuals to easily manage their medical needs and access necessary medications from the comfort of their own homes, thereby increasing their independence and overall quality of life.
                            </s.ProductText>
                        </s.ProductContentLeft>
                        <s.ProductContentRight>
                            <s.ProductVideo src={VIDEO_SRC.medsone} controls={true} />
                        </s.ProductContentRight>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>

                <s.ProductContentRow>
                    <s.ProductContentRowInner>
                        <s.ProductContent>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.InnerFeatureContainer>
                                <s.FeastureColumn>
                                    <s.ProductText style={{marginRight:'30px'}}>
                                        <s.FeatureList>
                                            <li>Identifying and analysing medication pill.</li>
                                            <li>Extracting necessary information from paper prescription.</li>
                                            <li>Scanning medication QR code.</li>
                                            <li>Storing patient’s information in secure database.</li>
                                            <li>Providing medication’s information.</li>
                                        </s.FeatureList>
                                    </s.ProductText>
                                    <s.ProductText style={{marginLeft:'30px'}}>
                                        <s.FeatureList>
                                            <li>Reminding patient to take medication.</li>
                                            <li>Predicting price comparison.</li>
                                            <li>Recommending suitable medication’s store.</li>
                                            <li>Allowing user to interact with the app by using text-to-speech and voice command features.</li>
                                        </s.FeatureList>
                                    </s.ProductText>
                                </s.FeastureColumn>
                            </s.InnerFeatureContainer>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>

                <s.ProductContentRowBlue>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite>
                                Product Benefits
                            </s.ProductTitleWhite>
                            <s.InnerFeatureContainer>
                                <s.FeastureColumn>
                                    <s.BenefitList>
                                        <li>Accessibility: allows elder, disabled, and a wider audience to easily access the app with its easy-to-use features, and text-to-speech and voice command capabilities.</li>
                                    </s.BenefitList>

                                    <s.BenefitList>
                                        <li>Convenience: allows patients to keep track of their prescription, classify their medication pills, and remind them to take medication.</li>
                                    </s.BenefitList>

                                    <s.BenefitList>
                                        <li>Cost-effective: allows users to get the medication delivered to them directly at aﬀordable price.</li>
                                    </s.BenefitList>

                                </s.FeastureColumn>
                            </s.InnerFeatureContainer>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRowBlue>

            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default MedsOne;
