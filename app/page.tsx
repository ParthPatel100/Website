import Intro from "@/components/intro";
import {Shapes} from "@/components/Shapes";
import React from "react";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="flex flex-col items-center ">
            <div
                className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen items-center align-middle content-center justify-center">
                <Intro/>
                <Shapes/>
            </div>
            <SectionDivider/>
            <About/>
            <Projects/>

        </main>
    );
}
