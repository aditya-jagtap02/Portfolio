import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "About Me", id: "about" },
  ];

  // Handle scroll hide/reveal and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down past 120px, reveal when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);

      // Section spy
      const sections = ["home", "projects", "skills", "experience", "about", "contact"];
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-6">
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-2xl md:rounded-full border border-white/[0.12] bg-black/60 px-4 py-2.5 sm:px-6 sm:py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 ease-out ${
          showNavbar ? "mt-3 sm:mt-5 opacity-100 translate-y-0" : "-translate-y-28 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand with live indicator */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Aditya Jagtap Portfolio Home"
          >
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </div>
            <div className="flex items-center font-mono font-bold tracking-tight text-base sm:text-lg group-hover:text-sky-300 transition-colors">
              <span>ADITYA</span>
              <span className="text-sky-400 ml-0.5">.DEV</span>
            </div>
          </button>

          {/* Desktop Navigation Links (Floating pill dock) */}
          <ul className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium font-sans transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white bg-white/15 shadow-sm"
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop Connect Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs lg:text-sm font-medium text-white transition-all duration-300 hover:border-sky-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover:rotate-12" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors cursor-pointer border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Watermelon UI styling */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 pt-4 mt-3 border-t border-white/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1.5 pb-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full cursor-pointer py-2 px-3.5 rounded-xl transition-all duration-200 text-sm font-medium flex items-center justify-between ${
                      isActive
                        ? "bg-white/15 text-white font-semibold"
                        : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`text-xs ${
                        isActive ? "text-sky-400 font-mono" : "text-neutral-500"
                      }`}
                    >
                      {isActive ? "●" : "→"}
                    </span>
                  </button>
                </li>
              );
            })}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-sky-400/40 bg-sky-500/10 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-sky-500/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer text-sm"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
