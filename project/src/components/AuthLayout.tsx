import { type ReactNode } from 'react';
import { Link } from '@/lib/router';
import { Sparkles, Quote } from 'lucide-react';

export function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left: form */}
        <div className="flex flex-col px-6 py-10 sm:px-12 lg:px-16">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg shadow-brand-500/30">
              <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
                <path d="M32 14a18 18 0 1 0 0 36 18 18 0 0 0 0-36zm0 6a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" fill="white" fillOpacity="0.95" />
                <circle cx="32" cy="32" r="5" fill="white" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-ink-900">
              Skill<span className="gradient-text">Orbit</span>
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-center py-10">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold tracking-tight text-ink-900">{title}</h1>
              <p className="mt-2 text-base text-ink-600">{subtitle}</p>
              <div className="mt-8">{children}</div>
            </div>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative hidden overflow-hidden bg-ink-900 lg:block">
          <div className="absolute inset-0 bg-aurora-dark" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-float" />
          <div
            className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />

          <div className="relative flex h-full flex-col justify-center px-16">
            <span className="badge w-fit bg-white/10 text-accent-300 ring-1 ring-white/10">
              <Sparkles className="h-3.5 w-3.5" />
              Every Skill, Every Step
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
              Your AI-powered
              <br />
              career companion
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
              Join 50,000+ engineering students who are using SkillOrbit to become
              placement-ready with personalized AI-driven guidance.
            </p>

            <div className="mt-12 glass-dark rounded-2xl p-6">
              <Quote className="h-8 w-8 text-accent-400/60" />
              <p className="mt-3 text-sm leading-relaxed text-ink-200">
                "SkillOrbit completely changed how I prepared for placements. The AI
                roadmap told me exactly what to learn and in what order. I landed a
                software engineer role at a top product company."
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-semibold text-white">
                  AV
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Aditya Verma</p>
                  <p className="text-xs text-ink-400">B.Tech, NIT Trichy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
