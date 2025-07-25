"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="w-full  min-h-screen font-sans md:px-10 relative z-10" ref={containerRef}>
      {/* Heading */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className=" mt-20 text-5xl md:text-6xl  text-white dark:text-white max-w-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
         Work Experience
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const dotRef = useRef<HTMLDivElement>(null);
          const [isActive, setIsActive] = useState(false);

          useMotionValueEvent(scrollYProgress, "change", () => {
            if (dotRef.current && containerRef.current) {
              const containerTop =
                containerRef.current.getBoundingClientRect().top;
              const dotTop = dotRef.current.getBoundingClientRect().top;
              const distanceFromTop = dotTop - containerTop;

              if (scrollYProgress.get() * height >= distanceFromTop - 100) {
                setIsActive(true);
              } else {
                setIsActive(false);
              }
            }
          });

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Left side: Dot and Desktop Title */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div
                  ref={dotRef}
                  className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "ring-4 ring-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                      : ""
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 dark:bg-white"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    } border border-neutral-300 dark:border-neutral-700`}
                  />
                </div>
                <h3
                  className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Right side: Content & Mobile Title */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3
                  className={`md:hidden block text-2xl mb-4 text-left font-bold transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Vertical Glowing Line */}
<motion.div
  style={{ height: heightTransform }}
  className="absolute left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-pink-400 via-50% to-purple-500 to-90% drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
>
  <div className="w-full h-full" />
</motion.div>
   </div>
    </div>
  );
};
