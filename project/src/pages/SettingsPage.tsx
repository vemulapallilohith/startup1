import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { useNavigate } from '@/lib/router';
import {
  Bell,
  Lock,
  Palette,
  User,
  Mail,
  LogOut,
  Save,
  CheckCircle2,
  Sun,
  Moon,
  Monitor,
} from 'lucide-react';

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

export function SettingsPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notification_email: true,
    notification_push: true,
    theme_preference: 'system',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;

    supabase
      .from('profiles')
      .select('notification_email, notification_push, theme_preference')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setSettings({
            notification_email: data.notification_email,
            notification_push: data.notification_push,
            theme_preference: data.theme_preference,
          });
        }
        setLoading(false);
      });
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setSaved(false);

    const { error } = await supabase
      .from('profiles')
      .update({
        notification_email: settings.notification_email,
        notification_push: settings.notification_push,
        theme_preference: settings.theme_preference,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    setSaving(false);
    if (!error) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <DashboardLayout title="Settings">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Notification settings */}
        <div className="glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
              <Bell className="h-5.5 w-5.5 text-brand-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Notifications</h3>
              <p className="text-sm text-ink-500">Choose how you want to be notified.</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <label className="flex items-center justify-between rounded-xl bg-ink-50 p-4">
              <div>
                <p className="text-sm font-medium text-ink-900">Email Notifications</p>
                <p className="text-xs text-ink-500">Receive updates about your progress, jobs, and interviews.</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={settings.notification_email}
                onClick={() => setSettings({ ...settings, notification_email: !settings.notification_email })}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  settings.notification_email ? 'bg-brand-500' : 'bg-ink-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    settings.notification_email ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </label>

            <label className="flex items-center justify-between rounded-xl bg-ink-50 p-4">
              <div>
                <p className="text-sm font-medium text-ink-900">Push Notifications</p>
                <p className="text-xs text-ink-500">Get instant alerts for new job matches and interview reminders.</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={settings.notification_push}
                onClick={() => setSettings({ ...settings, notification_push: !settings.notification_push })}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  settings.notification_push ? 'bg-brand-500' : 'bg-ink-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    settings.notification_push ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </label>
          </div>
        </div>

        {/* Theme settings */}
        <div className="glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50">
              <Palette className="h-5.5 w-5.5 text-accent-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Appearance</h3>
              <p className="text-sm text-ink-500">Customize how SkillOrbit looks for you.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => setSettings({ ...settings, theme_preference: theme.value })}
                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                  settings.theme_preference === theme.value
                    ? 'border-brand-400 bg-brand-50'
                    : 'border-ink-200 bg-white hover:border-ink-300'
                }`}
              >
                <theme.icon className="h-6 w-6 text-ink-700" />
                <span className="text-sm font-medium text-ink-700">{theme.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Account settings */}
        <div className="glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-100">
              <User className="h-5.5 w-5.5 text-ink-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Account</h3>
              <p className="text-sm text-ink-500">Manage your account and security.</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-ink-50 p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ink-500" />
                <div>
                  <p className="text-sm font-medium text-ink-900">{user?.email}</p>
                  <p className="text-xs text-ink-500">Your registered email</p>
                </div>
              </div>
            </div>

            <button className="flex w-full items-center justify-between rounded-xl bg-ink-50 p-4 text-left transition-colors hover:bg-ink-100">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-ink-500" />
                <div>
                  <p className="text-sm font-medium text-ink-900">Change Password</p>
                  <p className="text-xs text-ink-500">Update your password</p>
                </div>
              </div>
            </button>

            <button
              onClick={handleSignOut}
              className="flex w-full items-center justify-between rounded-xl bg-red-50 p-4 text-left transition-colors hover:bg-red-100"
            >
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-red-700">Sign Out</p>
                  <p className="text-xs text-red-400">Sign out of your account</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center gap-4">
          <button onClick={handleSave} disabled={saving || loading} className="btn-primary">
            {saving ? (
              'Saving...'
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Settings
              </>
            )}
          </button>
          {saved && (
            <span className="flex items-center gap-2 text-sm font-medium text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              Settings saved successfully
            </span>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
