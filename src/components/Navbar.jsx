import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="EKD Tech Solutions"
              className="h-12 md:h-14 object-contain"
            />

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900">
                EKD Tech Solutions
              </h1>

              <p className="text-xs text-slate-500">
                Software Engineer • IT Consultant
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              to="/services"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Services
            </Link>

            <Link
              to="/portfolio"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="https://github.com/itsEKD"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/e-k-desaint-ekd-8985b83a7/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600 text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/254745058404"
              target="_blank"
              rel="noreferrer"
              className="
                bg-blue-600
                text-white
                px-5
                py-3
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                hover:bg-blue-700
                transition
              "
            >
              <FaWhatsapp />
              Get Quote
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-6">

            <div className="flex flex-col gap-5">

              <Link to="/" onClick={closeMenu}>
                Home
              </Link>

              <Link to="/about" onClick={closeMenu}>
                About
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>

              <Link to="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>

              <Link to="/blog" onClick={closeMenu}>
                Blog
              </Link>

              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>

              <a
                href="https://wa.me/254745058404"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-600
                  text-white
                  py-3
                  rounded-xl
                  text-center
                  font-semibold
                "
              >
                Get Quote
              </a>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}