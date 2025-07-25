"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const d = getDirection(event, ref.current);
    const directions = ["top", "right", "bottom", "left"];
    setDirection(directions[d] as typeof direction);
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width, height, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (width / 2) * (width > height ? height / width : 1);
    const y = ev.clientY - top - (height / 2) * (height > width ? width / height : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "w-full rounded-xl overflow-hidden group relative shadow-lg border border-white/10",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative w-full h-80"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          {/* Dark overlay */}
          <motion.div className="group-hover:block hidden absolute inset-0 bg-black/50 z-10 transition-all duration-300" />

          {/* Image */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={imageUrl}
              alt="Project"
              width="1000"
              height="1000"
              className={cn("object-cover w-full h-full", imageClassName)}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Project Content BELOW image */}
      <motion.div
        variants={textVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "p-4 text-white space-y-2 bg-[#1a1a1a]",
          childrenClassName
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const variants = {
  initial: { x: 0, y: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 15 },
  bottom: { y: -15 },
  left: { x: 15 },
  right: { x: -15 },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  exit: { opacity: 0, y: 10 },
  top: { opacity: 1, y: -10 },
  bottom: { opacity: 1, y: 10 },
  left: { opacity: 1, x: -10 },
  right: { opacity: 1, x: 10 },
};
