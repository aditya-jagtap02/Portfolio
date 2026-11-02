import SectionHeader from "./common/SectionHeader";
import ProfileCard from "./wrappers/ProfileCard";
import ProfileImage from "../assets/img/Blank-Pfp.jpg";
import {
  Code,
  Folder,
  Clock,
  Cpu,
  Flame,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";

function About() {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const stats = [
    {
      value: "10+",
      label: "Projects Completed",
      icon: Folder,
      accent: "text-sky-400 border-sky-400/20 bg-sky-500/10",
    },
    {
      value: "2+",
      label: "Years Experience",
      icon: Clock,
      accent: "text-emerald-400 border-emerald-400/20 bg-emerald-500/10",
    },
    {
      value: "8+",
      label: "Core Technologies",
      icon: Cpu,
      accent: "text-purple-400 border-purple-400/20 bg-purple-500/10",
    },
    {
      value: "100%",
      label: "Dedication",
      icon: Flame,
      accent: "text-amber-400 border-amber-400/20 bg-amber-500/10",
    },
  ];

  const highlights = [
    {
      title: "Clean Architecture",
      desc: "Maintainable, scalable React and Node.js solutions built with best practices.",
      icon: Layers,
    },
    {
      title: "Responsive by Default",
      desc: "Pixel-perfect visual rhythm and fluid accessibility on any screen size.",
      icon: Sparkles,
    },
    {
      title: "Full-Lifecycle Delivery",
      desc: "From database modeling to modern animated UI components and deployment.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-[92%] max-w-7xl mx-auto py-16 sm:py-24">
      <SectionHeader
        badge="Profile & Philosophy"
        title="ABOUT ME"
        subtitle="Passionate full-stack developer dedicated to building scalable web applications and engaging digital experiences."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Stats (Bento Layout) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Story Card */}
          <div className="relative rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <span>Building Modern Web Solutions</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-white font-semibold">
                  Full-Stack Web Developer
                </span>{" "}
                with a strong interest in creating modern, responsive, and
                user-friendly digital experiences. I enjoy transforming ideas into
                functional web applications that combine clean design with
                efficient performance.
              </p>

              <p>
                My expertise spans <span className="text-sky-300">React.js</span>,{" "}
                <span className="text-sky-300">JavaScript (ES6+)</span>,{" "}
                <span className="text-sky-300">Tailwind CSS</span>,{" "}
                <span className="text-emerald-400">Node.js</span>,{" "}
                <span className="text-emerald-400">Express.js</span>,{" "}
                <span className="text-amber-400">MongoDB</span>, and{" "}
                <span className="text-amber-400">MySQL</span>. I focus on building
                scalable applications, intuitive user interfaces, and robust
                backend systems that solve real-world problems.
              </p>

              <p>
                Currently, I'm expanding my skills by developing projects such as
                CRM systems, portfolio websites, and commercial business solutions
                while continuously exploring modern tooling and industry best
                practices.
              </p>

              <p className="text-neutral-400 text-xs sm:text-sm">
                My objective is to build impactful digital solutions that deliver
                exceptional user experiences and help businesses achieve their goals
                through reliable technology.
              </p>
            </div>
          </div>

          {/* Watermelon UI Stats Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.1] bg-neutral-950/70 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 text-center sm:text-left flex flex-col justify-between"
                >
                  <div
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-3 mx-auto sm:mx-0 ${stat.accent}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      {stat.value}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 font-sans">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pillars Bento Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-md hover:bg-white/[0.05] transition-colors"
                >
                  <Icon className="w-4 h-4 text-sky-400 mb-2" />
                  <h5 className="text-sm font-semibold text-white font-mono mb-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Holographic ProfileCard */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <div className="w-full max-w-[380px] p-2 rounded-3xl border border-white/[0.12] bg-neutral-950/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <ProfileCard
              name="Aditya Jagtap"
              title="Full Stack Developer"
              handle="aditya.jagtap02"
              status="Available for Work"
              contactText="Contact Me"
              avatarUrl={ProfileImage}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              behindGlowColor="rgba(56, 189, 248, 0.4)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(10,10,10,0.95) 0%, rgba(30,41,59,0.7) 100%)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
