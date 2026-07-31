import { Link } from '@/lib/router';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 shadow-lg shadow-brand-500/30">
        <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
          <path
            d="M32 14a18 18 0 1 0 0 36 18 18 0 0 0 0-36zm0 6a12 12 0 1 1 0 24 12 12 0 0 1 0-24z"
            fill="white"
            fillOpacity="0.95"
          />
          <circle cx="32" cy="32" r="5" fill="white" />
          <path
            d="M32 20v8M32 36v8M20 32h8M36 32h8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </span>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-ink-900">
          Skill<span className="gradient-text">Orbit</span>
        </span>
      )}
    </Link>
  );
}
