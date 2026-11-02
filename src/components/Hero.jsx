import Aurora from "../components/wrappers/Aurora";
import { ArrowDown, ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Aurora
      colorStops={["#7cff67", "#B497CF", "#5227FF"]}
      blend={0.5}
      amplitude={1.5}
      speed={1}
    >
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-12">
        {/* Watermelon UI Status Badge */}
        {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-medium text-neutral-200 shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-4 animate-wm-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="tracking-wide">Available for Freelance & Full-time Roles</span>
        </div> */}

        {/* Introduction */}
        {/* <p className="text-sm sm:text-base md:text-lg font-mono text-neutral-400 tracking-wider uppercase mb-1">
          Hey There,
        </p> */}

        {/* Primary Name Display */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight leading-tight text-white">
          {/* I'm{" "} */}
          <span className="bg-gradient-to-r from-white via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            Aditya Jagtap
          </span>
        </h1>

        {/* Subtitle / Role */}
        <h2 className="mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-mono text-neutral-300 font-medium max-w-2xl">
          A Full Stack Web Developer
        </h2>

        <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
          Specializing in scalable MERN stack architectures, high-performance web applications, and intuitive user experiences.
        </p>

        {/* Watermelon UI CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.06] text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95 cursor-pointer"
          >
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Social Dock Links */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8 p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <a
            href="mailto:aditya0205jagtap@gmail.com"
            className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            aria-label="Email Aditya Jagtap"
            title="Email: aditya0205jagtap@gmail.com"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-jagtap-ba95a9236/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-sky-400 hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="https://github.com/aditya-jagtap02"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="tel:+918010860560"
            className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-emerald-400 hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            aria-label="Phone Number"
            title="Phone: +91 80108 60560"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        {/* <button
          onClick={() => scrollTo("projects")}
          className="mt-8 sm:mt-12 inline-flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer group focus:outline-none"
          aria-label="Scroll to projects"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-neutral-400 group-hover:text-white" />
        </button> */}
      </div>
    </Aurora>
  );
}

export default Hero;
