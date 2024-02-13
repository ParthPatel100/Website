"use client"

import React from 'react';
import SectionHeading from "@/components/section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiencesData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";

function Experience() {
    const { ref } = useSectionInView("Experience");

    return (
        <section
            ref={ref}
            id="experience">
            <SectionHeading>
                My Experience
            </SectionHeading>

            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    boxShadow:"none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    borderRadius: "2rem"
                                }}
                                date = {item.date}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid rgba(0, 0, 0, 0.05)"
                                }}
                                icon={item.icon}
                                iconStyle={{
                                    background: "white"
                                }}
                            >
                                <h2 className="font-bold"> {item.name}</h2>
                                <h3> {item.title}</h3>
                                <div className="text-gray-400"> {item.location}</div>
                                <p> {item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>

                    ))
                }
            </VerticalTimeline>


        </section>
    );
}

export default Experience;