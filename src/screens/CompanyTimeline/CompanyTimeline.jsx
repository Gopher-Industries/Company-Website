import React from "react";
import HomeVideo from "@Assets/videos/connections.mp4";
import * as s from "./CompanyTimeline.style";
import CompanyTimelineData from"./CompanyData";
import CompanyTimelineItem from "./CompanyTimelineItem/CompanyTimelineItem";


const CompanyTimeline = () => {
    return (
        <s.CompanyTimelineContainer>
            <s.CompanyTimelineVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
            <s.CompanyTimelineInnerContainer>
                <s.CompanyTimelineRow>
                    <s.CompanyTimelineHeader>Company Timeline</s.CompanyTimelineHeader>
                    <s.CompanyTimelineText>The team at Gopher Industries continues to work hard to create products that build healthier communities.<br/>Checkout the timeline of the company's achievements.</s.CompanyTimelineText>
                    <s.CompanyTimelineForm>
                        <s.FloatingRow>
                            <s.TimelineGraphicContainer>
                                {CompanyTimelineData.map((data, idx) => (
                                    <CompanyTimelineItem data={data} key={idx} />
                                ))}
                            </s.TimelineGraphicContainer>
                        </s.FloatingRow>
                    </s.CompanyTimelineForm>
                </s.CompanyTimelineRow>
            </s.CompanyTimelineInnerContainer>
        </s.CompanyTimelineContainer>
    );
};

export default CompanyTimeline;
