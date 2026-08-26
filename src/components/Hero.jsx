import Aurora from "../components/wrappers/Aurora";

function Hero() {
  return (
    <Aurora
      colorStops={["#7cff67", "#B497CF", "#5227FF"]}
      blend={0.5}
      amplitude={1.5}
      speed={1}
    >
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold font-mono text-gray-300">
          Hey There,
        </h3>

        <h1 className="mt-2 text-6xl font-bold font-mono">I'm Aditya Jagtap</h1>

        <h2 className="my-3 text-3xl font-mono text-gray-300">
          A Full Stack Web Developer
        </h2>
        <div className="text-white flex gap-4 text-2xl my-2 ">
          <a href="#"><i className="fa-regular fa-envelope"></i></a>
          <a
            href="https://www.linkedin.com/in/aditya-jagtap-ba95a9236/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/aditya-jagtap02" target="_blank">
          <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </Aurora>
  );
}

export default Hero;
