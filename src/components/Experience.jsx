import { Briefcase, Calendar, CheckCircle2, ChevronRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeader from "./common/SectionHeader";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    organization: "PraVik Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "June 2025 – August 2026",
    current: true,
    type: "work",
    badge: "Professional Experience",
    description:
      "Built responsive, accessible web interfaces and collaborated across the software development lifecycle within an Agile engineering team.",
    highlights: [
      "Built responsive web interfaces using HTML, CSS, JavaScript, and React.js, with attention to cross-device usability and maintainable component structure.",
      "Integrated REST APIs into frontend workflows and collaborated on data-driven application features.",
      "Investigated and resolved UI and application issues, improving reliability and user experience.",
      "Used Git and GitHub for version control and collaborated with developers and stakeholders in an Agile working environment.",
      "Contributed to application testing, deployment activities, and iterative enhancements across the development lifecycle.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git", "GitHub", "Agile / Scrum"],
  },
  {
    id: 2,
    role: "Full-Stack Developer (AI-Assisted Development)",
    organization: "Selected Projects & Client Solutions",
    location: "Pune, Maharashtra",
    period: "2024 – Present",
    current: false,
    type: "work",
    badge: "Full-Stack Projects",
    description:
      "Engineering full-stack web applications leveraging modern AI-assisted developer workflows (Claude Code, Antigravity, ChatGPT Codex) to deliver scalable software solutions.",
    highlights: [
      "Developed Realty CRM: Full-stack real estate system covering 4 core workflows (lead management, customer management, property inventory, sales operations) with role-based dashboards and REST APIs.",
      "Built Vehicle Motor Oil: Full-stack e-commerce platform with product catalog management, user authentication, shopping cart, and order processing using PHP and MySQL.",
      "Utilized AI-assisted coding tools for code generation, form validation, debugging, and database schema integration.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "PHP", "MySQL", "Claude Code", "Antigravity"],
  },
  {
    id: 3,
    role: "M.Sc. & B.Sc. in Computer Science",
    organization: "Christ College, Pune",
    location: "Pune, Maharashtra",
    period: "2021 – 2027",
    current: false,
    type: "education",
    badge: "Education & Certifications",
    description:
      "Formal academic foundation in computer science, software engineering concepts, database architecture, and full-stack web technologies.",
    highlights: [
      "M.Sc. Computer Science (2025 – 2027) — Currently pursuing advanced computer science and software development.",
      "B.Sc. Computer Science (Completed April 2025) — Graduated with CGPA: 7.77.",
      "Certifications: Responsive Web Design • Fundamentals of React.js • Fundamentals of Node.js, Express.js and MongoDB.",
    ],
    tech: ["Computer Science", "MVC Architecture", "CRUD Operations", "SDLC", "Agile/Sprint Collaboration"],
  },
];

function Experience() {
  return (
    <div className="w-[92%] max-w-7xl mx-auto py-16 sm:py-24">
      <SectionHeader
        badge="Career & Track Record"
        title="WORK EXPERIENCE"
        subtitle="Professional frontend engineering experience, full-stack project implementations, and academic qualifications."
      />

      {/* Watermelon UI Vertical Timeline */}
      <div className="relative mt-8 sm:mt-12">
        {/* Glowing Spine Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-emerald-400 opacity-30 sm:opacity-40"></div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.type === "education" ? GraduationCap : Briefcase;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } group`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div
                    className={`w-9 h-9 rounded-full border-2 bg-neutral-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      item.current
                        ? "border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                        : "border-white/30 group-hover:border-white"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        item.current ? "text-sky-400" : "text-neutral-400 group-hover:text-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Card Container */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? "sm:pr-6" : "sm:pl-6"
                  }`}
                >
                  <div className="relative rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]">
                    {/* Period & Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/[0.04] text-neutral-300">
                        <Calendar className="w-3 h-3 text-sky-400" />
                        <span>{item.period}</span>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${
                          item.current
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold"
                            : "border-white/10 bg-white/[0.03] text-neutral-400"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>

                    {/* Organization and Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-400 mt-1 mb-4 font-sans">
                      <span className="flex items-center gap-1.5 text-neutral-200 font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                        {item.organization}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {item.location}
                      </span>
                    </div>

                    {/* Overview description */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-sans">
                      {item.description}
                    </p>

                    {/* Bullet Highlights from Resume */}
                    <ul className="space-y-2 mb-5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {item.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg border border-white/10 bg-white/[0.03] text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
