import { Link } from '@/lib/router';
import { Logo } from '@/components/Logo';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Register', to: '/register' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/about' },
      { label: 'Blog', to: '/about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/contact' },
      { label: 'Terms of Service', to: '/contact' },
      { label: 'Cookie Policy', to: '/contact' },
      { label: 'GDPR', to: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="absolute inset-0 bg-aurora-dark opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container-pad relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-500/30">
                <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
                  <path d="M32 14a18 18 0 1 0 0 36 18 18 0 0 0 0-36zm0 6a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" fill="white" fillOpacity="0.95" />
                  <circle cx="32" cy="32" r="5" fill="white" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold text-white">
                Skill<span className="text-accent-400">Orbit</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Every Skill, Every Step. AI-driven career guidance that transforms
              potential into professional success for engineering students.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-ink-400 transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} SkillOrbit. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">
            Empowering engineering students worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
