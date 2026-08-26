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
    <section
      id="skills"
      className=" py-20"
    >
      <h2 className="w-[90%] mx-auto text-3xl font-bold font-mono mb-8">
        SKILLS
      </h2>

      <div
        style={{
          height: "500px",
          position: "relative",
        }}
      >
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