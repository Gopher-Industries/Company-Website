import React from "react";
import * as s from "./Chatbot.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/chatbot.mp4";

const Chatbot = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Medi</s.ProductPageHeader>
                        <s.ProductPageText>Chatbot System for Remote Health Monitoring</s.ProductPageText>
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
                                At Gopher Industries, we have created a chatbot system call “Medi” that works as a personal assistant
                                for our intended demographic population to interact with the Gopher Suit and act as a frontage that is the
                                introduction to the products that Gopher houses.<br/><br/>
                                Medi allows users to chat to it as if it was a human interaction helping them with anything from pain
                                assessments to water consumption, nutritional advice and log in with their patient ID. Medi is designed for its users being easy to use, interacts in a friendly human way and will
                                eventually beable to be interacted with via both text and voice – making the product accessible for whoever needs to use it. <br/><br/>
                                With future implementations and testing of GUI environments that suits our users, it is an exciting time for Medi with graphical implementations and unlimited additions available – Medi is proud to be the face
                                of the Gopher Range!
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
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)", paddingBottom:"20px"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.ProductSubColumns>
                                <s.ProductText>
                                    <strong>Pain Assessment Questionnaire:</strong><br/><br/>Ability for our users to log and rate their pain assessment to share with authorised health care providers
                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Diet Plan and Tracking:</strong><br/><br/>Users are able to plan, monitor and share their diet plan with their authorised health care providers. It will be a space where they can keep track of their nutrition and diet plans and
                                    with a quick reference on a day to day basis of their nutritional intake
                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Water Consumption and Tracking:</strong><br/><br/>For anyone but in particular, the demographic that is using our app, tracking water consumption daily is important. Our MEDI will be able to
                                    log a daily water goal, graphically retrieve how much their consumption and motivate them along the way to reach their goal!

                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Data extraction and sharing: </strong><br/><br/>Exciting plans are in the works for Medi to be able to hve read and write function to our
                                    centralised database, meaning that the information that is entered into Medi can be logged to the other Gopher logs and vice versa. Meaning that Medi
                                    is the centralised product that users can interact with for all of their health needs.

                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default Chatbot;
