import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Target, Compass, TrendingUp, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Compass,
    title: 'Clear Career Direction',
    description: 'No more guessing. AI maps your skills, personality, and interests to the ideal career path for you.',
  },
  {
    icon: Target,
    title: 'Personalized Roadmap',
    description: 'Get a step-by-step learning plan built around your current skills, goals, and placement timeline.',
  },
  {
    icon: TrendingUp,
    title: 'Industry-Ready Skills',
    description: 'AI identifies exactly what companies demand right now and what you need to learn to close the gap.',
  },
  {
    icon: Rocket,
    title: 'Placement Confidence',
    description: 'Walk into interviews with an ATS-optimized resume, real projects, and practiced communication skills.',
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-aurora-dark opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-pad relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="badge bg-white/10 text-accent-300 ring-1 ring-white/10">
            Why SkillOrbit
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From <span className="gradient-text-light">potential</span> to{' '}
            <span className="gradient-text-light">professional success</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            We solve the real problems engineering students face — no clear roadmap,
            unknown skill demands, poor resumes, and late placement prep. SkillOrbit
            turns confusion into a confident, guided path.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 4) * 100}>
              <div className="glass-dark group h-full rounded-2xl p-6 transition-all hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 ring-1 ring-white/10">
                  <benefit.icon className="h-7 w-7 text-accent-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
