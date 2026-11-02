import { useState } from "react";
import { ExternalLink, Sparkles, LayoutGrid, List } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./common/SectionHeader";
import MovieVault from "../assets/img/movie-vault.png";
import E_Commerce from "../assets/img/e-commerce.png";
import CaprockFS from "../assets/img/caprockfs.png";
import EuroFresh from "../assets/img/euro-fresh.png";

function Projects() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "carousel"

  const projects = [
    {
      id: 1,
      number: "01",
      Name: "Movie Vault",
      category: "React App & API Integration",
      Description:
        "A responsive React-based movie discovery platform that enables users to browse trending films, search titles in real time, view detailed metadata, and curate a personalized watchlist powered by the TMDB API.",
      link: "https://movie-vault-watchlist.netlify.app/",
      github: "https://github.com/aditya-jagtap02",
      image: MovieVault,
      tech: ["React JS", "JavaScript", "HTML5", "CSS3", "TMDB API"],
    },
    {
      id: 2,
      number: "02",
      Name: "Vehicle Motor Oil",
      category: "AI-Assisted E-commerce Platform",
      Description:
        "Full-stack e-commerce platform for automotive lubricants featuring product catalog management, user authentication, shopping cart, and order processing with dynamic MySQL CRUD operations.",
      link: "http://adityajagtap.byethost18.com/index.php",
      github: "https://github.com/aditya-jagtap02",
      image: E_Commerce,
      tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    },
    {
      id: 3,
      number: "03",
      Name: "CAPROCK Financial Service",
      category: "Corporate FinTech Showcase",
      Description:
        "A corporate digital platform designed for CapRock Financial Services to showcase consulting expertise, advisory packages, and customer solutions with high-trust branding and responsive UI architecture.",
      link: "https://caprockfs.netlify.app/",
      github: "https://github.com/aditya-jagtap02",
      image: CaprockFS,
      tech: ["React JS", "JavaScript", "Logo.dev API", "CSS3", "HTML5"],
    },
    {
      id: 4,
      number: "04",
      Name: "Euro Fresh Sales",
      category: "Clean Tech & Renewable Solutions",
      Description:
        "Euro Fresh Sales is a corporate business portal highlighting solar water heaters and sustainable energy solutions, giving clients transparent product data and seamless inquiry forms for solar installations.",
      link: "https://euro-fresh-sales-pune.netlify.app/",
      github: "https://github.com/aditya-jagtap02",
      image: EuroFresh,
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
  ];

  return (
    <div className="w-[92%] max-w-7xl mx-auto py-16 sm:py-24">
      {/* Header with View Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
        <SectionHeader
          badge="Featured Portfolio"
          title="PROJECTS"
          subtitle="A selection of client projects, web applications, and full-stack solutions built with performance and clean code."
          className="mb-0 sm:mb-0"
        />

        {/* View Toggle */}
        <div className="hidden sm:inline-flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md self-start sm:self-auto">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${viewMode === "grid"
                ? "bg-white/15 text-white shadow-sm font-semibold"
                : "text-neutral-400 hover:text-white"
              }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setViewMode("carousel")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${viewMode === "carousel"
                ? "bg-white/15 text-white shadow-sm font-semibold"
                : "text-neutral-400 hover:text-white"
              }`}
            aria-label="Scroll view"
          >
            <List className="w-3.5 h-3.5" />
            <span>Scroll</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-5 sm:p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase Frame */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-neutral-900 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.Name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Status Pill Badge on Image */}
                  {/* <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-white/20 bg-black/60 backdrop-blur-md text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{project.status}</span>
                  </div> */}

                  {/* Index Pill on Image */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-mono text-neutral-400 bg-black/50 backdrop-blur-md border border-white/10">
                    {project.number}
                  </div>
                </div>

                {/* Category & Title */}
                <div className="mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 group-hover:text-sky-300 transition-colors flex items-center justify-between">
                    <span>{project.Name}</span>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {project.Description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-1">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg border border-white/10 bg-white/[0.04] text-neutral-300 transition-colors hover:border-white/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10 gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/15 bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30 transition-all active:scale-95 cursor-pointer"
                  aria-label="View source repository"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="hidden xs:inline">Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Carousel / Scroll View (Enhanced from original) */
        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-1 px-1 snap-x snap-mandatory">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] sm:w-[380px] md:w-[420px] min-w-[280px] sm:min-w-[360px] md:min-w-[420px] flex-shrink-0 rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-5 sm:p-6 text-white shadow-lg shadow-black/40 backdrop-blur-xl snap-center flex flex-col justify-between transition-all duration-300 hover:border-sky-400/40"
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-900 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.Name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/60 text-neutral-200 border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{project.status}</span>
                  </div>
                </div>

                <span className="text-xs font-mono uppercase text-sky-400">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-mono text-white mt-1 mb-2">
                  {project.Name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.Description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md border border-white/10 bg-white/[0.04] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold bg-white text-black rounded-xl hover:bg-neutral-200 transition-all active:scale-95 shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm border border-white/15 rounded-xl text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
