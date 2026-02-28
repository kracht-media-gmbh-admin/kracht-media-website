"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/types";
import RoundedBox from "./RoundedBox";

interface ProjectCardProps {
    project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="block w-full h-full">
            <RoundedBox
                variant="none"
                padding="p-0"
                clip
                depth
                hasSheen
                className="w-full aspect-[4/5] cursor-pointer"
            >
                <motion.div
                    className="relative w-full h-full"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                >
                    {/* Background Image - Scales slightly on hover */}
                    <motion.div
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.05 }
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>

                    {/* Top Overlay - Title pops down */}
                    <motion.div
                        variants={{
                            rest: { y: "-100%" },
                            hover: { y: "0%" }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-0 w-full h-1/3 bg-black/60 flex items-center justify-center p-4 z-10"
                    >
                        <h3 className="text-white font-[var(--font-heading)] font-bold text-2xl md:text-4xl text-center">
                            {project.title}
                        </h3>
                    </motion.div>

                    {/* Bottom Overlay - Info pops up */}
                    <motion.div
                        variants={{
                            rest: { y: "100%" },
                            hover: { y: "0%" }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-0 left-0 w-full h-1/3 bg-[var(--color-primary)]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 z-10 border-t border-[var(--color-accent)]"
                    >
                        <div className="text-[var(--color-surface)] font-[var(--font-body)] text-sm md:text-base font-medium tracking-wide">
                            {project.year} | {project.group}
                        </div>
                        <div className="text-[var(--color-accent)] font-bold mt-1 text-lg">
                            {project.title}
                        </div>
                    </motion.div>
                </motion.div>
            </RoundedBox>
        </Link>
    );
}

