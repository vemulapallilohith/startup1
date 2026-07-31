import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { User, Mail, GraduationCap, Target, Camera, Save, CheckCircle2 } from 'lucide-react';

const degrees = ['B.Tech', 'B.E.', 'MCA', 'BCA', 'B.Sc Computer Science', 'Other'];
const years = ['1st Year', '2nd Year', '3rd Year', 'Final Year', 'Postgraduate'];
const specializations = [
  'Web Development',
  'AI / ML',
  'Data Science',
  'Cybersecurity',
  'Cloud Computing',
  'DevOps',
  'Mobile Development',
  'Not decided yet',
];

export function ProfilePage() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    full_name: '',
    bio: '',
    degree: 'B.Tech',
    year: '1st Year',
    specialization: 'Web Development',
    career_goal: '',
  });
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;

    supabase
      .from('profiles')
      .select('full_name, bio, degree, year, specialization, career_goal, avatar_url')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setForm({
            full_name: data.full_name ?? '',
            bio: data.bio ?? '',
            degree: data.degree ?? 'B.Tech',
            year: data.year ?? '1st Year',
            specialization: data.specialization ?? 'Web Development',
            career_goal: data.career_goal ?? '',
          });
          setAvatarUrl(data.avatar_url);
        } else {
          setForm((prev) => ({
            ...prev,
            full_name: user.user_metadata?.full_name ?? '',
          }));
        }
        setLoading(false);
      });
  }, [user]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    const ext = file.name.split('.').pop();
    const path = `${user.id}/avatar.${ext}`;

    setSaving(true);
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, file, { upsert: true });

    if (uploadError) {
      setSaving(false);
      return;
    }

    const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(path);
    const publicUrl = urlData.publicUrl;
    setAvatarUrl(publicUrl);

    await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id);
    setSaving(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setSaved(false);

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: form.full_name,
        bio: form.bio,
        degree: form.degree,
        year: form.year,
        specialization: form.specialization,
        career_goal: form.career_goal,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    setSaving(false);
    if (!error) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  const initials = (form.full_name || user?.email || 'U').slice(0, 2).toUpperCase();

  return (
    <DashboardLayout title="Profile">
      <div className="mx-auto max-w-3xl">
        {/* Avatar section */}
        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <div className="relative">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-2xl font-bold text-white shadow-lg">
                  {initials}
                </div>
              )}
              <label className="absolute -bottom-1 -right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-ink-200 transition-transform hover:scale-110">
                <Camera className="h-4 w-4 text-ink-600" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>
            <div>
              <h2 className="text-xl font-bold text-ink-900">
                {form.full_name || 'Your Name'}
              </h2>
              <p className="text-sm text-ink-500">{user?.email}</p>
              <p className="mt-1 text-sm text-ink-600">
                {form.degree} · {form.year}
              </p>
            </div>
          </div>
        </div>

        {/* Profile form */}
        <form onSubmit={handleSave} className="glass-card mt-6 rounded-3xl p-8">
          <h3 className="text-lg font-semibold text-ink-900">Personal Information</h3>
          <p className="mt-1 text-sm text-ink-500">
            This information helps us personalize your AI guidance.
          </p>

          <div className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="full_name">Full Name</label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                  <input
                    id="full_name"
                    type="text"
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div>
                <label className="label-field" htmlFor="email">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                  <input
                    id="email"
                    type="email"
                    disabled
                    value={user?.email ?? ''}
                    className="input-field pl-10 opacity-60"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="label-field" htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                rows={3}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                className="input-field resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="degree">Degree</label>
                <div className="relative">
                  <GraduationCap className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                  <select
                    id="degree"
                    value={form.degree}
                    onChange={(e) => setForm({ ...form, degree: e.target.value })}
                    className="input-field pl-10"
                  >
                    {degrees.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="label-field" htmlFor="year">Year of Study</label>
                <select
                  id="year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="input-field"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="specialization">Specialization Interest</label>
                <select
                  id="specialization"
                  value={form.specialization}
                  onChange={(e) => setForm({ ...form, specialization: e.target.value })}
                  className="input-field"
                >
                  {specializations.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label-field" htmlFor="career_goal">Career Goal</label>
                <div className="relative">
                  <Target className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                  <input
                    id="career_goal"
                    type="text"
                    value={form.career_goal}
                    onChange={(e) => setForm({ ...form, career_goal: e.target.value })}
                    className="input-field pl-10"
                    placeholder="e.g. Full-Stack Developer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button type="submit" disabled={saving || loading} className="btn-primary">
              {saving ? (
                'Saving...'
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
            {saved && (
              <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                Profile updated successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
