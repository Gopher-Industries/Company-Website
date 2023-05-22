import React, {useState} from "react";
import {VIDEO_SRC} from "@Assets/videos";
import * as s from "./CompanyTimeline.style";
import CompanyTimelineItem from "./CompanyTimelineItem/CompanyTimelineItem";

import axios from "axios";
import {BASE_API_URL} from "@Settings/api";
const timelineurl = BASE_API_URL + "/timeline/team";

const CompanyTimeline = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios.get(timelineurl, { crossdomain: true }).then((response) => {
            setData(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <s.CompanyTimelineContainer>
            <s.CompanyTimelineVideo src={VIDEO_SRC.connections} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
            <s.CompanyTimelineInnerContainer>
                <s.CompanyTimelineRow>
                    <s.CompanyTimelineHeader>Company Timeline</s.CompanyTimelineHeader>
                    <s.CompanyTimelineText>The team at Gopher Industries continues to work hard to create products that build healthier communities.<br/>Checkout the timeline of the company's achievements.</s.CompanyTimelineText>
                    <s.CompanyTimelineForm>
                        <s.FloatingRow>
                            <s.TimelineGraphicContainer>
                                {!isLoading && data.length > 0 && data.map((data, idx) => (
                                    <CompanyTimelineItem data={data} key={idx} />
                                ))}
                            </s.TimelineGraphicContainer>
                            {!isLoading && data.length === 0 && (
                                <s.NoItems>Oh no! There doesn't seem to be anything to show. Sorry about that.</s.NoItems>
                            )}
                        </s.FloatingRow>
                    </s.CompanyTimelineForm>
                </s.CompanyTimelineRow>
            </s.CompanyTimelineInnerContainer>
        </s.CompanyTimelineContainer>
    );
};

export default CompanyTimeline;
