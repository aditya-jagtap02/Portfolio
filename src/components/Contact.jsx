import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 mt-14 sm:mt-20">
      <div className="w-[90%] max-w-7xl mx-auto py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-8 sm:mb-12">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Get In Touch
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-sky-400" />
                <a
                  href="mailto:aditya0205jagtap@gmail.com"
                  className="hover:text-white transition-colors break-all sm:break-normal"
                >
                  aditya0205jagtap@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0 text-sky-400" />
                <a
                  href="tel:+918010860560"
                  className="hover:text-white transition-colors"
                >
                  +91 80108 60560
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <a
                  href="#home"
                  className="hover:text-sky-300 transition-colors inline-block"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-sky-300 transition-colors inline-block"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-sky-300 transition-colors inline-block"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-sky-300 transition-colors inline-block"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl text-gray-300">
              <a
                href="https://github.com/aditya-jagtap02"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-sky-400 active:scale-95 transition-all p-1"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-jagtap-ba95a9236/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-sky-400 active:scale-95 transition-all p-1"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mt-5 leading-relaxed">
              Available for freelance projects, collaborations, and full-time
              opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Aditya Jagtap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Contact;