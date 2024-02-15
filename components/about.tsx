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
    border: '1px solid #fff',
}

export default function About() {
    const { ref } = useSectionInView("About");


    return (
        <motion.section
            ref={ref}
            className="mb-20 mx-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[7rem] mt-20 "
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id={"about"}
        >
            <SectionHeading>About me</SectionHeading>
            <div className="flex flex-col items-center gap-16 ">
                <div className="relative flex justify-center items-center max-w-full h-fit">
                    <Image src={profilePic} alt="Picture" quality={95} style={imageStyle} width={200} height={200} />
                </div>

                <div>
                    {"Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu Hello, I'm under the water, please help me, ahuuuuuuuuuuu"}
                </div>
            </div>

        </motion.section>
    );
}