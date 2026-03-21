interface SkillLogoProps {
  svgElement: React.ReactNode;
  alt: string;
  size?: number;
  className?: string;
  labelClassName?: string;
}

export default function SkillLogo({
  svgElement,
  alt,
  size = 40,
  className = '',
  labelClassName = '',
}: SkillLogoProps) {
  return (
    <div
      className={`group flex flex-col items-center gap-2 p-2 text-center text-muted transition-colors duration-200 ease-in-out hover:text-accent-darker dark:text-muted-dark dark:hover:text-accent ${className}`}
    >
      <div
        className="relative transform group-hover:-translate-y-1 transition-transform duration-200 ease-in-out"
        style={{ width: size, height: size }}
      >
        {svgElement}
      </div>
      <span
        className={`text-xs transition-colors duration-200 group-hover:text-foreground dark:group-hover:text-foreground-dark ${labelClassName}`}
      >
        {alt}
      </span>
    </div>
  );
}
