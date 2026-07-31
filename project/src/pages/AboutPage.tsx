import { PublicLayout } from '@/components/PublicLayout';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Link } from '@/lib/router';
import {
  Target,
  Eye,
  AlertTriangle,
  CheckCircle2,
  GraduationCap,
  Building2,
  Globe2,
  ArrowRight,
} from 'lucide-react';

const problems = [
  'No clear roadmap to become industry-ready',
  'Students don\'t know which skills companies currently demand',
  'Resume quality is poor',
  'Lack of real-world project experience',
  'Poor interview preparation',
  'Students rely on random YouTube videos and courses',
  'Difficulty choosing a specialization (AI, Data Science, Cybersecurity, Web Dev, Cloud, etc.)',
  'Limited personalized mentorship',
  'Colleges cannot individually guide every student',
  'Placement preparation starts too late',
];

const solutions = [
  'AI Career Assessment maps skills, personality, and interests to the right path',
  'AI Roadmap Generator builds a personalized step-by-step learning plan',
  'Skill Gap Analysis compares your skills to industry demands',
  'AI Resume Builder creates ATS-optimized, scored resumes',
  'AI Project Generator suggests real projects for your portfolio',
  'AI Interview Coach provides unlimited mock interview practice',
  'AI Coding Mentor gives daily practice with instant feedback',
  'Internship & Job Matching connects you to relevant opportunities',
];

const audiences = [
  {
    icon: GraduationCap,
    title: 'Engineering Students',
    items: ['1st Year Students', '2nd Year Students', '3rd Year Students', 'Final Year Students'],
    sub: ['B.Tech', 'B.E.', 'MCA', 'BCA', 'B.Sc Computer Science'],
  },
  {
    icon: Building2,
    title: 'Institutions',
    items: ['Colleges', 'Universities', 'Placement Officers', 'Career Counselors'],
    sub: ['Coaching Institutes', 'EdTech Organizations'],
  },
];

const phases = [
  { phase: 'Phase 1', region: 'India', status: 'Current' },
  { phase: 'Phase 2', region: 'South Asia', status: 'Next' },
  { phase: 'Phase 3', region: 'Global Universities', status: 'Future' },
];

export function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-aurora py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container-pad relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/70 backdrop-blur-md text-brand-700 ring-1 ring-brand-200">
              About SkillOrbit
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Empowering engineering students with{' '}
              <span className="gradient-text">AI-driven career guidance</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              SkillOrbit transforms potential into professional success through
              intelligent learning, skill development, and continuous mentorship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="glass-card h-full rounded-3xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-200">
                  <Target className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">Our Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  To empower engineering students with personalized AI-driven career
                  guidance that transforms potential into professional success through
                  intelligent learning, skill development, and continuous mentorship.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass-card h-full rounded-3xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 ring-1 ring-accent-200">
                  <Eye className="h-7 w-7 text-accent-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">Our Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  To become the world's most trusted AI-powered career development
                  platform, enabling millions of students to confidently discover,
                  build, and achieve meaningful careers in the technology industry.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-pad bg-ink-50">
        <div className="container-pad">
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                The challenges engineering students <span className="gradient-text">actually face</span>
              </>
            }
            subtitle="Engineering students face numerous challenges during their academic journey. Large numbers of graduates struggle to secure jobs because of skill gaps, and employers report that graduates need additional training before becoming productive."
          />
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <h4 className="text-lg font-semibold text-ink-900">Current Industry Problems</h4>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {problems.map((problem, i) => (
                  <Reveal key={i} delay={(i % 2) * 80}>
                    <div className="flex items-start gap-3 rounded-xl bg-ink-50 p-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">
                        {i + 1}
                      </span>
                      <p className="text-sm text-ink-700">{problem}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="The Solution"
            title={
              <>
                AI guidance for <span className="gradient-text">every step</span>
              </>
            }
            subtitle="SkillOrbit replaces guesswork with a personalized, AI-driven path — from discovering your career direction to landing your first job."
          />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {solutions.map((solution, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="glass-card glass-card-hover flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-ink-800">{solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-pad bg-ink-50">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Who We Serve"
            title={
              <>
                Built for students and <span className="gradient-text">institutions</span>
              </>
            }
            subtitle="SkillOrbit serves engineering students at every stage of their journey, plus the colleges and organizations that guide them."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {audiences.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 100}>
                <div className="glass-card h-full rounded-3xl p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 ring-1 ring-brand-200/50">
                    <audience.icon className="h-7 w-7 text-brand-600" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">{audience.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {audience.items.map((item) => (
                      <span key={item} className="badge bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {audience.sub.map((item) => (
                      <span key={item} className="badge bg-ink-100 text-ink-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Target */}
      <section className="section-pad">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Geographic Target"
            title={
              <>
                Our <span className="gradient-text">expansion roadmap</span>
              </>
            }
            subtitle="We're starting where the need is greatest and expanding globally."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {phases.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 100}>
                <div className="glass-card glass-card-hover h-full rounded-2xl p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-500/20">
                    <Globe2 className="h-7 w-7 text-white" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-brand-600">{phase.phase}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink-900">{phase.region}</h3>
                  <span
                    className={`mt-3 inline-block badge ${
                      phase.status === 'Current'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-ink-100 text-ink-600'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-50">
        <div className="container-pad">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Join the movement
            </h2>
            <p className="mt-4 text-base text-ink-600">
              Be part of the platform that's transforming how engineering students
              prepare for their careers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/register" className="btn-primary">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
