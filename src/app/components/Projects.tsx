"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { Code } from "lucide-react";

export function DirectionAwareHoverDemo() {
  const projects = [
    {
      imageUrl: "/assets/schedulify.png",
      title: "Schedulify",
      description: "Schedulify is an AI-powered scheduling assistant that integrates autonomous agents to automate task management and calendar scheduling.",
      codeLink: "https://github.com/shrutisharma7500/schedulify",
    },
    {
      imageUrl: "/assets/project2.png",
      title: "NextDeploy",
      description: "NextDeploy is a boilerplate Next.js project configured for smooth deployment on platforms like Vercel, Netlify, or custom servers.",
      codeLink: "https://github.com/shrutisharma7500/CXI_website",
    },
    {
      imageUrl: "/assets/project3.png",
      title: "JobLink",
      description: "JobLink is a full-stack job portal built with React, Node.js, Express, and MongoDB. It enables seamless interaction between job seekers and employers with powerful features.",
      codeLink: "#",
    },
    {
      imageUrl: "/assets/project1.png",
      title: "BlogBreeze",
      description: "BlogBreeze is a real-time blog website designed for sharing daily updates and engaging content.",
      codeLink: "https://github.com/shrutisharma7500/nextjs-deploy",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-10 pt-10 pb-20 min-h-screen">
      <h2 className="text-5xl md:text-6xl text-gray-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 w-full max-w-6xl">
        {projects.map((project, index) => (
          <DirectionAwareHover imageUrl={project.imageUrl} key={index}>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Code className="w-5 h-5 text-white" />
              </div>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm font-medium"
              >
                View Code
              </a>
            </div>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
}
