import { PublicLayout } from '@/components/PublicLayout';
import { Reveal } from '@/components/Reveal';
import { Link } from '@/lib/router';
import { plans } from '@/lib/content';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const comparisonFeatures = [
  { label: 'AI Career Assessment', free: true, pro: true, college: true },
  { label: 'AI Roadmap Generator', free: '1 roadmap', pro: 'Unlimited', college: 'Unlimited' },
  { label: 'Skill Gap Analysis', free: 'Basic', pro: 'Advanced', college: 'Advanced' },
  { label: 'AI Resume Builder', free: false, pro: true, college: true },
  { label: 'AI Portfolio Builder', free: false, pro: true, college: true },
  { label: 'AI Project Generator', free: false, pro: true, college: true },
  { label: 'AI Coding Mentor', free: false, pro: true, college: true },
  { label: 'AI Interview Coach', free: false, pro: '5 / month', college: 'Unlimited' },
  { label: 'Internship & Job Matching', free: false, pro: true, college: true },
  { label: 'AI Career Chatbot', free: 'Basic', pro: 'Priority', college: 'Priority' },
  { label: 'Progress Dashboard', free: true, pro: true, college: true },
  { label: 'College Dashboard', free: false, pro: false, college: true },
  { label: 'Batch Analytics', free: false, pro: false, college: true },
  { label: 'Dedicated Success Manager', free: false, pro: false, college: true },
];

function renderValue(value: boolean | string) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-green-600" />;
  if (value === false) return <span className="text-ink-300">—</span>;
  return <span className="text-sm font-medium text-ink-700">{value}</span>;
}

export function PricingPage() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-aurora py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container-pad relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/70 backdrop-blur-md text-brand-700 ring-1 ring-brand-200">
              Pricing
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Start free, upgrade when you're ready. No hidden fees, cancel anytime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative h-full rounded-3xl p-8 ${
                    plan.highlighted
                      ? 'glass-card border-2 border-brand-400 shadow-2xl shadow-brand-500/20 lg:-mt-4 lg:mb-4'
                      : 'glass-card'
                  }`}
                >
                  {plan.badge && (
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 badge ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg'
                          : 'bg-ink-900 text-white'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-ink-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-ink-600">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-ink-900">
                      {plan.price === 0 ? 'Free' : `₹${plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-sm text-ink-500">/{plan.period}</span>
                    )}
                  </div>
                  <Link
                    to={plan.name === 'College' ? '/contact' : '/register'}
                    className={`mt-6 w-full ${
                      plan.highlighted ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-sm text-ink-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad bg-ink-50">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Compare <span className="gradient-text">all features</span>
            </h2>
            <p className="mt-4 text-base text-ink-600">
              See exactly what's included in each plan.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 overflow-x-auto">
              <div className="glass-card overflow-hidden rounded-2xl">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-ink-200 bg-white/50">
                      <th className="px-6 py-5 text-left text-sm font-semibold text-ink-900">
                        Feature
                      </th>
                      <th className="px-6 py-5 text-center text-sm font-semibold text-ink-900">
                        Free
                      </th>
                      <th className="px-6 py-5 text-center text-sm font-semibold text-brand-600">
                        Pro
                      </th>
                      <th className="px-6 py-5 text-center text-sm font-semibold text-ink-900">
                        College
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? 'bg-white/30' : 'bg-transparent'}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-ink-800">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-center">{renderValue(row.free)}</td>
                        <td className="px-6 py-4 text-center">{renderValue(row.pro)}</td>
                        <td className="px-6 py-4 text-center">{renderValue(row.college)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-pad">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-500 px-8 py-14 text-center text-white shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="relative">
                <Sparkles className="mx-auto h-10 w-10 text-white/80" />
                <h2 className="mt-4 text-3xl font-bold tracking-tight">
                  Still have questions?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-base text-brand-50">
                  Our team is happy to help you choose the right plan for you or your
                  institution.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Contact Sales
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
