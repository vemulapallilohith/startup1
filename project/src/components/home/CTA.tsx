import { Link } from '@/lib/router';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-8 py-16 text-center text-white shadow-2xl sm:px-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent-300/20 blur-3xl" />

            <div className="relative">
              <span className="badge bg-white/15 text-white ring-1 ring-white/20">
                <Sparkles className="h-3.5 w-3.5" />
                Start Free Today
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to transform your career journey?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-50">
                Join 50,000+ engineering students who are using SkillOrbit to become
                placement-ready with AI-driven guidance.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
