"use client";

import React from "react";
import { InfiniteMovingCardsDemo } from "../components/Moving-cards";
import { NavbarDemo } from "../components/Navbar";
import { FloatingPaper } from "../components/FloatingPaper";
import { StarsBackground } from "../components/ui/Stars";
import {DirectionAwareHoverDemo} from "../components/Projects";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden ">
      {/* Floating background elements */}
      <StarsBackground/>
      <FloatingPaper />

      {/* Main content with navbar */}
      <div className="relative z-10">
        <NavbarDemo />
        <div className="flex items-center justify-center pt-20">
            <DirectionAwareHoverDemo/>
        
        </div>
      </div>
    </div>
  );
}
