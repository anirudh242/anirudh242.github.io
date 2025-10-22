export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-muted dark:border-muted-dark p-6 rounded-lg space-y-4 hover:bg-muted/10 transition-colors"
    >
      <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
        {title}
      </h3>
      <p className="text-muted dark:text-muted-dark">{description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-accent-darker dark:text-accent font-semibold text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
