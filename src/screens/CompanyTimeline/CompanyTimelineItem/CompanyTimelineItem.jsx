import React from "react";
import * as s from "./CompanyTimelineItem.style";
import {DateTime} from "luxon";
const CompanyTimelineItem = ({ data }) => (
    <s.CompanyTimeline_Item className="Companytimeline-item">
        <s.CompanyTimeline_Item_Content className="CompanyTimeline_Item_Content">
            <s.spanTag className="spanTag" style={{background: "rgb(77, 146, 226)"}}>
                {data.teamName}
            </s.spanTag>
            <s.time>{DateTime.fromJSDate(new Date(data.date)).toFormat(
                "EEEE, dd/MM/yy - hh:mm a"
            )}</s.time>
            <s.CompanyTimeline_Item_Title>{data.title}</s.CompanyTimeline_Item_Title>
            <s.p>{data.description}</s.p>
            <s.circle className="circle"></s.circle>
        </s.CompanyTimeline_Item_Content>
    </s.CompanyTimeline_Item>
);

export default CompanyTimelineItem;
