import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"projects">["data"];
  secHeading?: boolean;
}

export default function ProjectCard({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDate, description, technologies } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className:
      "text-xl font-semibold tracking-tight text-skin-base group-hover:text-skin-accent transition-colors duration-200",
  };

  return (
    <li className="group my-8">
      <a
        href={href}
        className="block rounded-lg border border-skin-line bg-skin-card p-6 transition-all duration-200 hover:border-skin-accent hover:shadow-lg"
      >
        <div className="flex h-full flex-col space-y-4">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
          <div className="flex items-center space-x-4 text-sm text-skin-base/70">
            <Datetime datetime={pubDate} />
          </div>
          <p className="flex-grow leading-relaxed text-skin-base/80">
            {description}
          </p>
          {technologies && (
            <div className="mt-auto flex flex-wrap items-center gap-2">
              {technologies.map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-skin-card-muted px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </li>
  );
}
