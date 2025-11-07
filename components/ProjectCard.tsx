export default function ProjectCard({
  title,
  description,
  tags,
  href,
  onClick,
}: {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
        {title}
      </h3>
      <p className="text-muted dark:text-muted-dark">{description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {tags.map((tag, index) => (
          <span
            key={tag}
            className="text-accent-darker dark:text-accent font-semibold text-sm"
          >
            {tag}
            {index !== tags.length - 1 && ' •'}
          </span>
        ))}
      </div>
    </>
  );
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-left w-full border border-muted dark:border-muted-dark p-6 rounded-lg space-y-4 hover:bg-muted/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
      >
        {content}
      </button>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-muted dark:border-muted-dark p-6 rounded-lg space-y-4 hover:bg-muted/10 transition-colors"
    >
      {content}
    </a>
  );
}
