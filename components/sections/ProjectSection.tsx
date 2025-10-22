import ProjectCard from '../ProjectCard';

export default function ProjectSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="This Portfolio"
          description="My personal space on the web, built with a modern tech stack to be fast, themeable, and SEO-friendly."
          tags={['Next.js', 'React', 'Tailwind CSS', 'TypeScript']}
          href="#"
        />
        <ProjectCard
          title="Project Two"
          description="A brief and engaging description of another one of your cool projects goes here."
          tags={['Python', 'Flask', 'SQLAlchemy']}
          href="#"
        />
      </div>
    </section>
  );
}
