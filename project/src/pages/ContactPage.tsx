import { useState } from 'react';
import { PublicLayout } from '@/components/PublicLayout';
import { Reveal } from '@/components/Reveal';
import { Link } from '@/lib/router';
import { supabase } from '@/lib/supabase';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
} from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@skillorbit.com', href: 'mailto:hello@skillorbit.com' },
  { icon: Phone, label: 'Phone', value: '+91 80 4567 8900', href: 'tel:+918045678900' },
  { icon: MapPin, label: 'Office', value: 'Bengaluru, Karnataka, India', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9 AM – 6 PM IST', href: '#' },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-aurora py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container-pad relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/70 backdrop-blur-md text-brand-700 ring-1 ring-brand-200">
              Contact Us
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Have a question about SkillOrbit, need a demo for your college, or want
              to partner with us? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact info */}
            <Reveal>
              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-ink-900">Get in touch</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    Reach out through any of these channels. We typically respond
                    within 24 hours.
                  </p>
                  <div className="mt-6 space-y-4">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 rounded-xl bg-ink-50 p-3 transition-colors hover:bg-ink-100"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                          <info.icon className="h-5 w-5 text-brand-600" />
                        </div>
                        <div>
                          <p className="text-xs text-ink-500">{info.label}</p>
                          <p className="text-sm font-medium text-ink-900">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50">
                      <MessageSquare className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink-900">Need quick help?</h4>
                      <p className="text-xs text-ink-500">
                        Our AI Career Chatbot is available 24/7
                      </p>
                    </div>
                  </div>
                  <Link to="/register" className="btn-secondary mt-4 w-full">
                    Try the AI Chatbot
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delay={100}>
              <div className="glass-card rounded-3xl p-8">
                {status === 'success' ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-ink-900">Message sent!</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-600">
                      Thanks for reaching out. Our team will get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label-field" htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="input-field"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="label-field" htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label-field" htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="input-field"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="input-field resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full"
                    >
                      {status === 'submitting' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
