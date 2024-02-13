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
    borderRadius: '2rem',
    border: '1px solid #fff'
}

export default function About() {
    const { ref } = useSectionInView("About");


    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[9rem]"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id={"about"}
        >
            <SectionHeading>About me</SectionHeading>
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-6">
                <div className="aspect-square object-cover max-w-52 max-h-52 rounded-full mx-auto">
                    <Image src={profilePic} alt="Picture" quality={95} style={imageStyle} width={200} height={200}/>
                </div>

                <div>
                    {"Hello, I'm under the water, please help me, ahuuuuuuuuuuu"}
                </div>
            </div>

        </motion.section>
    );
}