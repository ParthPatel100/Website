import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import studySparkLogo from "@/public/images/study_spark_logo_2.png"
import websiteLogo from "@/public/images/atom.png"
import fairshareLogo from "@/public/images/fairshare_logo_2.png"
import netfitLogo from "@/public/images/netfit_logo.png"
import calendargramLogo from "@/public/images/calendargram_logo.png"
import { MdWorkOutline } from "react-icons/md";


export const linkedInLink = "https://www.linkedin.com/in/parth-patel-692418211/"
export const githubLink = "https://github.com/ParthPatel100"
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
            "(In progress) a web-based fitness app offering simple exercise tracking, progress pictures, a community for sharing workout inspiration and support " +
            "and direct access to trainer content, encouraging and guiding users",
        tags: ["React", "MongoDB", "Tailwind", "Javascript", "Node.js"],
        imageUrl: netfitLogo,
        githubLink: "https://csgit.ucalgary.ca/parth.patel1/seng513-202401-group-10"
    },
    {
        title: "StudySpark",
        description:
            "(In Progress) an AI study tool app to help students summarize notes using Amazon Textract as well as answer course related " +
            "queries by leveraging the 'thenlper/gte-large' NLP model with an intelligent RAG indexing and retrieval " +
            "and openai API calls to ChatGPT with refined queries.",
        tags: ["Python", "Flask", "Supabase", "Tailwind", "Svelte"],
        imageUrl: studySparkLogo,
        githubLink: "https://github.com/ParthPatel100/study-spark-ai"
    },
    {
        title: "CalendarGram",
        description:
            "A collaborative calendar application with integral data analytics, processing user data from completed tasks, " +
            "events, and logged physical activities as well as traditional social media features such as post achievements",
        tags: ["Javascript", "React"],
        imageUrl: calendargramLogo,
        githubLink: "https://github.com/ParthPatel100/Social-media-Project"
    },
    {
        title: "This Website",
        description:
            "Built this website using React, Tailwind and Typescript and used Three.js to create interactive 3D geometries on the homepage",
        tags: ["React", "Tailwind", "Typescript", "Three.js"],
        imageUrl: websiteLogo,
        githubLink: "https://github.com/ParthPatel100/Website"
    },
    {
        title: "FairShare",
        description:
            "Personal side project: A simple cost-splitting application to simplify the equitable sharing of shopping expenses among roommates, addressing the common challenge of dividing costs accurately.",
        tags: ["Scala"],
        imageUrl: fairshareLogo,
        githubLink: "https://github.com/ParthPatel100/FairShare"
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