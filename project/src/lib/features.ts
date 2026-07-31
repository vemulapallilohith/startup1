import {
  Brain,
  Route,
  GitCompareArrows,
  FileText,
  Globe,
  Lightbulb,
  Code2,
  Mic,
  Briefcase,
  LayoutDashboard,
  MessageSquare,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
  points: string[];
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI Career Assessment',
    description: 'Discover your ideal career path through a comprehensive analysis of your skills, personality, and interests.',
    category: 'Career Guidance',
    points: ['Skill analysis', 'Personality analysis', 'Interest mapping', 'Career recommendation'],
  },
  {
    icon: Route,
    title: 'AI Roadmap Generator',
    description: 'Get a personalized learning plan built around your current skills, goals, and placement timeline.',
    category: 'Career Guidance',
    points: ['Current skills', 'Career goal', 'Available time', 'Placement timeline'],
  },
  {
    icon: GitCompareArrows,
    title: 'Skill Gap Analysis',
    description: 'AI compares your current skills against industry requirements and shows exactly what to learn next.',
    category: 'Skill Building',
    points: ['Current skills', 'Industry requirements', 'Missing skills', 'Recommended learning'],
  },
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Craft ATS-optimized resumes with real-time scoring, grammar correction, and recruiter feedback simulation.',
    category: 'Placement Prep',
    points: ['ATS optimization', 'Resume scoring', 'Grammar correction', 'Keyword optimization', 'Recruiter feedback simulation'],
  },
  {
    icon: Globe,
    title: 'AI Portfolio Builder',
    description: 'Build a standout portfolio with your GitHub, personal website, and project showcase in one place.',
    category: 'Placement Prep',
    points: ['GitHub portfolio', 'Personal website', 'Project showcase'],
  },
  {
    icon: Lightbulb,
    title: 'AI Project Generator',
    description: 'Get project ideas tailored to your skill level, career domain, and resume needs.',
    category: 'Skill Building',
    points: ['Skill level', 'Career domain', 'Resume needs'],
  },
  {
    icon: Code2,
    title: 'AI Coding Mentor',
    description: 'Daily coding practice with personalized challenges, weak-topic detection, and instant feedback.',
    category: 'Skill Building',
    points: ['Daily coding practice', 'Personalized challenges', 'Weak topic detection', 'Coding feedback'],
  },
  {
    icon: Mic,
    title: 'AI Interview Coach',
    description: 'Practice with mock technical and HR interviews, get communication feedback, and track improvement.',
    category: 'Interview Prep',
    points: ['Mock interviews', 'Technical questions', 'HR interviews', 'Communication feedback', 'Voice analysis (future)'],
  },
  {
    icon: Briefcase,
    title: 'Internship & Job Matching',
    description: 'AI recommends internships and jobs based on your skills, resume, interests, location, and eligibility.',
    category: 'Placement Prep',
    points: ['Skills', 'Resume', 'Interests', 'Location', 'Eligibility'],
  },
  {
    icon: LayoutDashboard,
    title: 'Progress Dashboard',
    description: 'Track your skills, learning streak, certifications, interview readiness, and placement readiness.',
    category: 'Tracking',
    points: ['Skills', 'Learning streak', 'Certifications', 'Interview readiness', 'Placement readiness'],
  },
  {
    icon: MessageSquare,
    title: 'AI Career Chatbot',
    description: 'A 24×7 AI mentor that answers career questions, interview doubts, resume issues, and learning recommendations.',
    category: 'Career Guidance',
    points: ['Career questions', 'Interview doubts', 'Resume issues', 'Learning recommendations'],
  },
  {
    icon: GraduationCap,
    title: 'College Dashboard',
    description: 'For placement officers: student analytics, skill reports, placement readiness, and batch insights.',
    category: 'Institution',
    points: ['Student analytics', 'Skill reports', 'Placement readiness', 'Batch insights'],
  },
];

export const featureCategories = ['Career Guidance', 'Skill Building', 'Interview Prep', 'Placement Prep', 'Tracking', 'Institution'];
