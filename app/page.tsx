import Intro from "@/components/intro";
import {Shapes} from "@/components/Shapes";
import React from "react";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Skewb from "@/components/Skewb";
import RubiksCube from "@/components/Skewb";
import MirrorCube from "@/components/mirrorCube";



export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div
                className="bg-gradient-to-br from-teal-100 to-rose-100 h-screen w-screen absolute top-0 blur-[5rem] max-w-full">
            </div>
            <div
                className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen items-center
                align-middle content-center max-w-full">
                <Intro/>
                <Shapes/>

                {/*<RubiksCube/>*/}
                {/*<MirrorCube/>*/}
            </div>
            <SectionDivider/>
            <About/>
            <Projects/>
            <Skills/>
            <Experience/>

        </main>
    );
}
