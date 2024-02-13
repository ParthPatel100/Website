import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import testingPic from "@/public/images/profile_pic.png"
import { MdWorkOutline } from "react-icons/md";


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
        name: "University of Calgary",
        title: "BSc Computer Science",
        location: "Calgary, AB",
        description:
            "Currently in my final year at the University of Calgary",
        icon: React.createElement(LuGraduationCap),
        date: "Sept 2019 - May 2024",
    },
    {
        name: "Cisco",
        title: "Software Engineer Intern",
        location: "Calgary, AB",
        description:
            "During my 16-month internship with the Cisco Secure Endpoint data team, I contributed to the development of high-throughput, fault-tolerant data streaming pipelines and scalable data storage solutions.",
        icon: React.createElement(MdWorkOutline),
        date: "June 2022 - Oct 2023",
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
    },
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
    "Python",
    "Flask",
    "Java",
    "Scala",
    "Akka",
    "AWS",
    "Ruby",
    "Kafka",
    "Apache Flink",
    "Chef",
    "Docker",
    "RabbitMQ"
] as const;