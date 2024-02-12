"use client";
import { projectsData } from "@/lib/data";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {useRef} from "react";
import Link from "next/link";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    githubLink
    }: ProjectProps){
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.30 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="mb-3 sm:mb-8 last:mb-0 flex justify-center align-middle content-center items-center"
        >
            <section
                ref={ref}
                className=" bg-gradient-to-br from-sky-50 to-fuchsia-50  grid grid-cols-2 grid-rows-5 border border-black/5 overflow-hidden rounded-3xl hover:shadow-2xl w-screen md:grid-rows-3 min-h-72 my-10 mx-4 max-w-[50rem]">
                <div className="row-start-1 row-span-2 col-start-1 col-span-2 flex flex-col align-middle justify-center content-center items-center md:col-span-1">
                    <Image
                        src={""}
                        alt="Project I worked on"
                        quality={95}
                        width = {100}
                        height={100}
                        objectFit="fill"
                        sizes="20px"/>

                </div>

                <div
                    className="row-start-3 row-span-3 col-start-1 col-span-2 flex flex-col pt-4 pb-7 px-7 sm:pr-2 sm:pt-10 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-3">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-[1.8rem] leading-relaxed text-gray-700">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-8">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 ml-auto mr-5">
                        <Link href={githubLink} passHref target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </Link>

                    </div>
                </div>

            </section>
        </motion.div>
    )
}
