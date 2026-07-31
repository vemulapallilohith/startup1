import { useState } from 'react';
import { PublicLayout } from '@/components/PublicLayout';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from '@/lib/router';
import { features, featureCategories } from '@/lib/features';
import { ArrowRight, Check } from 'lucide-react';

export function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? features
      : features.filter((f) => f.category === activeCategory);

  const categories = ['All', ...featureCategories];

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-aurora py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container-pad relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/70 backdrop-blur-md text-brand-700 ring-1 ring-brand-200">
              Features
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Twelve AI tools for <span className="gradient-text">every step</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              From career assessment to job matching, SkillOrbit gives you a complete
              AI-powered toolkit to become placement-ready.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          {/* Category filter */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25'
                      : 'bg-white/70 backdrop-blur-md border border-ink-200 text-ink-600 hover:border-brand-300 hover:text-ink-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Feature cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {filtered.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 100}>
                <div className="glass-card glass-card-hover group h-full rounded-2xl p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 ring-1 ring-brand-200/50 transition-all group-hover:from-brand-500/20 group-hover:to-accent-500/20">
                      <feature.icon className="h-7 w-7 text-brand-600" />
                    </div>
                    <div>
                      <span className="badge bg-ink-100 text-ink-500">{feature.category}</span>
                      <h3 className="mt-2 text-xl font-bold text-ink-900">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">
                    {feature.description}
                  </p>
                  <div className="mt-5 space-y-2">
                    {feature.points.map((point) => (
                      <div key={point} className="flex items-center gap-2.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-sm text-ink-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-50">
        <div className="container-pad">
          <Reveal>
            <div className="glass-card rounded-3xl p-10 text-center lg:p-16">
              <h2 className="text-3xl font-bold tracking-tight text-ink-900">
                Ready to use all these tools?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-600">
                Sign up free and get instant access to the AI Career Assessment, Skill
                Gap Analysis, and your personalized roadmap.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link to="/register" className="btn-primary">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
