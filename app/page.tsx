import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ContactSection from '@/components/sections/ContactSection';
import SkillsSection from '@/components/sections/SkillSection';

export default function HomePage() {
  return (
    <main className="antialiased">
      <div className="max-w-3xl mx-auto p-8 space-y-6">
        <header className="flex justify-end mb-6 md:mb-8 lg:mb-9">
          <ThemeSwitcher />
        </header>
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
