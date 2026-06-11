import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Professional IT & Software Services
          </h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            From software development and websites to networking,
            hardware support, and academic projects, I provide
            practical technology solutions tailored to your needs.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Software Development */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">💻</div>

              <h2 className="text-2xl font-bold mt-4">
                Software Development
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ Custom Web Applications</li>
                <li>✓ Business Management Systems</li>
                <li>✓ REST APIs</li>
                <li>✓ Database Design</li>
                <li>✓ System Automation</li>
              </ul>
            </div>

            {/* Website Development */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">🌐</div>

              <h2 className="text-2xl font-bold mt-4">
                Website Development
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ Business Websites</li>
                <li>✓ E-Commerce Stores</li>
                <li>✓ Portfolio Websites</li>
                <li>✓ Blogs</li>
                <li>✓ Landing Pages</li>
              </ul>
            </div>

            {/* IT Support */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">🛠️</div>

              <h2 className="text-2xl font-bold mt-4">
                IT Support
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ Software Installation</li>
                <li>✓ System Troubleshooting</li>
                <li>✓ Performance Optimization</li>
                <li>✓ Maintenance Services</li>
                <li>✓ Technical Assistance</li>
              </ul>
            </div>

            {/* Networking */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">📡</div>

              <h2 className="text-2xl font-bold mt-4">
                Networking
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ LAN Setup</li>
                <li>✓ Router Configuration</li>
                <li>✓ Network Troubleshooting</li>
                <li>✓ Internet Sharing Solutions</li>
                <li>✓ Network Maintenance</li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">🖥️</div>

              <h2 className="text-2xl font-bold mt-4">
                Hardware Services
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ Computer Repairs</li>
                <li>✓ Hardware Upgrades</li>
                <li>✓ Diagnostics</li>
                <li>✓ Printer Setup</li>
                <li>✓ Preventive Maintenance</li>
              </ul>
            </div>

            {/* Academic Projects */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl">🎓</div>

              <h2 className="text-2xl font-bold mt-4">
                Academic Projects
              </h2>

              <ul className="mt-4 text-slate-600 space-y-2">
                <li>✓ Final Year Projects</li>
                <li>✓ ERD Design</li>
                <li>✓ DFD Design</li>
                <li>✓ UML Diagrams</li>
                <li>✓ Documentation Support</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need a Technology Solution?
          </h2>

          <p className="mt-6 text-lg">
            Let's discuss your project and turn your ideas into
            reliable software and IT solutions.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Contact Me
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}