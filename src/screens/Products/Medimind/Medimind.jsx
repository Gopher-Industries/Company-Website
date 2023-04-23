import React from "react";
import * as s from "./Medimind.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/medimind.mp4";
import ProductImage from "@Components/ProductImage/ProductImage";

import Pic1 from "@Assets/images/products/medimind/MediMind-1.jpeg";
import Pic2 from "@Assets/images/products/medimind/MediMind-2.jpeg";
import Pic3 from "@Assets/images/products/medimind/MediMind-3.jpeg";
import Pic4 from "@Assets/images/products/medimind/MediMind-4.jpeg";

const Medimind = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Medimind</s.ProductPageHeader>
                        <s.ProductPageText>Medication Management and Reminder App</s.ProductPageText>
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
                                At Gopher Industries we are creating a medication management and reminder application that aims to assist those disadvantaged and disabled to access to a higher degree of healthcare. Our app, ‘MediMind’ allows patients to adhere to routine and to promote the self-management of their condition without constant doctor or nurse supervision, in the hopes of preventing unnecessary relapses and potential complications.<br/><br/> Our app will assist those suffering from the three most prevalent conditions within Australia currently, Arthritis, Diabetes and Mental Health. In order to accommodate our elderly demographic, our app utilises several features which comply with their accessibility requirements. Such as, large block writing, minimal colours, simple wireframe design and more to not overstimulate our patients.
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
                                        <li>Authentication/authorisation log in page to keep patient profile confidential</li>
                                        <li>Patient profile which consists of patient’s personal details and current medications + dosages</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Reminders/notifications at the prescribed time to take medications</li>
                                        <li>Interaction with the app confirms they have taken their medication</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>A point system allowing patients to claim rewards such as discounts for abiding by their schedule</li>
                                        <li>Wishlist for patients to save rewards they wish to claim in the future</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Monthly reports including a graph of completion tracking their medication intakes and treatment results</li>
                                        <li>Congratulatory messages to positively reinforce patients for taking their medications</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
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

export default Medimind;
