import React, {useState} from "react";
import {VIDEO_SRC} from "@Assets/videos";
import * as s from "./StudentTimeline.style";
import StudentTimelineItem from "./StudentTimelineItem/StudentTimelineItem";
import axios from "axios";

const baseURL = "https://projectx-api-dot-sit-22t3-gopher-websit-a242043.ts.r.appspot.com/api/v1/timeline/student";

const StudentTimeline = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL, { crossdomain: true }).then((response) => {
            setData(response.data);
            setLoading(false);
        });
    }, []);

    console.log(data);

    return (
        <s.StudentTimelineContainer>
            <s.StudentTimelineVideo src={VIDEO_SRC.connections} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
            <s.StudentTimelineInnerContainer>
                <s.StudentTimelineRow>
                    <s.StudentTimelineHeader>Student Timeline</s.StudentTimelineHeader>
                    <s.StudentTimelineText>Our team is made up of students who go above and beyond for the company.<br/>Checkout the timeline of the Student's achievements.</s.StudentTimelineText>
                    <s.StudentTimelineForm>
                        <s.FloatingRow>
                            <s.TimelineGraphicContainer>
                                {!isLoading && data.map((data, idx) => (
                                    <StudentTimelineItem data={data} key={idx} />
                                ))}
                            </s.TimelineGraphicContainer>
                        </s.FloatingRow>
                    </s.StudentTimelineForm>
                </s.StudentTimelineRow>
            </s.StudentTimelineInnerContainer>
        </s.StudentTimelineContainer>
    );
};

export default StudentTimeline;
