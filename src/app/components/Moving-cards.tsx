"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="min-screen h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-black/[0.05] items-center justify-center relative overflow-hidden z-50">
      <h2 className="text-5xl md:text-6xl text-gray-300 mb-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        Skills
      </h2>

      {/* Background track for the cards */}
      <div className="w-full max-w-6xl px-4 py-4 bg-neutral-700/30 rounded-xl shadow-md relative z-0">
        <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
      </div>
    </div>
  );
}


const testimonials = [
  {
    image:"/assets/html5.png",
    label: "HTML",
  },
  {
    image:"/assets/Css.png",
    label: "CSS",
  },
  {
    image:"/assets/AWS.png",
    label: "AWS",
  },
  {
    image:"/assets/Firebase.png",
    label: "Firebase",
  },
  {
    image:"/assets/api.png",
    label: "Api",
  },
  {
    image:"/assets/C.png",
    label: "C++",
  },
  {
    image:"/assets/Expressjs.png",
    label: "EXpress JS",
  },
  {
    image:"/assets/js.png",
    label: "JS",
  },
  {
    image:"/assets/Git.png",
    label: "Git",
  },
  {
    image:"/assets/Github.png",
    label: "Github",
  },
  {
    image:"/assets/Bootstrap.png",
    label: "Bootstrap",
  },
  {
    image:"/assets/Materialui.png",
    label:"MaterialUI",
  },
  {
    image:"/assets/MongoDB.png",
    label: "MongoDB",
  },
  {
    image:"/assets/php.png",
    label: "PHP",
  },
  {
    image:"/assets/MYSQL.png",
    label: "MYSQL",
  },
  {
    image:"/assets/Nextjs.png",
    label: "NextJS",
  },
  {
    image:"/assets/Nginx.png",
    label: "Nginx",
  },
  {
    image:"/assets/Nodejs.png",
    label: "NodeJS",
  },
  {
    image:"/assets/PostgresSQl.png",
    label: "PostgresSQl",
  },
  {
    image:"/assets/Postman.png",
    label: "Postman",
  },
  {
    image:"/assets/python.png",
    label: "Python",
  },
  {
    image:"/assets/Redux.png",
    label: "Redux",
  },
  {
    image:"/assets/science.png",
    label: "React",
  },
  {
    image:"/assets/sql.png",
    label: "SQL",
  },
  {
    image:"/assets/Tailwindcss.png",
    label: "Tailwind CSS",
  },
  {
    image:"/assets/typescript.png",
    label: "Typescript",
  },
  {
    image:"/assets/Apache.png",
    label: "Apache",
  },
 
  

];
