import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

import * as s from "./ContactForm.style";
import TextInput from "@Components/TextInput/TextInput";
import TextArea from "@Components/TextArea/TextArea";
import Button from "@Components/Button/Button";

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';


const ContactForm = () => {
    const form = useRef();
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessageType, setStatusMessageType] = useState("");
    const [statusMessageContent, setStatusMessageContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zgibity', 'template_0da3nfb', form.current, 'pY1m3398ljafwJlDN')
            .then((result) => {
                setStatusMessageContent("Message sent");
                setStatusMessageType("success");
                setShowStatusMessage(true);
            }, (error) => {
                setStatusMessageContent("Message not sent");
                setStatusMessageType("error");
                setShowStatusMessage(true);
            });

    };

    return (
        <s.ContactFormContainer>
            <s.ContactFormLeft>
                <form ref={form} onSubmit={handleSubmit}>
                    <s.Row items={2} style={{justifyContent:'left'}}>
                        <s.FormTitle>Send us a Message</s.FormTitle>
                    </s.Row>
                    <s.Row items={2}>
                        <TextInput name={"form-name"} id={"form-name"} placeholder={"Your Name"} required={true} />
                        <TextInput name={"form-email"} id={"form-email"} placeholder={"Your Email"} required={true} />
                    </s.Row>
                    <s.Row items={1}>
                        <TextInput name={"form-subject"} id={"form-subject"} placeholder={"Subject"} required={true} />
                    </s.Row>
                    <s.Row items={1}>
                        <TextArea name={"form-message"} id={"form-message"} placeholder={"Message"} required={true} rows={5} />
                    </s.Row>
                    {showStatusMessage && (
                        <s.Row items={1}>
                            <s.FormStatus $type={statusMessageType}>{statusMessageContent}</s.FormStatus>
                        </s.Row>
                    )}
                    <s.Row items={1}>
                        <Button placeholder={"Send Message"} name={"form-submit"} id={"form-submit"} />
                    </s.Row>
                </form>
            </s.ContactFormLeft>
            <s.ContactFormRight>
                <s.ContactColItem>
                    Contact Information
                </s.ContactColItem>
                <s.ContactColItem>
                    <s.ColItemIcon><RoomOutlinedIcon /></s.ColItemIcon>
                    <s.ColItemText>Deakin's Burwood Campus, 221 Burwood Hwy, Burwood VIC 3125</s.ColItemText>
                </s.ContactColItem>
                <s.ContactColItem>
                    <s.ColItemIcon><EmailOutlinedIcon /></s.ColItemIcon>
                    <s.ColItemText>bahar.nakisa@deakin.edu.au<br/>karmakar@deakin.edu.au</s.ColItemText>
                </s.ContactColItem>
                <s.ContactColItem>
                    <s.ColItemIcon><PhoneCallbackOutlinedIcon /></s.ColItemIcon>
                    <s.ColItemText>Bahareh Nakisa<br/> +61 3 5227 3816<br/><br/>Chandan Karmakar<br/>+61 3 5227 3079</s.ColItemText>
                </s.ContactColItem>
            </s.ContactFormRight>
        </s.ContactFormContainer>
    );
};

export default ContactForm;
