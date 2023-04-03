import React from "react";
import * as s from "./CompanyTimelineItem.style";

const CompanyTimelineItem = ({ data }) => (
    <s.CompanyTimeline_Item className="Companytimeline-item">
        <s.CompanyTimeline_Item_Content className="CompanyTimeline_Item_Content">
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
        </s.CompanyTimeline_Item_Content>
    </s.CompanyTimeline_Item>
);

export default CompanyTimelineItem;
