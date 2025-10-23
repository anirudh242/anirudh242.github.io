import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 mt-4 md:mt-0">
        <Image
          src="/profile.jpg"
          alt="Anirudh Bhardwaj profile picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">Anirudh Bhardwaj</h1>
        <p className="text-lg text-muted dark:text-muted-dark md:text-xl">
          Computer Science student crafting clean, efficient, and user-friendly
          digital experiences.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          <a
            href="https://github.com/anirudh242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/bhardwaj-anirudh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
