import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="w-[90%] mx-auto py-16">
        <h2 className="text-3xl font-bold font-mono mb-12">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a
                  href="mailto:aditya0205jagtap@gmail.com"
                  className="hover:text-white transition"
                >
                  aditya0205jagtap@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone />
                <a
                  href="tel:+918010860560"
                  className="hover:text-white transition"
                >
                  +91 80108 60560
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="text-gray-400 mt-6">
              Available for freelance projects,
              collaborations, and full-time opportunities.
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Contact;