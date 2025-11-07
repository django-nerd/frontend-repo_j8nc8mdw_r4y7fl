import { Briefcase, Sparkles, Palette, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    tag: 'Data Viz',
    blurb: 'Streaming metrics with smooth interactions and delightful micro‑animations.',
  },
  {
    title: '3D Product Tour',
    tag: 'WebGL / 3D',
    blurb: 'Guided exploration that blends performance and aesthetics.',
  },
  {
    title: 'Design System',
    tag: 'UI/UX',
    blurb: 'Accessible components with consistent motion and theming.',
  },
];

export default function SectionExplorer() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Explorer Mode</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Curated highlights that focus on visual polish, narrative, and interactivity.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
        >
          <Briefcase className="h-4 w-4" /> View Resume
        </a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
              <Palette className="h-4 w-4" /> {p.tag}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.blurb}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900">
              Explore <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 p-[1px]">
        <div className="flex items-center justify-between rounded-2xl bg-white/90 p-6">
          <div className="max-w-xl">
            <h4 className="text-lg font-semibold text-gray-900">Let’s collaborate</h4>
            <p className="mt-1 text-sm text-gray-600">Open to building products that blend impact, craft, and performance.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4" /> Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
