interface SkillLogoProps {
  svgElement: React.ReactNode;
  alt: string;
  size?: number;
}

export default function SkillLogo({
  svgElement,
  alt,
  size = 40,
}: SkillLogoProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 text-center p-2 group 
                 text-muted dark:text-muted-dark 
                 hover:text-accent-darker dark:hover:text-accent 
                 transition-colors duration-200 ease-in-out" // Color transition
    >
      <div
        className="relative transform group-hover:-translate-y-1 transition-transform duration-200 ease-in-out"
        style={{ width: size, height: size }}
      >
        {svgElement}
      </div>
      <span className="text-xs group-hover:text-foreground dark:group-hover:text-foreground-dark transition-colors duration-200">
        {alt}
      </span>
    </div>
  );
}
