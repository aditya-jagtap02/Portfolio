import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About Me", id: "about" },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto w-[92%] max-w-7xl rounded-2xl md:rounded-full border border-white/20 bg-white/10 px-5 py-3 sm:px-8 font-mono text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ${
          showNavbar ? "mt-4 sm:mt-5 opacity-100 translate-y-0" : "-translate-y-28 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1
            onClick={() => handleNavClick("home")}
            className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer select-none hover:text-sky-300 transition-colors"
          >
            PORTFOLIO
          </h1>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-sky-300 text-sm lg:text-base"
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Desktop Connect Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:block rounded-xl border border-white px-5 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(180,151,207,0.5)] cursor-pointer text-sm lg:text-base"
          >
            Let's Connect
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <i
              className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-xl transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100 pt-4 mt-3 border-t border-white/10" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 pb-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer py-2 px-3 rounded-lg hover:bg-white/10 hover:text-sky-300 transition-colors text-base font-medium flex items-center justify-between"
              >
                <span>{item.name}</span>
                <i className="fa-solid fa-chevron-right text-xs opacity-60"></i>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full rounded-xl border border-white py-2.5 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(180,151,207,0.4)] cursor-pointer text-center text-sm"
              >
                Let's Connect
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

