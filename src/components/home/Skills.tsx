"use client";

import { Code, Webhook, Brain, Wrench } from "lucide-react"; // Using Lucide icons for categories

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java"],
    icon: Code,
  },
  {
    category: "Web Development",
    skills: [
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    icon: Webhook,
  },
  {
    category: "AI & Data Science",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    icon: Brain,
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Azure", "SQL"],
    icon: Wrench,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map(({ category, skills, icon: Icon }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
