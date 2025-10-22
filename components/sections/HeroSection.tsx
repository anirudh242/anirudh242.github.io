import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="space-y-4">
      <h1 className="text-5xl font-bold">Anirudh Bhardwaj</h1>
      <p className="text-xl text-muted dark:text-muted-dark">
        Computer Science student crafting clean, efficient, and user-friendly
        digital experiences.
      </p>
      <div className="flex items-center gap-4 pt-2">
        <a
          href="https://github.com/anirudh242/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted dark:text-muted-dark hover:text-accent-darker dark:hover:text-accent transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/bhardwaj-anirudh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted dark:text-muted-dark hover:text-accent-darker dark:hover:text-accent transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
}
