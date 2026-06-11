export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  demo,
  github,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Image Placeholder */}
      <div className="h-48 bg-slate-200 flex items-center justify-center text-5xl">
        🚀
      </div>

      <div className="p-6">

        <span className="text-blue-600 font-medium">
          {category}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <p className="mt-4 text-slate-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={demo}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={github}
            className="border border-slate-300 px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}