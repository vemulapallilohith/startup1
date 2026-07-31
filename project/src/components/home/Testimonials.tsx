import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { testimonials } from '@/lib/content';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Students love <span className="gradient-text">SkillOrbit</span>
            </>
          }
          subtitle="Real stories from engineering students who transformed their career preparation with AI-driven guidance."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={(i % 3) * 100}>
              <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
                <Quote className="h-8 w-8 text-brand-200" />
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
                    <p className="text-xs text-ink-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
