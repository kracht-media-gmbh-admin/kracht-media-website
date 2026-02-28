"use client";

import { ProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectPreviewProps = {
  project: ProjectData;
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-[var(--color-background)] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out h-full"
        style={{
          width: "100%",
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 40px 80px -20px rgba(0, 0, 0, 0.4)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Image Container */}
        <div
          className="relative w-full aspect-[3/2] md:aspect-[2/1] overflow-hidden"
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Year Badge */}
          <div
            className="absolute top-6 right-6 bg-[var(--color-accent)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-20"
          >
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col h-full">
          {/* Group / Category */}
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {project.group}
          </span>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold mb-2 leading-tight min-h-[2.5rem] line-clamp-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>

          {/* Short Description */}
          <p
            className="text-[var(--color-primary)]/70 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.tileDescription}
          </p>

          {/* View Project Link */}
          <div
            className="mt-auto flex items-center gap-3 text-[var(--color-accent)] text-sm font-bold tracking-widest uppercase transition-all duration-300"
          >
            <span>Projekt ansehen</span>
            <div className="w-8 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-12" />
          </div>
        </div>
      </article>
    </Link>
  );
}
