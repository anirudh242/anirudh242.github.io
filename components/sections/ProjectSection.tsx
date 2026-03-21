'use client';
import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Modal from '../Modal';

export default function ProjectSection() {
  const projects = [
    {
      title: 'Flappy Bird AI',
      description:
        'A reinforcement learning project where a Deep Q-Network agent learns to play Flappy Bird.',
      tags: ['Python', 'PyTorch', 'Neural Networks', 'NumPy', 'PyGame'],
      href: 'https://github.com/anirudh242/flappybird-dqn',
    },
    {
      title: 'Pairs Trading Backtester',
      description:
        'A quantitative framework that discovers, optimizes, and validates market-neutral pairs trading strategies using rigorous in-sample/out-of-sample backtesting.',
      tags: ['Python', 'Pandas', 'NumPy', 'Statsmodels', 'Matplotlib'],
      href: 'https://github.com/anirudh242/Pairs-Trading-Backtester',
    },
    {
      title: 'ClassRep App',
      description:
        "Mobile app focused on bringing organised communication and efficient homework submission to my university's classrooms.",
      tags: [
        'React Native',
        'TypeScript',
        'Supabase',
        'PostgreSQL',
        'Edge Functions',
        'Serverless',
        'TailwindCSS',
        'Mobile App Development',
      ],
      href: 'https://github.com/anirudh242/ClassRep',
    },
    {
      title: 'Blockchain Club CU Website',
      description:
        'Created and maintained the website for my universities Blockchain Club.',
      tags: ['Next.js', 'TailwindCSS', 'Frontend Development', 'UI/UX'],
      href: 'https://github.com/Blockchain-Club-CU/blockchain-club-cu.github.io',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tags={p.tags}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      <Modal
        isOpen={selected != null}
        onClose={() => setSelectedIndex(null)}
        title={selected?.title}
      >
        {selected ? (
          <div className="space-y-4">
            <p className="text-muted dark:text-muted-dark">
              {selected.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {selected.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="text-accent-darker dark:text-accent font-semibold text-sm"
                >
                  {tag}
                  {index !== selected.tags.length - 1 && ' •'}
                </span>
              ))}
            </div>
            {selected.href ? (
              <div className="pt-2">
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent-darker dark:bg-accent px-4 py-2 font-semibold text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  View on GitHub
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
