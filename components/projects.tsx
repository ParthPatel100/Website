"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.2);
    const firstList = projectsData.filter((project, index) => index % 2 === 0);
    const secondList = projectsData.filter((project, index) => index % 2 !== 0);

    return (
        <>
            <SectionHeading> My Projects </SectionHeading>
            <div className=" lg:grid lg:grid-cols-2 xl:max-w-[100rem] lg:mx-12 mx-1 lg:my-3 my-2 lg:gap-6 scroll-mt-[12rem] md:mx-16 max-w-full flex flex-col gap-12"
                 id={"projects"}
            ref={ref}>
                {firstList.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
                {secondList.map((project, index) => (
                    <React.Fragment key={index + firstList.length}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </>

);
}
