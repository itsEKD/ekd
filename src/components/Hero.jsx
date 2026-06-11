import profile from "../assets/profile.jpg";

import {
  FaCode,
  FaServer,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/75
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                text-white
                px-5
                py-3
                rounded-full
                font-semibold
                shadow-lg
              "
            >
              <FaCode />
              Software Engineer • IT Consultant • Tech Solutions Provider
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Turning Ideas Into
              <span className="text-blue-600"> Digital Solutions</span>
            </h1>

            <p className="mt-5 text-lg text-slate-200 max-w-xl leading-relaxed">
              Helping businesses, organizations, startups, and individuals
              build websites, software systems, networking infrastructure,
              cloud solutions, and reliable IT environments that drive growth.
            </p>

            {/* Service Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6">

              {[
                "Web Development",
                "Software Engineering",
                "Networking Solutions",
                "IT Consultancy",
                "Linux Administration",
                "Hardware Support",
              ].map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    font-medium
                    shadow-lg
                  "
                >
                  <FaCheckCircle className="text-green-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="https://wa.me/254745058404"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-blue-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  shadow-lg
                  hover:bg-blue-700
                  hover:scale-105
                  transition
                "
              >
                Start a Project
                <FaArrowRight />
              </a>

              <a
                href="#projects"
                className="
                  border
                  border-slate-300
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-slate-100
                  transition
                "
              >
                View Portfolio
              </a>

            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-4 mt-6 text-slate-200">

              <div className="flex items-center gap-2">
                <FaPhone />
                +254 745 058 404
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                eliwaindah@gmail.com
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 mt-5">

              <a
                href="https://github.com/itsEKD"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-200 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/e-k-desaint-ekd-8985b83a7/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-slate-200 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:eliwaindah@gmail.com"
                className="text-2xl text-slate-200 hover:text-blue-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-200 blur-3xl rounded-full opacity-30"></div>
            {/* Profile Section */}
            <div className="relative">

              {/* Background Glow */}
              <div
                className="
                  absolute
                  -inset-10
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-500
                  to-blue-700
                  blur-[100px]
                  opacity-30
                  rounded-full
                "
              ></div>

              {/* Floating Shadow */}
              <div
                className="
                  absolute
                  -bottom-6
                  left-1/2
                  -translate-x-1/2
                  w-[80%]
                  h-10
                  bg-black/40
                  blur-xl
                  rounded-full
                "
              ></div>

              {/* Profile */}
              <img
                src={profile}
                alt="EKD Tech Solutions"
                className="
                  relative
                  w-[320px]
                  h-[320px]
                  md:w-[460px]
                  md:h-[460px]
                  object-cover
                  rounded-[32px]
                  border-4
                  border-white/20
                  shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />

            </div>

              {/* Floating Cards */}

              <div className="hidden md:flex absolute -top-2 -left-6 bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-xl items-center gap-2">
                <FaCode className="text-blue-600" />
                <span>Web Development</span>
              </div>

              <div className="hidden md:flex absolute top-1/2 -right-4 bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-xl items-center gap-2">
                🚀
                <span>Software Engineering</span>
              </div>

              <div className="hidden md:flex absolute bottom-6 -left-4 bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-xl items-center gap-2">
                <FaServer className="text-green-600" />
                <span>IT Infrastructure</span>
              </div>

            </div>

          </div>

        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

          <div className="bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-slate-200 mt-2">Projects Built</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-slate-200 mt-2">Technologies</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
            <p className="text-slate-200 mt-2">Commitment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-slate-200 mt-2">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}