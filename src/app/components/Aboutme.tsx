"use client";

import React, { useState } from "react";
import Image from "next/image";


export default function Aboutme() {
  const [showMore, setShowMore] = useState(false);

  const bulletSections = [
    {
      title: "🔹 Web Development",
      points: [
        "Skilled in React.js, Next.js, Node.js, and RESTful APIs.",
        "Real-time apps with Socket.io, JWT auth, and TailwindCSS.",
      ],
    },
    {
      title: "🔹 AI & System Design",
      points: [
        "Built scalable AI platforms like JobGenix and RideX.",
        "Used Google Gemini API, Redis, Docker, and Cloudinary.",
      ],
    },
    {
      title: "🔹 Leadership & Community",
      points: [
        "Led 3+ national hackathons like SprintHacks 3.0, IEEE.",
        "Mentored juniors through coding challenges and events.",
      ],
    },
    {
      title: "🔹 Certifications",
      points: [
        "SQL for Data Analysis – Linkedin",
        "Introduction to Cybersecurity – Cisco",
        "Python Programming Fundamentals – Cisco",
        "Javascript – Linkedin",
        "Power BI, etc",
      ],
    },
  ];

  return (
    <div className="relative w-full text-white py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl text-gray-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        About me
      </h2>


      {/* Card and Image */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-16 max-w-5xl w-full">
        {/* Info Card */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#3f1f3f]/30 via-[#2e2e2e]/30 to-[#1f1f1f]/30 border border-[#5a5a5a] rounded-xl p-6 backdrop-blur-md bg-opacity-10 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hello, I'm Shruti Sharma
          </h3>
          <p className="text-base font-medium text-neutral-100">
            I'm a passionate Web Developer with a creative mindset. I transform
            ideas into elegant, user-centric digital experiences using modern web
            technologies. My journey in web development is driven by a perfect
            blend of technical expertise and artistic vision.
          </p>

          {/* Toggle Button and Details */}
          <div>
            {!showMore ? (
              <button
                onClick={() => setShowMore(true)}
                className="mt-4 text-sm text-pink-400 underline hover:text-pink-300 transition"
              >
                Read more
              </button>
            ) : (
              <>
                <div className="mt-4 space-y-4 text-sm text-neutral-100">
                  {bulletSections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold">{section.title}</h4>
                      <ul className="list-disc list-inside ml-4">
                        {section.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowMore(false)}
                  className="mt-4 text-sm text-pink-400 underline hover:text-pink-300 transition block"
                >
                  Read less
                </button>
              </>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/assets/itsme.jpg"
            alt="Shruti Sharma"
            width={350}
            height={200}
            className="rounded-full border-4 border-pink-500 shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
