import React from "react";
import HomeVideo from "@Assets/videos/connections.mp4";
import * as s from "./StudentTimeline.style";
import StudentTimelineData from"./StudentData";
import StudentTimelineItem from "./StudentTimelineItem/StudentTimelineItem";


const StudentTimeline = () => {
    return (
        <s.StudentTimelineContainer>
            <s.StudentTimelineVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
            <s.StudentTimelineInnerContainer>
                <s.StudentTimelineRow>
                    <s.StudentTimelineHeader>Student Timeline</s.StudentTimelineHeader>
                    <s.StudentTimelineText>Our team is made up of students who go above and beyond for the company.<br/>Checkout the timeline of the Student's achievements.</s.StudentTimelineText>
                    <s.StudentTimelineForm>
                        <s.FloatingRow>
                            <s.TimelineGraphicContainer>
                                {StudentTimelineData.map((data, idx) => (
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
