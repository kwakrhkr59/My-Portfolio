"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  ExternalLink,
  Award,
  ShieldCheck,
  BrainCircuit,
  Microscope,
  Globe,
  Github,
} from "lucide-react";
import { Paper } from "@/types/publications";

export default function PaperCard({ paper }: { paper: Paper }) {
  const [open, setOpen] = useState(false);

  const getFieldIcon = (field: string) => {
    switch (field) {
      case "HCI":
        return Users;
      case "Network Security":
        return ShieldCheck;
      case "XAI":
        return BrainCircuit;
      default:
        return BookOpen;
    }
  };

  const Icon = getFieldIcon(paper.field);

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ];
  const selectedGradient = gradients[paper.id.charCodeAt(0) % gradients.length];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "In Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Preprint":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const isLong = paper.abstract?.length > 180;
  const abstractText =
    open || !paper.abstract
      ? paper.abstract
      : paper.abstract.slice(0, 180) + (isLong ? "..." : "");

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-800 cursor-pointer">
      <div className={`h-32 bg-gradient-to-r ${selectedGradient} relative`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Icon className="text-white text-xl" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span
            className={`px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium ${getStatusColor(
              paper.status
            )}`}
          >
            {paper.status}
          </span>
        </div>
      </div>

      <div className="p-6 group">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
          {paper.title}
        </h3>

        <div className="mb-4 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
          <p className="mb-1">
            <span className="font-semibold">Authors:</span>{" "}
            {paper.authors.map((author, i) => (
              <span key={i}>
                {author === "HyeonJeong Kwak" ? (
                  <span className="font-bold">{author}</span>
                ) : (
                  author
                )}
                {i < paper.authors.length - 1 && ", "}
              </span>
            ))}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold truncate min-w-0">
                {paper.journal}
              </span>
            </div>
            <div className="ml-3 flex-shrink-0 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
              {paper.year}
            </div>
          </div>
        </div>

        <div className="mb-4 relative">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Abstract
          </h4>
          <div className="relative bg-gray-50 dark:bg-slate-800 rounded-lg p-3">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative">
              {abstractText}

              {isLong && (
                <button
                  onClick={() => setOpen(!open)}
                  className="absolute bottom-0 right-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs px-1 pb-0.5 bg-gray-50 dark:bg-slate-800"
                >
                  {open ? "접기" : "더보기"}
                </button>
              )}
            </p>
          </div>
        </div>

        {paper.impact && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start">
              <Award className="text-blue-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <h5 className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  Impact
                </h5>
                <p className="text-blue-700 dark:text-blue-300 text-xs">
                  {paper.impact}
                </p>
              </div>
            </div>
          </div>
        )}

        {paper.methodology && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start">
              <Microscope className="text-green-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <h5 className="text-xs font-semibold text-green-800 dark:text-green-300 mb-1">
                  Methodology
                </h5>
                <p className="text-green-700 dark:text-green-300 text-xs">
                  {paper.methodology}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex space-x-3">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {paper.year}
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {paper.authors.length} authors
            </div>
          </div>
          <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
            {paper.field}
          </span>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Keywords
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {paper.keywords.map((k, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-slate-700"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {paper.doi && (
            <a
              href={`${paper.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Paper
            </a>
          )}
          {paper.github && (
            <a
              href={paper.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {paper.website && (
            <a
              href={paper.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              <Globe className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
      </div>
    </div>
  );
}
