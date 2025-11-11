"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/home/Hero";
import FloatingNav from "@/components/layout/FloatingNav";
import Profile from "@/components/home/Profile";
import ProjectPreview from "@/components/home/ProjectPreview";
import Publications from "@/components/home/Publications";
import Awards from "@/components/home/Awards";
import Education from "@/components/home/Education";
import Experiences from "@/components/home/Experiences";
import Skills from "@/components/home/Skills";

const Portfolio = () => {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    setShowNav(window.scrollY > window.innerHeight * 0.3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onScroll={scrollToContent} />
      <FloatingNav show={showNav} />
      <Profile />
      <ProjectPreview />
      <Publications />
      <Awards />
      <Experiences />
      <Education />
      <Skills />
    </div>
  );
};

export default Portfolio;
