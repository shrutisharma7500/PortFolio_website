"use client";
import React from "react";
import { ShootingStars } from "./ui/Shoot";
import { StarsBackground } from "./ui/Stars";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <StarsBackground />
      <ShootingStars />
    </div>
  );
}