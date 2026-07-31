import { type ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-ink-50">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
