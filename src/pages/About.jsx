import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Me
            </h1>

            <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
              Software Engineer, IT Consultant, and Technology
              Professional passionate about building reliable
              software solutions and helping organizations
              leverage technology effectively.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center text-7xl mx-auto">
                👨‍💻
              </div>
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Who I Am
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                I am a Software Engineer and IT Professional with
                experience in software development, web development,
                networking, database systems, computer hardware,
                and IT support services.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                My work focuses on designing and developing
                practical technology solutions that solve
                real-world challenges for businesses,
                organizations, and individuals.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Over the years I have worked on projects
                including web applications, e-commerce
                platforms, attendance systems, fitness
                tracking systems, and academic software
                engineering projects.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">
                Software Development
              </h3>

              <p className="mt-3 text-slate-600">
                Custom systems, automation tools, and business applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">
                Web Development
              </h3>

              <p className="mt-3 text-slate-600">
                Responsive websites, blogs, portfolios, and web apps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">
                Networking
              </h3>

              <p className="mt-3 text-slate-600">
                LAN setup, router configuration, and troubleshooting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl">
                Hardware Support
              </h3>

              <p className="mt-3 text-slate-600">
                PC maintenance, upgrades, diagnostics, and repairs.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Why Work With Me?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="font-bold text-xl">
                Problem Solver
              </h3>

              <p className="mt-3 text-slate-600">
                Focused on creating practical solutions that deliver results.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Multi-Disciplinary
              </h3>

              <p className="mt-3 text-slate-600">
                Expertise in software, networking, and hardware systems.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Reliable Partner
              </h3>

              <p className="mt-3 text-slate-600">
                Committed to quality, communication, and client success.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}