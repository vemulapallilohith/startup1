import { useEffect, useState, useCallback } from 'react';

/**
 * Lightweight hash-based router. No external dependency.
 * Routes are defined as patterns like "/dashboard", "/login", etc.
 * Supports a simple path param via :param segments.
 */

export interface RouteMatch {
  path: string;
  params: Record<string, string>;
}

const routes: { pattern: string; element: (m: RouteMatch) => React.ReactNode }[] = [];

export function registerRoute(pattern: string, element: (m: RouteMatch) => React.ReactNode) {
  routes.push({ pattern, element });
}

function matchRoute(pathname: string): { route: (typeof routes)[number]; params: Record<string, string> } | null {
  for (const route of routes) {
    const patternSegs = route.pattern.split('/').filter(Boolean);
    const pathSegs = pathname.split('/').filter(Boolean);
    if (patternSegs.length !== pathSegs.length) continue;
    const params: Record<string, string> = {};
    let matched = true;
    for (let i = 0; i < patternSegs.length; i++) {
      if (patternSegs[i].startsWith(':')) {
        params[patternSegs[i].slice(1)] = decodeURIComponent(pathSegs[i]);
      } else if (patternSegs[i] !== pathSegs[i]) {
        matched = false;
        break;
      }
    }
    if (matched) return { route, params };
  }
  return null;
}

export function navigate(to: string) {
  window.location.hash = to;
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

export function useRoute(): { path: string; element: React.ReactNode } {
  const [hash, setHash] = useState(() => window.location.hash.slice(1) || '/');

  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash.slice(1) || '/');
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    if (!window.location.hash) window.location.hash = '/';
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const pathname = hash || '/';
  const match = matchRoute(pathname);

  const element = match
    ? match.route.element({ path: pathname, params: match.params })
    : routes.find((r) => r.pattern === '/not-found')?.element({ path: pathname, params: {} }) ?? null;

  return { path: pathname, element };
}

export function useNavigate() {
  return useCallback((to: string) => {
    navigate(to);
  }, []);
}

export function Link({
  to,
  className,
  children,
  onClick,
  ...rest
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
