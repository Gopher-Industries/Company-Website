import React from "react";

import * as s from "./AboutUs.style";
import PageContainer, {PageHeader}  from "@Layout/Page/Page.style"
import Card from "@Components/Card/Card";
import AboutVideo from "@Assets/videos/about.mp4";

const AboutUs = () => {
    return (
        <PageContainer>
            <s.AboutUsContainer>
                <Card animate={true}>
                    <s.AboutUsRow>
                        <s.AboutUsItem>
                            <PageHeader>About Us</PageHeader>
                            <p>Gopher Industries is a Deakin University-owned company dedicated to providing consultancy and software solutions that make people's lives easier.</p>
                            <p><strong>Our vision</strong> is to build healthier communities through enabling technologies.</p>
                            <p><strong>Our mission</strong> is to develop innovative products to monitor, diagnose and manage health and well-being using state-of-the-art wearable technology, IoT and AI solutions to improve people's health and enable better access to healthcare for the elderly, disadvantaged and disabled.</p>
                        </s.AboutUsItem>
                        <s.AboutUsItem>
                            <video src={AboutVideo} width="100%" controls={true}></video>
                        </s.AboutUsItem>
                    </s.AboutUsRow>
                </Card>
            </s.AboutUsContainer>
        </PageContainer>
    );
};

export default AboutUs;
