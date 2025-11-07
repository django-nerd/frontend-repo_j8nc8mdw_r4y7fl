import Spline from '@splinetool/react-spline';
import { Rocket, Code, BookOpen } from 'lucide-react';

export default function Hero({ mode, onModeChange }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (won't block 3D) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
          <Rocket className="h-4 w-4 text-teal-300" />
          <span className="text-sm/5 text-white/90">Software Engineer Portfolio</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Clean. Modern. 3D-driven.
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          I build reliable, scalable web experiences. Switch modes to explore my work from different angles.
        </p>

        {/* Mode Switch */}
        <div className="mt-8 inline-flex items-center rounded-xl bg-white/10 p-1 backdrop-blur-md">
          <button
            onClick={() => onModeChange('engineer')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === 'engineer' ? 'bg-white text-black' : 'text-white/80 hover:text-white'
            }`}
            aria-pressed={mode === 'engineer'}
          >
            <Code className="h-4 w-4" />
            Engineer Mode
          </button>
          <button
            onClick={() => onModeChange('explorer')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              mode === 'explorer' ? 'bg-white text-black' : 'text-white/80 hover:text-white'
            }`}
            aria-pressed={mode === 'explorer'}
          >
            <BookOpen className="h-4 w-4" />
            Explorer Mode
          </button>
        </div>
      </div>
    </section>
  );
}
