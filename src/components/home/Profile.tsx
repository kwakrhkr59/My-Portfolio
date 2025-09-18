"use client";

import { Mail, Github, Linkedin, FileText, User } from "lucide-react";
import Image from "next/image";

const profileData = {
  name: "Hyeonjeong Kwak",
  role: "AI & Full-Stack Developer",
  university: "Computer Science & Mathematics Student @Ewha Womans University",
  tagline: "From everyday problems to innovative solutions",
  description:
    "Passionate about leveraging cutting-edge technologies to build impactful and user-centric applications. With a background in AI research and full-stack development, I thrive on transforming complex challenges into elegant solutions.",
  imageUrl: "/profile.jpg",
  email: "kwakrhkr59@gmail.com",
  github: "https://github.com/kwakrhkr59",
  linkedin: "https://linkedin.com/in/hyeonjeong-kwak",
  cv: "/CV_Hyeonjeong Kwak.pdf",
};

const Profile = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 max-w-2xl mx-auto transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 dark:border-purple-500 shadow-lg">
            {profileData.imageUrl ? (
              <Image
                src={profileData.imageUrl}
                alt={profileData.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400">
                <User className="w-16 h-16" />
              </div>
            )}
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-300 dark:ring-purple-700 animate-pulse-slow"></div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {profileData.name}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
            {profileData.role}
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
            {profileData.university}
          </p>
          <p className="text-lg italic text-gray-800 dark:text-gray-200 mb-6 max-w-lg mx-auto">
            &quot;{profileData.tagline}&quot;
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto">
            {profileData.description}
          </p>

          {profileData.cv && (
            <div className="mt-8 mb-8">
              <a
                href={profileData.cv}
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
            </div>
          )}

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300 mt-8">
            {profileData.email && (
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-200 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-8 h-8" />
              </a>
            )}
            {profileData.github && (
              <a
                href={profileData.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-200 hover:scale-110 hover:text-gray-900 dark:hover:text-white"
              >
                <Github className="w-8 h-8" />
              </a>
            )}
            {profileData.linkedin && (
              <a
                href={profileData.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-200 hover:scale-110 hover:text-blue-700 dark:hover:text-blue-500"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
