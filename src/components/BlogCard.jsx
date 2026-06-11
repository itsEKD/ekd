export default function BlogCard({
  title,
  category,
  date,
  excerpt,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <span className="text-blue-600 font-medium">
        {category}
      </span>

      <h3 className="text-2xl font-bold mt-3">
        {title}
      </h3>

      <p className="text-sm text-slate-500 mt-2">
        {date}
      </p>

      <p className="mt-4 text-slate-600">
        {excerpt}
      </p>

      <button className="mt-6 text-blue-600 font-semibold">
        Read More →
      </button>

    </div>
  );
}