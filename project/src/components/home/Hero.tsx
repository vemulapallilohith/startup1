import { Link } from '@/lib/router';
import { ArrowRight, Sparkles, Play, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora pb-20 pt-12 md:pb-32 md:pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl animate-float" />
      <div
        className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="container-pad relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="badge bg-white/70 backdrop-blur-md text-brand-700 ring-1 ring-brand-200">
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Career Development Platform
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Every Skill,
                <br />
                <span className="gradient-text">Every Step</span> of Your Career
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
                SkillOrbit empowers engineering students with personalized AI-driven
                career guidance — from skill building and resume optimization to mock
                interviews and job matching.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/register" className="btn-primary text-base">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/features" className="btn-secondary text-base">
                  <Play className="h-4 w-4" />
                  Explore Features
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['A', 'S', 'R', 'P', 'K'].map((initial, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-semibold text-white"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-sm text-ink-600">
                    <span className="font-semibold text-ink-900">50,000+</span> students guided
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative">
              <div className="glass-card rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-ink-500">Placement Readiness</p>
                    <p className="text-3xl font-bold gradient-text">92%</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                    <Sparkles className="h-6 w-6 text-brand-600" />
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: '92%' }} />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-ink-50 p-4">
                    <p className="text-xs text-ink-500">Skills Mastered</p>
                    <p className="mt-1 text-2xl font-bold text-ink-900">24</p>
                    <div className="mt-2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full ${i < 6 ? 'bg-accent-500' : 'bg-ink-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-ink-50 p-4">
                    <p className="text-xs text-ink-500">Learning Streak</p>
                    <p className="mt-1 text-2xl font-bold text-ink-900">47 days</p>
                    <div className="mt-2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full bg-brand-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-ink-50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                      <span className="text-xs font-bold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-ink-900">Roadmap: Full-Stack Developer</p>
                      <p className="text-xs text-ink-500">Next: Learn TypeScript</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-ink-50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                      <span className="text-xs font-bold">HR</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-ink-900">Mock Interview Scheduled</p>
                      <p className="text-xs text-ink-500">Tomorrow, 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">ATS Score: 94</p>
                    <p className="text-xs text-ink-500">Resume optimized</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">3 new jobs matched</p>
                    <p className="text-xs text-ink-500">Based on your skills</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
