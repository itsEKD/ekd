import {
  FaCode,
  FaGlobe,
  FaNetworkWired,
  FaTools,
  FaLaptop,
  FaGraduationCap,
} from "react-icons/fa";

export default function ServiceCard({
  title,
  description,
}) {
  const icons = {
    "Web Development": <FaGlobe size={32} />,
    "Software Development": <FaCode size={32} />,
    Networking: <FaNetworkWired size={32} />,
    "IT Support": <FaTools size={32} />,
    "Hardware Services": <FaLaptop size={32} />,
    "Academic Projects": <FaGraduationCap size={32} />,
  };

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="text-blue-600 mb-6">
        {icons[title]}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-blue-600 font-semibold group-hover:translate-x-1 transition">
        Learn More →
      </button>

    </div>
  );
}