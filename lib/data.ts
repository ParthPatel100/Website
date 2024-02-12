import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import testingPic from "@/public/images/profile_pic.png"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [

    {
        title: "NetFit",
        description:
            "a web-based fitness app offering simple exercise tracking, progress pictures, and a community for sharing workout inspiration and support",
        tags: ["React", "MongoDB", "Tailwind", "Javascript", "Node.js"],
        imageUrl: testingPic,
        githubLink: ""
    },
    {
        title: "Study Spark",
        description:
            "an AI study tool app to help students summarize notes as well as answer course related queries using intelligent RAG indexing and retrieval",
        tags: ["Python", "Flask", "Supabase", "Tailwind", "Svelte"],
        imageUrl: testingPic,
        githubLink: ""
    },
    {
        title: "Calendar-ify",
        description:
            "A calendar application with integral data analytics, processing user data from completed tasks, events, and logged physical activities",
        tags: ["Javascript", "React"],
        imageUrl: testingPic,
        githubLink: ""
    },
    {
        title: "Instacart Scraper",
        description:
            "Personal side project: A simple cost-splitting application to simplify the equitable sharing of shopping expenses among friends, addressing the common challenge of dividing costs accurately.",
        tags: ["Scala"],
        imageUrl: testingPic,
        githubLink: ""
    },
    {
        title: "This Website",
        description:
            "This portfolio website",
        tags: ["React", "Tailwind", "Typescript", "Three.js"],
        imageUrl: testingPic,
        githubLink: "https://www.sitepoint.com/community/t/white-space-to-the-right-of-a-site-on-mobile-chrome-issue-help/373665"
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;