import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Portfolio
          </h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            A collection of software engineering, web development,
            IT support, and technology projects showcasing practical
            problem-solving and technical expertise.
          </p>

        </div>

      </section>

      {/* Projects */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                demo={project.demo}
                github={project.github}
              />
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Have a Project in Mind?
          </h2>

          <p className="mt-6 text-lg">
            Let's build scalable software, modern websites,
            and reliable technology solutions together.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
            Contact Me
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}