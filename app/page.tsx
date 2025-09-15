import { ThemeSwitcher } from '@/components/ThemeSwitcher'; // Ensure this path is correct
import { Github, Linkedin, Mail } from 'lucide-react';

// Project Card Component
function ProjectCard({
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
            className="text-accent dark:text-accent font-semibold text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark antialiased">
      <div className="max-w-3xl mx-auto p-8 space-y-16">
        {/* Header with Theme Switcher */}
        <header className="flex justify-end">
          <ThemeSwitcher />
        </header>

        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-5xl font-bold">Anirudh Bhardwaj</h1>
          <p className="text-xl text-muted dark:text-muted-dark">
            Computer Science student crafting clean, efficient, and
            user-friendly digital experiences.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </section>

        {/* Projects Section */}
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
            {/* Add more ProjectCard components as you build more projects */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted dark:text-muted-dark">
            Have a question or just want to connect? My inbox is always open.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 text-accent-darker dark:text-accent font-bold hover:underline"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </section>
      </div>
    </main>
  );
}
