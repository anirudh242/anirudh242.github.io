import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <p className="text-muted dark:text-muted-dark">
        Have a question or just want to connect? My inbox is always open.
      </p>
      <a
        href="mailto:anirudhbhardwaj48@gmail.com"
        className="inline-flex items-center gap-2 text-accent-darker dark:text-accent font-bold hover:underline"
      >
        <Mail size={20} />
        Say Hello
      </a>
    </section>
  );
}
