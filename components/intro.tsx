"use client"
import React, {useEffect, useRef} from 'react'
import {motion} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {useInView} from "react-intersection-observer";

import {useActiveSectionContext} from "@/context/active-section-context";
import {useReducerWithReduxDevtools} from "next/dist/client/components/use-reducer-with-devtools";
import {useSectionInView} from "@/lib/hooks";


export default function Intro(){
    const { ref } = useSectionInView("Home", 0.5);

    return(
        <motion.div ref={ref}
                    className="grid grid-rows-2 justify-center items-center font-light text-left leading-none tracking-tighter w-full"
                    aria-label="Parth Patel"
                    initial={{x: -100, y:"0%", opacity: 0}}
                    animate={{ x:0, y:"0%", opacity:1}}>
            <h1 className="text-[6rem] text-center"> Parth Patel</h1>
                <div className="text-[1.4rem] font-extralight mx-auto place-self-start">
                    <TypeAnimation
                        sequence={[
                            'I am a Software Engineer',
                            1500,
                            'I am a Backend Engineer',
                            1500,
                            'I am a Fullstack Developer',
                            1500
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>


        </motion.div>
    )
}