import ProfileCard from "./wrappers/ProfileCard";
import ProfileImage from "../assets/img/Blank-Pfp.jpg";

function About() {
  return (
    <section className="w-[90%] mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-10">
        ABOUT ME
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 border border-white/20 rounded-3xl p-8 lg:p-12 backdrop-blur-sm ">
        
        {/* Left Content */}
        <div className="lg:w-3/5">
          <p className="text-gray-300 leading-8 text-justify text-base md:text-lg">
            I'm a passionate <span className="text-white font-semibold">Full-Stack Web Developer</span> with a strong interest in creating modern, responsive, and user-friendly digital experiences. I enjoy transforming ideas into functional web applications that combine clean design with efficient performance.
          </p>

          <p className="text-gray-300 leading-8 text-justify text-base md:text-lg mt-6">
            My expertise includes React.js, JavaScript, Tailwind CSS, Node.js,
            Express.js, MongoDB, and MySQL. I focus on building scalable
            applications, intuitive user interfaces, and robust backend systems
            that solve real-world problems.
          </p>

          <p className="text-gray-300 leading-8 text-justify text-base md:text-lg mt-6">
            Currently, I'm expanding my skills by developing projects such as
            CRM systems, portfolio websites, and business solutions while
            continuously exploring new technologies and industry best
            practices.
          </p>

          <p className="text-gray-300 leading-8 text-justify text-base md:text-lg mt-6">
            My goal is to build impactful digital solutions that deliver
            exceptional user experiences and help businesses achieve their
            objectives through technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">2+</h3>
              <p className="text-gray-400">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">8+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-gray-400">Passion</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="lg:w-2/5 flex justify-center overflow-visible">
          <div className="scale-90">
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
              onContactClick={() =>
                console.log("Contact clicked")
              }
              behindGlowColor="rgba(23, 138, 252, 0.67)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(59,130,246,0.45) 100%)"
              // innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;