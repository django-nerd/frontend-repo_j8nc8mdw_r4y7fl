import { Github, Linkedin, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-white drop-shadow-sm">
          <span className="rounded bg-white/10 px-2 py-1 text-white backdrop-blur-sm">F.</span> Portfolio
        </a>
        <nav className="flex items-center gap-3">
          <a
            href="https://github.com"
            className="rounded-lg bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            className="rounded-lg bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="rounded-lg bg-white/10 p-2 text-white/90 transition hover:bg-white/20"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
