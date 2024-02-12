"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider(){
    return (
        <motion.div className="flex justify-center"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.125}}
        >
            <div
                className="bg-gray-600 h-16 w-1 rounded-full align-middle sm:block bg-opacity-10"

            ></div>
        </motion.div>
    )
}