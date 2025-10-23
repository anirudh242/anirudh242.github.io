import SkillLogo from '../SkillLogo';
import { skillsWithLogos } from '../SkillIcons';

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Technologies</h2>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
        {skillsWithLogos.map((skill) => (
          <SkillLogo
            key={skill.name}
            svgElement={skill.svg}
            alt={skill.name}
            size={40}
          />
        ))}
      </div>
    </section>
  );
}
