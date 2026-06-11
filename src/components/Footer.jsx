import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <img
              src="/logo.png"
              alt="EKD Tech Solutions"
              className="h-14 mb-4"
            />

            <p className="text-slate-400 leading-relaxed">
              Delivering professional software engineering,
              web development, networking solutions,
              IT support, and technology consulting
              for businesses and individuals.
            </p>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold text-lg mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>Networking Solutions</li>
              <li>Linux Administration</li>
              <li>IT Consultancy</li>
            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><a href="/">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">

              <p className="flex items-center gap-2">
                <FaEnvelope />
                eliwaindah@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhone />
                +254 745 058 404
              </p>

            </div>

            <div className="flex gap-5 mt-6">

              <a
                href="https://github.com/itsEKD"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/e-k-desaint-ekd-8985b83a7/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-500 text-sm">

          © {new Date().getFullYear()} EKD Tech Solutions.
          Built with React, Tailwind CSS & Vite.

        </div>

      </div>

    </footer>
  );
}