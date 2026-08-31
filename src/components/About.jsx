import ProfileCard from "./wrappers/ProfileCard";
import ProfileImage from "../assets/img/Blank-Pfp.jpg";

function About() {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-6 sm:mb-10">
        ABOUT ME
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 backdrop-blur-sm">
        {/* Left Content */}
        <div className="w-full lg:w-3/5">
          <p className="text-gray-300 leading-relaxed sm:leading-8 text-left sm:text-justify text-sm sm:text-base md:text-lg">
            I'm a passionate{" "}
            <span className="text-white font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            with a strong interest in creating modern, responsive, and
            user-friendly digital experiences. I enjoy transforming ideas into
            functional web applications that combine clean design with
            efficient performance.
          </p>

          <p className="text-gray-300 leading-relaxed sm:leading-8 text-left sm:text-justify text-sm sm:text-base md:text-lg mt-4 sm:mt-6">
            My expertise includes React.js, JavaScript, Tailwind CSS, Node.js,
            Express.js, MongoDB, and MySQL. I focus on building scalable
            applications, intuitive user interfaces, and robust backend systems
            that solve real-world problems.
          </p>

          <p className="text-gray-300 leading-relaxed sm:leading-8 text-left sm:text-justify text-sm sm:text-base md:text-lg mt-4 sm:mt-6">
            Currently, I'm expanding my skills by developing projects such as
            CRM systems, portfolio websites, and business solutions while
            continuously exploring new technologies and industry best practices.
          </p>

          <p className="text-gray-300 leading-relaxed sm:leading-8 text-left sm:text-justify text-sm sm:text-base md:text-lg mt-4 sm:mt-6">
            My goal is to build impactful digital solutions that deliver
            exceptional user experiences and help businesses achieve their
            objectives through technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-10">
            <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">10+</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Projects</p>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">2+</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Years Learning</p>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">8+</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Technologies</p>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">100%</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Passion</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-2/5 flex justify-center items-center overflow-visible mt-4 lg:mt-0">
          <div className="w-full flex justify-center">
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
              behindGlowColor="rgba(23, 138, 252, 0.67)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(59,130,246,0.45) 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;