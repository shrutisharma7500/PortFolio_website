"use client";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { Code } from "lucide-react";

export function DirectionAwareHoverDemo() {
  const projects = [
    {
      imageUrl: "/assets/empower.png",
      title: "Empower_HER",
      description: "The world's leading digital workspace for women's skill development, career growth, safety awareness, and mental wellness..",
      codeLink: "https://github.com/shrutisharma7500/Empower-her",
    },
    {
      imageUrl: "/assets/port.png",
      title: "PortfolioX",
      description: "Generate a stunning, professional portfolio in minutes. Choose from elegant themes, add your projects, and go live instantly. No coding required.",
      codeLink: "https://github.com/shrutisharma7500/PortfolioX",
    },
    {
      imageUrl: "/assets/ai.png",
      title: "IntelliSchedule AI",
      description: "An intelligent scheduling assistant powered by AI that helps you manage meetings, check availability, and send automatic email confirmations. Built with FastMCP, Cal.com integration, and multi-user authentication..",
      codeLink: "https://github.com/shrutisharma7500/IntelliSchedule-AI",
    },
    {
      imageUrl: "/assets/game.png",
      title: "Signal Decoder",
      description: "A challenging puzzle application that tests your ability to recognize and decode visual patterns from a 5×5 grid. Built with React, TypeScript, and Vite, featuring 6 progressively difficult levels..",
      codeLink: "https://github.com/shrutisharma7500/Signal-decoder",
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
