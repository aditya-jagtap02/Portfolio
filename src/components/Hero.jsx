import Aurora from "../components/wrappers/Aurora";

function Hero() {
  return (
    <Aurora
      colorStops={["#7cff67", "#B497CF", "#5227FF"]}
      blend={0.5}
      amplitude={1.5}
      speed={1}
    >
      <div className="flex h-screen min-h-[500px] flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-gray-300">
          Hey There,
        </h3>

        <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight leading-tight">
          I'm Aditya Jagtap
        </h1>

        <h2 className="my-3 sm:my-4 text-base sm:text-2xl md:text-3xl font-mono text-gray-300 font-medium">
          A Full Stack Web Developer
        </h2>

        <div className="text-white flex items-center justify-center gap-5 sm:gap-6 text-2xl sm:text-3xl my-3">
          <a
            href="mailto:aditya0205jagtap@gmail.com"
            className="hover:text-sky-300 hover:scale-110 active:scale-95 transition-all p-1.5"
            aria-label="Email"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-jagtap-ba95a9236/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 hover:scale-110 active:scale-95 transition-all p-1.5"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/aditya-jagtap02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 hover:scale-110 active:scale-95 transition-all p-1.5"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </Aurora>
  );
}

export default Hero;

