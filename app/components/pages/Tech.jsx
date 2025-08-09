
import { getTechnologies } from "@/lib/sanity.client";
import Image from "next/image";

export default async function TechnologiesPage() {
  const technologies = await getTechnologies();

  return (
    <>
    
    <h3 className="text-white text-2xl font-semibold mt-4 mb-4 ">Technologies</h3>
    <section className="space-y-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col sm:flex-row sm:items-center sm:gap-4   pb-3"
        >
          {/* Icon + Name/Link */}
          <div className="flex items-center gap-3">
            {tech.icon && (
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4 object-contain flex-shrink-0"
              />
            )}
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium underline"
            >
              {tech.name}
            </a>
          </div>

          {/* Description */}
          <span className="text-gray-500 text-lg mt-2 sm:mt-0">
            {tech.description}
          </span>
        </div>
      ))}
    </section>
    </>
  );
}
