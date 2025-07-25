"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
// import { FiCloudDownload, FiCheck } from "react-icons/fi";

export const AnimatedDownloadButton = () => {
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (hovered) {
      setProgress(0);
      setCompleted(false);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setCompleted(true);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setProgress(0);
        setCompleted(false);
      }}
    >
      <AnimatePresence mode="wait">
        {!hovered && (
          <motion.span
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute"
          >
            Download Resume
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center absolute"
          >
            <svg className="w-8 h-8 transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="12"
                stroke="#393BB2"
                strokeWidth="3"
                fill="transparent"
                className="opacity-30"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="12"
                stroke="#E2CBFF"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 12}
                strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * 12}
                animate={{ strokeDashoffset: (1 - progress / 100) * 2 * Math.PI * 12 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </svg>

            {completed ? (
              <FiCheck size={20} className="absolute text-green-400" />
            ) : (
              <BsFillCloudDownloadFill size={20} className="absolute" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
