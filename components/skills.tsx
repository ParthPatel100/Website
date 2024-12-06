"use client";

import React, {useEffect} from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="max-w-[53rem] scroll-mt-28 text-center mt-20 mb-20"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    
                    <motion.li
                        className="bg-white rounded-2xl px-5 py-3 shadow-xl"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >

                        <div className="flex flex-auto gap-2 justify-center items-center">
                            <motion.img 
                                src={skill.logo.src}
                                className="h-6"
                            />
                            {skill.text}
                        </div>
                    
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}