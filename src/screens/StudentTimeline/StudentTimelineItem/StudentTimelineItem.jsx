import React from "react";
import * as s from "./StudentTimelineItem.style";

const StudentTimelineItem = ({ data }) => (
    <s.StudentTimeline_Item className="Studenttimeline-item">
        <s.StudentTimeline_Item_Content className="StudentTimeline_Item_Content">
            <s.spanTag className="spanTag" style={{ background: data.category.color}}>
                {data.category.tag}
            </s.spanTag>
            <s.time>{data.date}</s.time>
            <s.p>{data.text}</s.p>
            {data.link && (
            <s.a className="styled-link" href={data.link.url} target="_blank" rel="noopener noreferrer">
                {data.link.text}
            </s.a>
            )}
            <s.circle className="circle"></s.circle>
        </s.StudentTimeline_Item_Content>
    </s.StudentTimeline_Item>
);

export default StudentTimelineItem;
