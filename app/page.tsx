import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark antialiased">
      <div className="max-w-3xl mx-auto p-8 space-y-16">
        <header className="flex justify-end">
          <ThemeSwitcher />
        </header>
        <HeroSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
