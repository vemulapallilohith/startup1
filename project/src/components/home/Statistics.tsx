import { Reveal } from '@/components/Reveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { stats } from '@/lib/content';

export function Statistics() {
  return (
    <section className="section-pad">
      <div className="container-pad">
        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="grid gap-8 p-10 sm:grid-cols-2 lg:grid-cols-4 lg:p-14">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) * 100} className="text-center">
                <p className="text-4xl font-bold gradient-text sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-ink-600">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
