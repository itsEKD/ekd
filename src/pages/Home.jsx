import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import services from "../data/services";
import projects from "../data/projects";
import skills from "../data/skills";
import blogs from "../data/blogs";
import techStack from "../data/techStack";
import stats from "../data/stats";

import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Technologies */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <img
              src="/icon.svg"
              alt="EKD Technologies"
              className="h-16 mx-auto mb-4"
            />

            <h2 className="text-slate-500 uppercase tracking-wider text-sm">
              Technologies I Work With
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-100 px-5 py-3 rounded-full font-medium hover:bg-blue-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((stat) => (
              <div
                key={stat.id}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  shadow-sm
                  text-center
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Professional Services
          </h2>

          <p className="mt-6 text-center text-slate-600 max-w-3xl mx-auto">
            I provide software development, web design,
            networking solutions, IT support, hardware
            maintenance, cloud deployment, and academic
            project assistance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}

          </div>

        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-center mb-8">
            <img
              src="/logo.svg"
              alt="EKD Tech Solutions"
              className="h-24 md:h-32"
            />
          </div>

          <div className="text-center">

            <h2 className="text-3xl md:text-5xl font-bold">
              Welcome to EKD Tech Solutions
            </h2>

            <p className="mt-8 text-slate-600 max-w-4xl mx-auto leading-relaxed text-lg">
              EKD Tech Solutions helps businesses,
              organizations, students, and entrepreneurs
              leverage technology through software engineering,
              web development, networking solutions,
              IT consultancy, and hardware support.
            </p>

            <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-relaxed">
              With expertise spanning React, Python,
              Flask, databases, Linux administration,
              networking, cloud deployment, and hardware
              diagnostics, we build practical technology
              solutions that solve real-world problems.
            </p>

          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Featured Projects
          </h2>

          <p className="mt-5 text-center text-slate-600 max-w-3xl mx-auto">
            A showcase of software engineering, web development,
            IT infrastructure, and technology solutions built
            for businesses, organizations, and academic institutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
              />
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Why Choose EKD Tech Solutions?
          </h2>

          <p className="text-center text-slate-600 mt-6 max-w-2xl mx-auto">
            Delivering reliable technology solutions backed by
            software engineering expertise and practical IT experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition">
              <div className="text-5xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-4 text-slate-600">
                Timely project completion without compromising quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition">
              <div className="text-5xl">🎯</div>

              <h3 className="mt-5 text-xl font-bold">
                Results Focused
              </h3>

              <p className="mt-4 text-slate-600">
                Solutions designed around your goals and business needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition">
              <div className="text-5xl">🛡️</div>

              <h3 className="mt-5 text-xl font-bold">
                Reliable Support
              </h3>

              <p className="mt-4 text-slate-600">
                Continued assistance and maintenance after project delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Skills & Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  bg-gradient-to-r
                  from-blue-50
                  to-cyan-50
                  border
                  border-blue-100
                  px-5
                  py-3
                  rounded-full
                  font-medium
                  hover:scale-105
                  transition
                "
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Blog Preview */}
      <section
        id="blog"
        className="py-16 md:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Latest Articles
          </h2>

          <p className="mt-6 text-center text-slate-600">
            Tutorials, insights, and practical technology guides.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                category={blog.category}
                date={blog.date}
                excerpt={blog.excerpt}
              />
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build Your Next Project?
          </h2>

          <p className="mt-6 text-lg">
            Whether you need a website, software system,
            networking infrastructure, IT support,
            or technology consulting, let's work together.
          </p>

          <a
            href="https://wa.me/254745058404"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start a Project
          </a>

        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <img
            src="/logo.svg"
            alt="EKD Tech Solutions"
            className="h-16 mx-auto mb-4"
          />

          <p className="text-slate-300">
            Delivering professional software engineering,
            web development, networking, IT support,
            and technology consulting solutions.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}