import { Link } from '@/lib/router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-50">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative text-center">
        <p className="text-8xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-2 text-base text-ink-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
