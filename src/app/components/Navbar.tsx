"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/Aboutme" },
    { name: "Projects", link: "/projects" },
    { name: "Skills", link: "/skills" },
    // { name: "Contact", link: "/Contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Resume Download Button */}
      <div className="fixed top-4 right-6 z-[999]">
        <a
          href="/assets/shrutisharmaresume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl relative bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
              <span className="transition-all duration-300 absolute">
                Download Resume
              </span>
            </span>
          </button>
        </a>
      </div>

      {/* Navbar with Desktop and Mobile View */}
      <div className="relative w-full">
       <Navbar>
  {/* Desktop Nav */}
  <NavBody>
    <NavbarLogo />
    <NavItems items={navItems} />
  </NavBody>

  {/* Mobile Nav */}
  <MobileNav>
    <MobileNavHeader>
      {/* Optional logo on mobile */}
      {/* <NavbarLogo /> */}

      <MobileNavToggle
        isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </MobileNavHeader>

    <MobileNavMenu
      isOpen={isMobileMenuOpen}
      onClose={() => setIsMobileMenuOpen(false)}
    >
      {navItems.map((item, idx) => (
       <a
  key={`mobile-link-${idx}`}
  href={item.link}
  onClick={() => setIsMobileMenuOpen(false)}
  className="text-white px-4 py-2 text-lg"
>
  {item.name}
</a>

      ))}
    </MobileNavMenu>
  </MobileNav>
</Navbar>
      </div>
    </>
  );
}
