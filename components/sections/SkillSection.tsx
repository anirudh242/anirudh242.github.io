import SkillLogo from '../SkillLogo';
import { skillsWithLogos } from '../SkillIcons';

export default function SkillsSection() {
  const loopingSkills = [...skillsWithLogos, ...skillsWithLogos];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Technologies</h2>
      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background via-background/80 to-transparent dark:from-background-dark dark:via-background-dark/80" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background via-background/80 to-transparent dark:from-background-dark dark:via-background-dark/80" />

        <div className="skill-marquee flex w-max min-w-full items-center gap-6 px-3 hover:[animation-play-state:paused]">
          {loopingSkills.map((skill, index) => (
            <SkillLogo
              key={`${skill.name}-${index}`}
              svgElement={skill.svg}
              alt={skill.name}
              size={40}
              labelClassName="hidden"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
