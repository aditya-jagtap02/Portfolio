import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        setShowNavbar(false);
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
    // { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About Me", id: "about" },

  ];

  return (
    <nav
      className={`fixed left-1/2 z-50 flex w-[90%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/10 px-8 py-3 font-mono text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 ${
        showNavbar ? "top-5 opacity-100" : "-top-24 opacity-0"
      }`}
    >
      <h1 className="text-2xl font-bold tracking-wide">PORTFOLIO</h1>

      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-sky-300"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <button className="rounded-xl border border-white px-5 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(180,151,207,0.5)]">
        Let's Connect
      </button>
    </nav>
  );
}

export default Navbar;
