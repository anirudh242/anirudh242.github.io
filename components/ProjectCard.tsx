import { ArrowRight } from 'lucide-react';

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
  const visibleTags = tags.slice(0, 4);
  const hiddenTagCount = tags.length - visibleTags.length;

  const content = (
    <div className="flex h-full flex-col gap-4">
      <h3 className="min-h-[4rem] text-2xl font-bold text-foreground dark:text-foreground-dark">
        {title}
      </h3>
      <p className="min-h-[5.5rem] text-muted dark:text-muted-dark">
        {description}
      </p>
      <div className="min-h-[3.5rem] flex flex-wrap content-start gap-x-4 gap-y-2">
        {visibleTags.map((tag, index) => (
          <span
            key={tag}
            className="text-accent-darker dark:text-accent font-semibold text-sm"
          >
            {tag}
            {index !== visibleTags.length - 1 && ' •'}
          </span>
        ))}
        {hiddenTagCount > 0 ? (
          <span className="text-sm font-semibold text-muted dark:text-muted-dark">
            +{hiddenTagCount} more
          </span>
        ) : null}
      </div>
      {onClick ? (
        <div className="mt-auto flex items-center justify-end text-sm font-semibold text-muted transition-colors group-hover:text-accent-darker dark:text-muted-dark dark:group-hover:text-accent">
          View details
          <ArrowRight
            size={16}
            className="ml-1 transition-transform group-hover:translate-x-1"
          />
        </div>
      ) : null}
    </div>
  );
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group h-full w-full rounded-lg border border-muted p-6 text-left transition-colors hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-accent dark:border-muted-dark"
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
      className="group block h-full rounded-lg border border-muted p-6 transition-colors hover:bg-muted/10 dark:border-muted-dark"
    >
      {content}
    </a>
  );
}
