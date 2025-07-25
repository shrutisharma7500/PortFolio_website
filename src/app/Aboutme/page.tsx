"use client";

import React from "react";
// import { Aboutme } from "../components/Aboutme";
import { NavbarDemo } from "../components/Navbar";
import { FloatingPaper } from "../components/FloatingPaper";
import { StarsBackground } from "../components/ui/Stars";
import  Aboutme  from "../components/Aboutme";
import {ShootingStarsAndStarsBackgroundDemo} from "../components/Shooting";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Floating background elements */}
      <StarsBackground/>
      <ShootingStarsAndStarsBackgroundDemo/>
      <FloatingPaper />

      {/* Main content with navbar */}
      <div className="relative z-10">
        <NavbarDemo />
        <div className="flex items-center justify-center pt-20">
           <Aboutme />
        </div>
      </div>
    </div>
  );
}
