"use client";

import React, {useEffect} from "react";
import {motion} from "framer-motion";
import Image from "next/image"
import profilePic from '../public/images/profile_pic.png'
import SectionHeading from "@/components/section-heading";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

const imageStyle = {
    borderRadius: '100%',
    border: '1px solid #000000',
}

export default function About() {
    const { ref } = useSectionInView("About");


    return (
        <motion.section
            ref={ref}
            className="mb-12 mx-4 max-w-[45rem] text-center leading-6 sm:mb-24 scroll-mt-[7rem] mt-20 "
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id={"about"}
        >
            <SectionHeading>About me</SectionHeading>
            <div className="flex flex-col items-center gap-16 ">
                <div className="relative flex justify-center items-center max-w-full h-fit">
                    <Image src={profilePic} alt="Picture" quality={95} style={imageStyle} width={275} height={275} />
                </div>

                <div className="text-left flex flex-col gap-4">
                    <p className="text-left">
                        Hey there! I'm <span className="font-bold">Parth Patel</span>, a passionate developer graduating
                        from the<span className="font-bold"> University of Calgary </span>
                        in <span className="font-bold"> May 2024. </span>
                        With a strong foundation in <span className="font-bold"> Computer Science </span> and a knack
                        for problem-solving, I thrive in the dynamic world of software development.

                        <br/>
                        <br/>
                        My journey in programming began with a curiosity-driven exploration during my early years,
                        and it has evolved into a career path that allows me to create innovative solutions to complex
                        challenges, from building intuitive user interfaces to optimizing backend systems,
                        I strive to blend technical expertise with a human-centered approach.
                        It's been a journey of trial and error, but each challenge has helped me grow.
                        <br/>
                        <br/>

                        Beyond lines of code and algorithms, I'm all about staying active.
                        I love going for runs, playing squash, and hitting the badminton court whenever I get the
                        chance.
                        And when it's time to unwind, you'll probably find me playing video games—I'm particularly into
                        fast-paced ones <span className="italic">mainly F1 23</span>.

                        <br/>
                        <br/>
                        As I'm getting ready to graduate from the University of Calgary in May 2024,
                        I'm grateful for all the experiences that have shaped me.
                        I'm excited to put my skills to good use and make a difference in the world of software
                        engineering.

                        <br/>
                        <br/>
                        Let's connect and build some awesome stuff together!
                    </p>

                </div>
            </div>

        </motion.section>
    );
}