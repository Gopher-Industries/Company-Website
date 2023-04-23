import React from "react";
import * as s from "./ContactUs.style";
import HomeVideo from "@Assets/videos/connections.mp4";

import ContactForm from "@Components/ContactForm/ContactForm";


const ContactUs = () => {


    return (
        <s.ContactUsContainer>
            <s.ContactUsInnerContainer>
                <s.ContactUsTop>
                    <s.ContactUsRow>
                        <s.ContactPageHeader>Contact Us</s.ContactPageHeader>
                        <s.ContactPageText>Our team will be happy to answer all your questions. <br/> Fill out the form below and
                            we’ll be in touch as soon as possible</s.ContactPageText>
                        <s.ContactPageForm>
                            <s.FloatingRow>
                                <ContactForm />
                            </s.FloatingRow>
                        </s.ContactPageForm>
                    </s.ContactUsRow>
                    <s.ContactUsVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ContactUsTop>
                <s.ContactUsBottom />
            </s.ContactUsInnerContainer>
        </s.ContactUsContainer>

    );
};

export default ContactUs;
