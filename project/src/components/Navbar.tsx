import { useEffect, useState } from 'react';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from '@/lib/router';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/lib/auth';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3.5'
      }`}
    >
      <div className="container-pad">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg' : 'bg-transparent'
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-primary !py-2.5 !px-5"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-ghost">
                  Login
                </Link>
                <Link to="/register" className="btn-primary !py-2.5">
                  Get Started
                </Link>
              </>
            )}
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 backdrop-blur-md border border-ink-200 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-0 bg-ink-900/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="container-pad relative z-10 pt-2">
            <div className="glass rounded-2xl p-4 shadow-xl">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-ink-200" />
                {user ? (
                  <Link
                    to="/dashboard"
                    className="btn-primary w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      className="btn-secondary w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn-primary w-full"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
