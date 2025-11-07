import { Cpu, Boxes, Cloud, Shield } from 'lucide-react';

export default function SectionEngineer() {
  const items = [
    {
      icon: Cpu,
      title: 'Systems Thinking',
      desc: 'Architecting resilient services with clean contracts and strong observability.',
    },
    {
      icon: Boxes,
      title: 'Full‑Stack Craft',
      desc: 'From typed APIs to polished UI—delivering end-to-end product value.',
    },
    {
      icon: Cloud,
      title: 'Scalable Infra',
      desc: 'Cloud-native patterns, IaC, CI/CD, and automated testing at the core.',
    },
    {
      icon: Shield,
      title: 'Security Mindset',
      desc: 'Defense-in-depth, secure defaults, and privacy-first decisions.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Engineer Mode</h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        A snapshot of my core capabilities and how I approach building reliable software.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-800 group-hover:bg-gray-100">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
