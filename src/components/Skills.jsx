import { useState } from "react";
import SectionHeader from "./common/SectionHeader";
import FlowingMenu from "./wrappers/FlowingMenu";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiExpress,
} from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance user interfaces with modern React ecosystem.",
    icon: Code2,
    gradient: "from-sky-500/20 via-sky-500/5 to-transparent",
    accent: "text-sky-400 border-sky-400/20",
    skills: [
      { name: "React JS", level: "Advanced", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", level: "Proficient", icon: SiTailwindcss, color: "text-[#38BDF8]" },
      { name: "HTML5", level: "Expert", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", level: "Expert", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Responsive Design", level: "Advanced", icon: Layers, color: "text-emerald-400" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Architecting scalable servers, RESTful endpoints, and secure authentication flows.",
    icon: Server,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accent: "text-emerald-400 border-emerald-400/20",
    skills: [
      { name: "Node JS", level: "Proficient", icon: FaNodeJs, color: "text-[#68A063]" },
      { name: "Express JS", level: "Proficient", icon: SiExpress, color: "text-neutral-200" },
      { name: "REST APIs", level: "Advanced", icon: Cpu, color: "text-sky-300" },
      { name: "JWT Authentication", level: "Proficient", icon: CheckCircle2, color: "text-indigo-400" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Structuring relational and document databases with efficient schema modeling and queries.",
    icon: Database,
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    accent: "text-amber-400 border-amber-400/20",
    skills: [
      { name: "MongoDB", level: "Proficient", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", level: "Proficient", icon: SiMysql, color: "text-[#00758F]" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    description: "Modern developer workflow tools, version control, API testing, and deployment platforms.",
    icon: Wrench,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    accent: "text-purple-400 border-purple-400/20",
    skills: [
      { name: "GitHub", level: "Proficient", icon: FaGithub, color: "text-white" },
      { name: "Git Workflow", level: "Proficient", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "Postman", level: "Proficient", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "VS Code", level: "Advanced", icon: Code2, color: "text-[#007ACC]" },
      { name: "Netlify", level: "Proficient", icon: Layers, color: "text-[#00C7B7]" },
      { name: "Generative AI", level: "Active User", icon: Sparkles, color: "text-amber-300" },
    ],
  },
];

const originalSkillItems = [
  {
    text: "Frontend",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    text: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    text: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    text: "Tools",
    skills: [
      "GitHub",
      "Postman",
      "VS Code",
      "Netlify",
      "Generative AI",
    ],
  },
];

function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <div className="w-[92%] max-w-7xl mx-auto py-16 sm:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
        <SectionHeader
          badge="Core Competencies"
          title="SKILLS & EXPERTISE"
          subtitle="A comprehensive toolkit of languages, frameworks, and developer workflows I use to bring ideas to life."
          className="mb-0 sm:mb-0"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md self-start sm:self-auto">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${selectedFilter === "all"
                ? "bg-white/15 text-white font-semibold shadow-sm"
                : "text-neutral-400 hover:text-white"
              }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer capitalize ${selectedFilter === cat.id
                  ? "bg-white/15 text-white font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
                }`}
            >
              {cat.id}
            </button>
          ))}
        </div>
      </div>

      {/* Watermelon UI Bento Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {filteredCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="relative rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden group"
            >
              {/* Subtle Ambient Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border bg-black/40 backdrop-blur-md ${category.accent}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 group/chip"
                      >
                        <SkillIcon
                          className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${skill.color} transition-transform group-hover/chip:scale-110`}
                        />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-neutral-200 truncate group-hover/chip:text-white">
                            {skill.name}
                          </p>
                          <p className="text-[10px] font-mono text-neutral-500 truncate">
                            {skill.level}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Flowing Marquee Strip (Original Component Preserved with Polish) */}
      {/* <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-inner">
        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            INTERACTIVE STREAM (HOVER OR TAP TO REVEAL MARQUEE)
          </span>
          <span className="text-xs font-mono text-neutral-500">GSAP ANIMATED</span>
        </div>
        <div className="w-full h-[280px] sm:h-[320px] relative">
          <FlowingMenu
            items={originalSkillItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#000000"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#0f172a"
            borderColor="#262626"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
