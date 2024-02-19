"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {sendEmail} from "@/server/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, {Toaster} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import {linkedInLink} from "@/lib/data"
import {githubLink} from "@/lib/data"

export default function Contact() {


    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(90%,38rem)] text-center mt-[4rem]"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <Toaster position="top-right"/>
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:patelhparth@gmail.com">
                    patelhparth@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg transition-all border border-black/5 "
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                    id = "senderEmail"
                />
                <textarea
                    className="h-52 my-3 rounded-lg p-4 transition-all border border-black/5 "
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    id = "message"
                />
                <SubmitBtn />
            </form>
            <div className="flex flex-row justify-center items-center gap-4">
                <Link className="flex content-end items-end" href={linkedInLink} passHref target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </Link>
                <Link className="flex content-end items-end" href={githubLink} passHref target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </Link>
            </div>
        </motion.section>
    );
}
