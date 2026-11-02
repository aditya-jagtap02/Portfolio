import { useState } from "react";
import SectionHeader from "./common/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ArrowUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Development",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "aditya0205jagtap@gmail.com";
  const phoneNumber = "+91 80108 60560";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative border-t border-white/[0.08] bg-[#070707] pt-16 sm:pt-24 pb-12">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="CONTACT"
          subtitle="Looking to collaborate on a new project or hire a full-stack engineer? Let's connect."
        />

        {/* Contact Grid: Direct Info + Modern Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-20">
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Availability Status Card */}
              <div className="rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-5 sm:p-6 backdrop-blur-xl mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-white font-mono">
                    Available for Work
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  Open for freelance web development, full-time engineering roles, and collaborative projects.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3">
                {/* Email Card */}
                <div className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-lg border border-sky-400/20 bg-sky-500/10 text-sky-400 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-neutral-400 uppercase">Email Address</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs sm:text-sm font-medium text-neutral-200 hover:text-white truncate block transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0 ml-2"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-lg border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-neutral-400 uppercase">Phone & WhatsApp</p>
                      <a
                        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                        className="text-xs sm:text-sm font-medium text-neutral-200 hover:text-white truncate block transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0 ml-2"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <div className="p-2.5 rounded-lg border border-purple-400/20 bg-purple-500/10 text-purple-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-neutral-400 uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-200">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Links */}
            <div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Social Profiles
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/aditya-jagtap02"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <FaGithub className="w-4 h-4 text-white" />
                    <span className="text-xs font-medium">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/aditya-jagtap-ba95a9236/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Watermelon UI Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/[0.12] bg-neutral-950/80 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-sans">
                Fill out the details below and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-neutral-300 mb-1.5"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-neutral-300 mb-1.5"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject / Service Selection */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-neutral-300 mb-1.5"
                  >
                    INQUIRY TOPIC
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#121212] text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all cursor-pointer"
                  >
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="React / Frontend Web App">React / Frontend Web App</option>
                    <option value="Commercial Business Website">Commercial Business Website</option>
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-neutral-300 mb-1.5"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Opening Email Client...</span>
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Ready to Send!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Integrated Footer Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center font-mono font-bold tracking-tight text-base sm:text-lg text-white">
              <span>ADITYA</span>
              <span className="text-sky-400 ml-0.5">.DEV</span>
            </div>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <p className="text-xs text-neutral-400 font-sans">
              Full Stack Web Developer • Crafting modern web experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-400">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
          </ul>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 text-center text-xs text-neutral-600 font-mono">
          © {new Date().getFullYear()} Aditya Jagtap. Built with React, Tailwind CSS & Watermelon UI design principles.
        </div>
      </div>
    </footer>
  );
}

export default Contact;
