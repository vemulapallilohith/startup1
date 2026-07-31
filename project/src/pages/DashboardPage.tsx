import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import {
  Flame,
  Code2,
  Mic,
  Target,
  TrendingUp,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock,
  Sparkles,
  Briefcase,
  FileText,
  Route,
} from 'lucide-react';
import { Link } from '@/lib/router';

interface Profile {
  full_name: string | null;
  learning_streak: number;
  skills_mastered: number;
  interview_readiness: number;
  placement_readiness: number;
  career_goal: string | null;
  specialization: string | null;
}

interface Notification {
  id: string;
  type: string;
  title: string;
  message: string | null;
  read_at: string | null;
  created_at: string;
}

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'milestone',
    title: '7-day learning streak!',
    message: 'You completed 7 days in a row. Keep it up!',
    read_at: null,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'job',
    title: '3 new job matches found',
    message: 'Based on your skills, we found new opportunities for you.',
    read_at: null,
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    type: 'interview',
    title: 'Mock interview ready',
    message: 'Your next technical mock interview is scheduled.',
    read_at: new Date(Date.now() - 172800000).toISOString(),
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
];

const sampleActivities = [
  { icon: Code2, text: 'Completed "React Hooks Deep Dive" challenge', time: '2 hours ago', color: 'bg-brand-100 text-brand-600' },
  { icon: FileText, text: 'Resume ATS score improved to 94', time: '5 hours ago', color: 'bg-accent-100 text-accent-600' },
  { icon: Mic, text: 'Finished mock interview — Communication: 8/10', time: 'Yesterday', color: 'bg-amber-100 text-amber-600' },
  { icon: Sparkles, text: 'AI suggested a new project: "Real-time Chat App"', time: 'Yesterday', color: 'bg-purple-100 text-purple-600' },
  { icon: Briefcase, text: 'Applied to "Frontend Developer Intern" at TechCorp', time: '2 days ago', color: 'bg-green-100 text-green-600' },
  { icon: Route, text: 'Roadmap milestone reached: "Master TypeScript Basics"', time: '3 days ago', color: 'bg-blue-100 text-blue-600' },
];

const skillProgress = [
  { name: 'React', level: 85, color: 'from-brand-500 to-brand-400' },
  { name: 'TypeScript', level: 72, color: 'from-accent-500 to-accent-400' },
  { name: 'Data Structures', level: 68, color: 'from-amber-500 to-amber-400' },
  { name: 'System Design', level: 45, color: 'from-rose-500 to-rose-400' },
  { name: 'Python', level: 78, color: 'from-green-500 to-green-400' },
];

const weeklyData = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 55 },
  { day: 'Sun', value: 85 },
];

export function DashboardPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    supabase
      .from('profiles')
      .select('full_name, learning_streak, skills_mastered, interview_readiness, placement_readiness, career_goal, specialization')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setProfile(data);
        } else {
          setProfile({
            full_name: user.user_metadata?.full_name ?? user.email?.split('@')[0] ?? 'Student',
            learning_streak: 7,
            skills_mastered: 24,
            interview_readiness: 78,
            placement_readiness: 82,
            career_goal: 'Full-Stack Developer',
            specialization: 'Web Development',
          });
        }
        setLoading(false);
      });

    supabase
      .from('notifications')
      .select('id, type, title, message, read_at, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setNotifications(data);
        }
      });
  }, [user]);

  const stats = [
    {
      label: 'Learning Streak',
      value: profile?.learning_streak ?? 0,
      suffix: ' days',
      icon: Flame,
      color: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      change: '+3 this week',
    },
    {
      label: 'Skills Mastered',
      value: profile?.skills_mastered ?? 0,
      suffix: '',
      icon: Code2,
      color: 'from-brand-500 to-brand-400',
      bg: 'bg-brand-50',
      iconColor: 'text-brand-600',
      change: '+5 this month',
    },
    {
      label: 'Interview Readiness',
      value: profile?.interview_readiness ?? 0,
      suffix: '%',
      icon: Mic,
      color: 'from-accent-500 to-accent-400',
      bg: 'bg-accent-50',
      iconColor: 'text-accent-600',
      change: '+12%',
    },
    {
      label: 'Placement Readiness',
      value: profile?.placement_readiness ?? 0,
      suffix: '%',
      icon: Target,
      color: 'from-green-500 to-green-400',
      bg: 'bg-green-50',
      iconColor: 'text-green-600',
      change: '+8%',
    },
  ];

  const maxBar = Math.max(...weeklyData.map((d) => d.value));

  return (
    <DashboardLayout title="Overview">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-6 text-white shadow-xl sm:p-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-brand-50">Welcome back,</p>
            <h2 className="mt-1 text-2xl font-bold">
              {profile?.full_name ?? 'Student'}
            </h2>
            <p className="mt-1 text-sm text-brand-50">
              {profile?.career_goal
                ? `On track to become a ${profile.career_goal}`
                : 'Set your career goal to get a personalized roadmap'}
            </p>
          </div>
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition-all hover:bg-white/25"
          >
            <Sparkles className="h-4 w-4" />
            Update Profile
          </Link>
        </div>
      </div>

      {/* Stats cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-5.5 w-5.5 ${stat.iconColor}`} />
              </div>
              <span className="badge bg-green-50 text-green-600">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-ink-900">
              {loading ? (
                <span className="skeleton inline-block h-7 w-16" />
              ) : (
                <>
                  {stat.value}
                  <span className="text-base font-medium text-ink-400">{stat.suffix}</span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Weekly progress chart */}
        <div className="glass-card rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Weekly Progress</h3>
              <p className="text-sm text-ink-500">Your learning activity this week</p>
            </div>
            <span className="badge bg-brand-50 text-brand-600">This Week</span>
          </div>
          <div className="mt-8 flex items-end justify-between gap-3" style={{ height: '200px' }}>
            {weeklyData.map((d, i) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-accent-400 transition-all duration-700 hover:from-brand-600 hover:to-accent-500"
                    style={{
                      height: `${(d.value / maxBar) * 100}%`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-ink-500">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill progress */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-ink-900">Skill Progress</h3>
          <p className="text-sm text-ink-500">Your top skills this month</p>
          <div className="mt-6 space-y-4">
            {skillProgress.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink-700">{skill.name}</span>
                  <span className="text-sm font-semibold text-ink-900">{skill.level}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity + Notifications */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Recent activity */}
        <div className="glass-card rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-ink-900">Recent Activity</h3>
            <Link to="/dashboard" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-1">
            {sampleActivities.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-ink-50"
              >
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${activity.color}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink-800">{activity.text}</p>
                  <p className="text-xs text-ink-500">{activity.time}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-ink-900">Notifications</h3>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
              {notifications.filter((n) => !n.read_at).length}
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`rounded-xl p-3 transition-colors ${
                  notif.read_at ? 'bg-ink-50' : 'bg-brand-50/50 ring-1 ring-brand-100'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                    {notif.type === 'milestone' && <Sparkles className="h-4 w-4 text-amber-500" />}
                    {notif.type === 'job' && <Briefcase className="h-4 w-4 text-brand-600" />}
                    {notif.type === 'interview' && <Mic className="h-4 w-4 text-accent-600" />}
                    {!['milestone', 'job', 'interview'].includes(notif.type) && (
                      <Bell className="h-4 w-4 text-ink-500" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-ink-900">{notif.title}</p>
                    {notif.message && (
                      <p className="mt-0.5 text-xs text-ink-500">{notif.message}</p>
                    )}
                  </div>
                  {!notif.read_at && (
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Route, label: 'Generate Roadmap', desc: 'Get your AI plan', color: 'from-brand-500 to-brand-400' },
          { icon: FileText, label: 'Build Resume', desc: 'ATS-optimized', color: 'from-accent-500 to-accent-400' },
          { icon: Mic, label: 'Mock Interview', desc: 'Practice now', color: 'from-amber-500 to-amber-400' },
          { icon: Briefcase, label: 'Find Jobs', desc: 'AI matched', color: 'from-green-500 to-green-400' },
        ].map((action, i) => (
          <button
            key={i}
            className="glass-card glass-card-hover group rounded-2xl p-5 text-left"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${action.color} shadow-lg`}>
              <action.icon className="h-5.5 w-5.5 text-white" />
            </div>
            <p className="mt-4 text-sm font-semibold text-ink-900">{action.label}</p>
            <p className="mt-0.5 text-xs text-ink-500">{action.desc}</p>
          </button>
        ))}
      </div>
    </DashboardLayout>
  );
}
