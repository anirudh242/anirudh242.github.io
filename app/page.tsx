// Project Card Component
// function ProjectCard({
//   title,
//   description,
//   tags,
//   href,
// }: {
//   title: string;
//   description: string;
//   tags: string[];
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block border border-muted dark:border-muted-dark p-6 rounded-lg space-y-4 hover:bg-muted/10 transition-colors"
//     >
//       <h3 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
//         {title}
//       </h3>
//       <p className="text-muted dark:text-muted-dark">{description}</p>
//       <div className="flex flex-wrap gap-x-4 gap-y-2">
//         {tags.map((tag) => (
//           <span
//             key={tag}
//             className="text-accent dark:text-accent font-semibold text-sm"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </a>
//   );
// }

import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative">
      <div>
        <header className="absolute top-0 right-0 p-6">
          <ThemeSwitcher />
        </header>
      </div>
      <section className="h-screen flex items-center justify-center bg-background dark:bg-background-dark">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl md:text-7xl font-semibold">
            Anirudh Bhardwaj
          </div>

          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="#"
              aria-label="GitHub profile"
              className="group transition-colors"
            >
              <Github className="h-8 w-8 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white stroke-current" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn profile"
              className="group transition-colors"
            >
              <Linkedin className="h-8 w-8 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white stroke-current" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
