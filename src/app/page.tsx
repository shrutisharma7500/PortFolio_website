"use client";

import Image from "next/image";
// import { NavbarDemo } from "./components/Navbar";
import Aboutme from "@/app/components/Aboutme"; // or the correct path

import {FloatingPaper} from "./components/FloatingPaper"; // ✅ make sure path is correct
import "./globals.css";
import {DirectionAwareHoverDemo} from "./components/Projects";
import { TimelineDemo } from "./components/Timeline-exp";
import { NavbarDemo } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InfiniteMovingCardsDemo } from "./components/Moving-cards";
import Footer from "@/app/components/Footer"; // ✅ no curly braces
import { StarsBackground } from "./components/ui/Stars";
import { ShootingStars } from "./components/ui/Shoot";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/Shooting";


export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Floating icons in the background */}
      <StarsBackground/>
      <ShootingStarsAndStarsBackgroundDemo/>
      <FloatingPaper/>

      {/* Main content */}
      <div className="relative z-10">
        {/* <NavbarDemo /> */}
        <Hero/>
       <Aboutme />
       <DirectionAwareHoverDemo/>
      </div>
      <NavbarDemo/>
      <TimelineDemo/>
      <InfiniteMovingCardsDemo />
      <Footer/>
    </div>
  );
}
