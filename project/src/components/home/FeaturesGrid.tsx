import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { features } from '@/lib/features';

export function FeaturesGrid() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Core Features"
          title={
            <>
              Everything you need to become
              <br />
              <span className="gradient-text">placement-ready</span>
            </>
          }
          subtitle="Twelve AI-powered tools that guide you from your first year to your first job — assessment, skill building, resume optimization, interview practice, and job matching, all in one platform."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 100}>
              <div className="glass-card glass-card-hover group h-full rounded-2xl p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 ring-1 ring-brand-200/50 transition-all group-hover:from-brand-500/20 group-hover:to-accent-500/20">
                  <feature.icon className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{feature.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {feature.points.slice(0, 3).map((point) => (
                    <span
                      key={point}
                      className="badge bg-ink-100 text-ink-600"
                    >
                      {point}
                    </span>
                  ))}
                  {feature.points.length > 3 && (
                    <span className="badge bg-ink-100 text-ink-500">
                      +{feature.points.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
