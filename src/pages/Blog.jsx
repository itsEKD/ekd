import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Technology Blog
          </h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Insights, tutorials, and practical guides covering
            software engineering, web development, networking,
            hardware, and emerging technologies.
          </p>

        </div>

      </section>

      {/* Articles */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
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
      <section className="bg-blue-600 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need Professional IT Services?
          </h2>

          <p className="mt-6 text-lg">
            Whether you need software development,
            website design, networking support,
            or hardware services, I'm here to help.
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