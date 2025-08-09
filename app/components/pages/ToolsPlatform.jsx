import {getTools} from "@/lib/sanity.client";

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <>
      <h3 className="text-white text-2xl font-semibold mt-4 mb-4">Tools</h3>
      <section className="space-y-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 pb-3">
            {/* Icon + Name/Link */}
            <div className="flex items-center gap-3">
              {tool.icon && (
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
              )}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium underline"
              >
                {tool.name}
              </a>
            </div>

            {/* Description */}
            <span className="text-gray-500 text-lg mt-2 sm:mt-0">
              {tool.description}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}