import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, tags } = frontmatter;

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
        <div className="space-y-4">
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
          <div className="flex flex-col space-y-2 text-sm text-skin-base/70 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <Datetime datetime={pubDatetime} />
            {tags && (
              <div className="flex items-center space-x-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-skin-card-muted px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="leading-relaxed text-skin-base/80">{description}</p>
        </div>
      </a>
    </li>
  );
}
