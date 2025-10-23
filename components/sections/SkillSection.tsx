import SkillLogo from '../SkillLogo';
import {
  javascriptSvg,
  typescriptSvg,
  pythonSvg,
  javaSvg,
  html5Svg,
  cssSvg,
  reactSvg,
  tailwindcssSvg,
  expressSvg,
  flaskSvg,
  numpySvg,
  pandasSvg,
  scikitlearnSvg,
  postgresqlSvg,
  mongodbSvg,
  supabaseSvg,
  gitSvg,
  dockerSvg,
  linuxSvg,
  nodejsSvg,
} from '../SkillIcons';

const skillsWithLogos = [
  // Languages
  { name: 'JavaScript', svg: javascriptSvg },
  { name: 'TypeScript', svg: typescriptSvg },
  { name: 'Python', svg: pythonSvg },
  { name: 'Java', svg: javaSvg },
  { name: 'HTML5', svg: html5Svg },
  { name: 'CSS', svg: cssSvg },

  // Frontend Frameworks/Libraries
  { name: 'React', svg: reactSvg },
  { name: 'Tailwind CSS', svg: tailwindcssSvg },

  // Backend Frameworks
  { name: 'Node.js', svg: nodejsSvg },
  { name: 'Express', svg: expressSvg },
  { name: 'Flask', svg: flaskSvg },

  // Data Science / ML
  { name: 'NumPy', svg: numpySvg },
  { name: 'Pandas', svg: pandasSvg },
  { name: 'Scikit-learn', svg: scikitlearnSvg },

  // Databases / BaaS
  { name: 'PostgreSQL', svg: postgresqlSvg },
  { name: 'MongoDB', svg: mongodbSvg },
  { name: 'Supabase', svg: supabaseSvg },

  // Tools & Technologies
  { name: 'Git', svg: gitSvg },
  { name: 'Docker', svg: dockerSvg },
  { name: 'Linux', svg: linuxSvg },
];

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
