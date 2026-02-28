"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  { hour: 22, text: "Nachts arbeiten nur die Besten." },
  { hour: 5, text: "Der frühe Vogel macht den Krach." },
  { hour: 9, text: "Kaffee läuft, KRACHT geht los." },
  { hour: 18, text: "Feierabend? Erst wenn's richtig kracht." },
];

export default function FooterContactToggle() {
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");
  const [timeStr, setTimeStr] = useState("");
  const [joke, setJoke] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOn(false);
    setName("");
  }, [pathname]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, "0");
      setTimeStr(`${hours}:${mins}`);

      // Find the message for the current hour (latest one that is <= current hour)
      const sorted = [...MESSAGES].sort((a, b) => b.hour - a.hour);
      const msg = sorted.find((m) => hours >= m.hour) || sorted[0];
      setJoke(msg.text);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (pathname === "/contact") return null;

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim()) {
      router.push(`/contact?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="flex flex-col items-center py-20 text-center">
      <h2 className="text-4xl md:text-8xl font-bold mb-10 text-[#444444]">
        gemeinsam richtig <br />{" "}
        <span className="text-white">KRACH machen</span>
      </h2>

      <div className="relative flex items-center justify-center mb-10 h-24">
        <motion.div
          layout
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ borderRadius: "50px" }}
          className={`relative flex items-center bg-white overflow-hidden ${isOn
            ? "w-[300px] md:w-[500px] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            : "w-40"
            } h-20 shadow-lg`}
        >
          {/* Slamming Ball */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
            className={`absolute z-20 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${isOn ? "right-2" : "left-2"
              } ${isOn
                ? (name.trim() ? "bg-[#FFDB11] hover:bg-[#FFD000]" : "bg-gray-200")
                : "bg-gray-100 hover:bg-gray-200"
              }`}
            style={{
              boxShadow: isOn && name.trim()
                ? "inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 20px rgba(255, 219, 17, 0.5), 0 2px 8px rgba(0,0,0,0.2)"
                : "inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.05)"
            }}
            onClick={() => {
              if (!isOn) {
                setIsOn(true);
              } else if (name.trim()) {
                router.push(`/contact?name=${encodeURIComponent(name)}`);
              }
            }}
          >
            <AnimatePresence mode="wait">
              {!isOn ? (
                <motion.span
                  key="yes"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-gray-600 font-bold text-lg"
                >
                  Yes
                </motion.span>
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={name.trim() ? "black" : "#666666"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Input field area */}
          <div className="absolute inset-0 flex items-center pl-6 pr-20 overflow-hidden pointer-events-none">
            <AnimatePresence>
              {isOn && (
                <motion.div
                  key="input-wrapper"
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.05, duration: 0.2 }}
                  className="w-full flex items-center pointer-events-auto whitespace-nowrap overflow-hidden"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Dein Name..."
                    autoFocus
                    onBlur={() => {
                      if (name.trim() === "") {
                        setIsOn(false);
                      }
                    }}
                    className="w-full md:w-[380px] bg-transparent text-2xl md:text-3xl outline-none text-black font-bold placeholder-gray-400 whitespace-nowrap overflow-hidden"
                    style={{ textOverflow: "clip" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleSubmit}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-4 opacity-70 select-none">
        <span className="text-yellow-500 font-mono text-2xl">{timeStr}</span>
        <p className="text-lg">{joke}</p>
      </div>
    </div>
  );
}
