import ProjectCard from '../ProjectCard';

export default function ProjectSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Flappy Bird AI"
          description="A reinforcement learning project where a Deep Q-Network agent learns to play Flappy Bird."
          tags={['Python', 'Neural Networks', 'PyTorch', 'NumPy', 'PyGame']}
          href="https://github.com/anirudh242/flappybird-dqn"
        />
        <ProjectCard
          title="Pairs Trading Backtester"
          description="A quantitative framework that discovers, optimizes, and validates market-neutral pairs trading strategies using rigorous in-sample/out-of-sample backtesting."
          tags={['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Statsmodels']}
          href="https://github.com/anirudh242/Pairs-Trading-Backtester"
        />
      </div>
    </section>
  );
}
