import { useState, type ReactNode } from 'react';
import {
  LayoutDashboard,
  Route,
  Code2,
  FileText,
  Briefcase,
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Sparkles,
  Mic,
  Globe,
} from 'lucide-react';
import { Link, useNavigate } from '@/lib/router';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/lib/auth';

const sidebarItems = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Roadmap', to: '/dashboard', icon: Route },
  { label: 'Skills', to: '/dashboard', icon: Code2 },
  { label: 'Resume', to: '/dashboard', icon: FileText },
  { label: 'Projects', to: '/dashboard', icon: Sparkles },
  { label: 'Interviews', to: '/dashboard', icon: Mic },
  { label: 'Portfolio', to: '/dashboard', icon: Globe },
  { label: 'Jobs', to: '/dashboard', icon: Briefcase },
  { label: 'Notifications', to: '/dashboard', icon: Bell },
];

const bottomItems = [
  { label: 'Profile', to: '/profile', icon: User },
  { label: 'Settings', to: '/settings', icon: Settings },
];

export function DashboardLayout({ children, title }: { children: ReactNode; title: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const initials = user?.email?.slice(0, 2).toUpperCase() ?? 'U';

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-ink-900 text-ink-300 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-500/30">
                <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
                  <path d="M32 14a18 18 0 1 0 0 36 18 18 0 0 0 0-36zm0 6a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" fill="white" fillOpacity="0.95" />
                  <circle cx="32" cy="32" r="5" fill="white" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold text-white">
                Skill<span className="text-accent-400">Orbit</span>
              </span>
            </Link>
            <button
              className="text-ink-400 hover:text-white lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-400 transition-all hover:bg-white/5 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-4.5 w-4.5" />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="my-6 h-px bg-white/5" />

            <div className="space-y-1">
              {bottomItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-400 transition-all hover:bg-white/5 hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-4.5 w-4.5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="border-t border-white/5 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-semibold text-white">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {user?.email}
                </p>
                <p className="text-xs text-ink-500">Student</p>
              </div>
              <button
                onClick={handleSignOut}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-ink-200 bg-white/80 px-4 backdrop-blur-xl sm:px-6">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 text-ink-600 lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <h1 className="text-lg font-semibold text-ink-900">{title}</h1>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-56 rounded-xl border border-ink-200 bg-ink-50 py-2 pl-9 pr-3 text-sm text-ink-900 placeholder-ink-400 transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
              />
            </div>

            <Link
              to="/dashboard"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-600 transition-colors hover:text-brand-600"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent-500 ring-2 ring-white" />
            </Link>

            <Link
              to="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-semibold text-white"
              aria-label="Profile"
            >
              {initials}
            </Link>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
