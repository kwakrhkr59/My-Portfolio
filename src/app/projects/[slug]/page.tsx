"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCalendarAlt,
  FaUsers,
  FaCode,
  FaFlask,
  FaLightbulb,
  FaTasks,
  FaTrophy,
  FaChartLine,
  FaImage,
  FaTools,
} from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";
import type { Project } from "@/types/project";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function fetchProject(slug: string) {
  const { data, error } = await supabase
    .from<Project>("projects")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) {
    console.error("Supabase fetch error:", error);
    return null;
  }
  return data;
}

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = use(params);
  const project = use(fetchProject(slug));
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Project Not Found
          </h1>
          <p className="mb-6 text-gray-600">
            The project you are looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 inline-flex items-center transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // icon 선택
  const Icon =
    project.type && project.type.includes("Research") ? FaFlask : FaCode;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                href="/"
                className="flex items-center text-gray-900 hover:text-indigo-600 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2" />
                <span>Back to Projects</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  title="GitHub Repository"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  title="Visit Project"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Icon className="text-2xl" />
            </div>
            <span className="text-lg font-medium bg-white/20 px-4 py-1 rounded-full">
              {project.type || "Project"}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-sm">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center bg-black/10 px-4 py-2 rounded-full">
              <FaCalendarAlt className="mr-2" />
              <span>{project.period || "Unknown period"}</span>
            </div>
            {project.team && project.team.length > 0 && (
              <div className="flex items-center bg-black/10 px-4 py-2 rounded-full">
                <FaUsers className="mr-2" />
                <span>{project.team.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Project Images (if available, show as hero section) */}
      {project.images && project.images.length > 0 && (
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
              <img
                src={project.images[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {project.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      idx === activeImage
                        ? "border-indigo-500 opacity-100 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.details ||
                  project.summary ||
                  "No description available."}
              </p>
            </div>

            {/* Project Goal */}
            {project.goal && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <FaLightbulb className="mr-3 text-yellow-500" />
                  Project Goal
                </h2>
                <p className="text-gray-700 leading-relaxed">{project.goal}</p>
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <FaTasks className="mr-3 text-indigo-500" />
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                        <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <FaTools className="mr-3 text-gray-600" />
                  Challenges & Solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <FaTrophy className="mr-3 text-amber-500" />
                  Results & Achievements
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}

            {/* Future Plans */}
            {project.future_plans && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <FaChartLine className="mr-3 text-green-500" />
                  Future Plans
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.future_plans}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack Card */}
            {project.stack && project.stack.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <FaTools className="mr-2 text-indigo-500" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team Members */}
            {project.team && project.team.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <FaUsers className="mr-2 text-indigo-500" />
                  Team
                </h3>
                <ul className="space-y-3">
                  {project.team.map((member, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-700">
                        {member.charAt(0)}
                      </div>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Links</h3>
              <div className="space-y-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 px-4 text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-3" />
                    <span>Visit Project</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 px-4 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <FaGithub className="mr-3" />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out if you have any questions about this
                project.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-center transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
