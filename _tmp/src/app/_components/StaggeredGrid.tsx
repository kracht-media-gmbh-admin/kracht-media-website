"use client";

import { motion } from "framer-motion";
import Video from "@/components/ui/Video";
import RoundedBox from "@/components/ui/RoundedBox";
import { videoAssets } from "@/data/assets";
import { cn } from "@/lib/utils";

export default function StaggeredGrid() {
  return (
    <div className="w-full relative py-12 md:py-32 flex flex-col items-center">
      <div
        className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
        style={{ perspective: "1000px" }}
      >

        {/* Main Featured Video */}
        <motion.div
          className="md:col-span-12 lg:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="group relative"
            whileHover={{
              scale: 1.02,
              rotateY: -2,
              rotateX: 1,
              z: 20
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <RoundedBox
              variant="glass"
              padding="p-0"
              className="relative aspect-video w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500"
              radius="rounded-[2rem]"
              depth
              hasSheen
            >
              <Video style={{ width: "100%", height: "100%", objectFit: "cover" }} video={videoAssets.HomeVideo1LandLoop} />
            </RoundedBox>
          </motion.div>
        </motion.div>

        {/* Vertical Side Video */}
        <motion.div
          className="md:col-span-6 lg:col-span-4 md:mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="group relative"
            whileHover={{
              scale: 1.05,
              rotateY: 4,
              rotateX: 2,
              z: 30
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-[var(--color-accent)] to-transparent rounded-[3rem] blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            <RoundedBox
              variant="glass"
              padding="p-0"
              className="relative aspect-[3/4] w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500"
              radius="rounded-[2.5rem]"
              depth
              hasSheen
            >
              <Video style={{ width: "100%", height: "100%", objectFit: "cover" }} video={videoAssets.HomeVideo2PortLoop} />
            </RoundedBox>
          </motion.div>
        </motion.div>

        {/* Bottom Offset Video */}
        <motion.div
          className="md:col-span-6 md:-mt-12 lg:-mt-20 self-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="group relative"
            whileHover={{
              scale: 1.05,
              rotateY: -3,
              rotateX: -2,
              z: 30
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--color-accent)]/30 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 transition duration-1000"></div>
            <RoundedBox
              variant="glass"
              padding="p-0"
              className="relative aspect-video w-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500"
              radius="rounded-[2rem]"
              depth
              hasSheen
            >
              <Video style={{ width: "100%", height: "100%", objectFit: "cover" }} video={videoAssets.HomeVideo3LandLoop} />
            </RoundedBox>
          </motion.div>
        </motion.div>

        {/* Decorative Text/Elements for visual appeal */}
        <motion.div
          className="hidden lg:block lg:col-span-4 lg:col-start-8 lg:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="border-l-2 border-[var(--color-accent)] pl-8 py-4">
            <h3 className="text-3xl font-bold text-[var(--color-background)] mb-4">Vibrant Stories</h3>
            <p className="text-[var(--color-background)]/70 text-lg max-w-[25ch]">Wir fangen Momente ein, die hängen bleiben. Visuelles Storytelling auf dem nächsten Level.</p>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Blurs */}
      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-[var(--color-secondary)]/10 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}

