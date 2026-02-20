"use client";

import Skills from "./skills";
import Education from "./education";
import Projects from "./projects";
import Image from "next/image";
import Achievements from "./achievement";
import { motion } from "motion/react";

const MotionImage = motion(Image);

export default function HomeClient({
    children: heatmapSlot,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="flex justify-between items-center mb-8">
                <h1 className=" text-5xl font-extrabold tracking-tighter">
                    Hi, deepvinci here
                </h1>
                <MotionImage
                    className="flex-shrink-0 rounded-full"
                    src="/pfp.jpg"
                    alt="profile picture"
                    width={80}
                    height={80}
                    drag
                    dragSnapToOrigin
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    dragPropagation
                    whileDrag={{ scale: 1.1 }}
                />
            </motion.div>
            <p className="mb-4 text-md text-gray-700 dark:text-[#bcbcbc]">
                {`I'm a Android and Fullstack web devloper and engineering student who builds, functional systems with a purpose. Currently i am deep diving
                into full stack devlopment, AI and Systems engineering.`}
            </p>

            <div className="my-8">{heatmapSlot}</div>

            <div className="my-8">
                <Projects />
            </div>

            <div className="my-8">
                <Achievements />
            </div>

            <div className="my-8">
                <Skills />
            </div>

            <div className="my-8">
                <Education />
            </div>
        </motion.section>
    );
}
