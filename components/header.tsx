"use client"
import React from 'react'
import {motion} from 'framer-motion';
import {links} from "@/lib/data"
import Link from "next/link";
import clsx from "clsx";
import {type} from "node:os";
import {useActiveSectionContext} from "@/context/active-section-context";

// <div
//     className="bg-gradient-to-br from-teal-100 to-rose-100 h-full w-screen relative -z-10 blur-[10rem] ">
// </div>
export default function Header() {
    const {activeSection, setActiveSection} = useActiveSectionContext()

    return (

        <header className="z-[999] relative ">
            <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-screen rounded-none border border-white border-opacity-40
                            bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.7rem] sm:top-6
                            sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                        initial={{y: -100, x: "-50%", opacity: 0}}
                        animate={{y: 0, x: "-50%", opacity: 1}}
            >

                <nav
                    className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {links.map((link => (
                            <li className="h-3/4 flex items-center justify-center relative" key={link.hash}
                                // initial={{y: -100, opacity: 0}}
                                // animate={{y: 0, opacity: 1}}
                            >
                                <Link
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 transition ", {
                                        "text-slate-950": activeSection === link.name
                                    })}
                                    href={link.hash}
                                    onClick={() => setActiveSection(link.name)}
                                >
                                    {link.name}

                                    {link.name === activeSection && (
                                        <span
                                            className="bg-slate-300 rounded-full absolute inset-0 -z-10 "
                                        ></span>)}

                                </Link>
                            </li>
                        )))}
                    </ul>
                </nav>
            </motion.div>


        </header>
    )
}