import React from "react";
import * as s from "./StudentTimelineItem.style";
import {DateTime} from "luxon";

const StudentTimelineItem = ({ data }) => {

    return (
        <s.StudentTimeline_Item className="Studenttimeline-item">
            <s.StudentTimeline_Item_Content className="StudentTimeline_Item_Content">
                <s.spanTag className="spanTag" style={{background: "rgb(77, 146, 226)"}}>
                    {data.fullName}
                </s.spanTag>
                <s.time>{DateTime.fromJSDate(new Date(data.date)).toFormat(
                    "EEEE, dd/MM/yy - hh:mm a"
                )}</s.time>
                <s.StudentTimeline_Item_Title>{data.title}</s.StudentTimeline_Item_Title>
                <s.p>{data.description}</s.p>
                <s.circle className="circle"></s.circle>
            </s.StudentTimeline_Item_Content>
        </s.StudentTimeline_Item>
    );
};

export default StudentTimelineItem;
