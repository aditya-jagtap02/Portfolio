import FlowingMenu from "./wrappers/FlowingMenu";

const skillItems = [
  {
    text: "Frontend",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    text: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    text: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    text: "Tools",
    skills: [
      "GitHub",
      "Postman",
      "VS Code",
      "Netlify",
      "Generative AI",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <h2 className="w-[90%] max-w-7xl mx-auto text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-6 sm:mb-8">
        SKILLS
      </h2>

      <div className="w-full h-[380px] sm:h-[450px] md:h-[500px] relative">
        <FlowingMenu
          items={skillItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#0f172a"
          borderColor="#334155"
        />
      </div>
    </section>
  );
}

export default Skills;