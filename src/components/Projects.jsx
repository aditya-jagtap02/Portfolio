import MovieVault from "../assets/img/movie-vault.png";
import E_Commerce from "../assets/img/e-commerce.png";
import CaprockFS from "../assets/img/caprockfs.png";
import EuroFresh from "../assets/img/euro-fresh.png";
function Projects() {
  const projects = [
    {
      id: 1,
      Name: "Movie Vault",
      Description:
        "Movie Vault is a responsive React-based movie discovery application that lets users browse trending films, search titles, view detailed information, and save favorites to a personalized watchlist using the TMDB API.",
      link: "https://movie-vault-watchlist.netlify.app/",
      image: MovieVault,
      tech: ["React JS", "HTML", "CSS", "JavaScript", "TMDB API"],
    },
    {
      id: 2,
      Name: "E-Commerce Website",
      Description:
        "Vehicle Motor Oil is a responsive e-commerce platform for browsing and purchasing automotive lubricants, featuring product listings, detailed specifications, category-based navigation, and a streamlined shopping experience.",
      link: "http://www.adityajagtap.byethost18.com/?i=1",
      image: E_Commerce,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      id: 3,
      Name: "CAPROCK Financial Service",
      Description:
        "CapRock Financial Services is a responsive corporate website designed to showcase financial consulting services, company expertise, and client-focused solutions with a modern, professional user interface.",
      link: "https://caprockfs.netlify.app/",
      image: CaprockFS,
      tech: ["React JS", "HTML", "CSS", "JavaScript", "Logo.dev API"],
    },
    {
      id: 4,
      Name: "Euro Fresh Sales",
      Description:
        "Euro Fresh Sales is a responsive business website that showcases solar water heaters and renewable energy solutions, enabling customers to explore products, learn about their benefits, and easily submit inquiries for residential and commercial installations.",
      link: "https://euro-fresh-sales-pune.netlify.app/",
      image: EuroFresh,
      tech: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    },
  ];

  return (
    <div className="w-[90%] h-screen mx-auto py-10">
      <h2 className="text-3xl font-bold font-mono mb-6">PROJECTS</h2>

      <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[350px] max-w-[350px] flex-shrink-0 rounded-xl border border-white/20 bg-white/10 p-6 text-white shadow-lg shadow-black/20 backdrop-blur-xl snap-center flex flex-col"
          >
            <div className="h-52 rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.Name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-110"
              />
            </div>

            <h3 className="text-xl font-bold mb-3">{project.Name}</h3>

            <p className="text-sm text-gray-300 flex-grow">
              {project.Description}
            </p>

            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Live Demo
              </a>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-white/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
