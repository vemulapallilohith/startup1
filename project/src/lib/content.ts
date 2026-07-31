export interface Plan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for getting started with AI-driven career guidance.',
    features: [
      'AI Career Assessment',
      'Basic Skill Gap Analysis',
      '1 AI Roadmap',
      'Community access',
      'Progress Dashboard',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: 499,
    period: 'month',
    description: 'Everything you need to become placement-ready, powered by AI.',
    features: [
      'Everything in Free',
      'Unlimited AI Roadmaps',
      'AI Resume Builder with ATS scoring',
      'AI Project Generator',
      'AI Coding Mentor',
      '5 mock interviews / month',
      'Internship & job matching',
      'Priority AI Career Chatbot',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'College',
    price: 99,
    period: 'student / month',
    description: 'For colleges and institutions to guide every student at scale.',
    features: [
      'Everything in Pro',
      'College Dashboard for placement officers',
      'Batch analytics & skill reports',
      'Placement readiness tracking',
      'Dedicated success manager',
      'Custom branding',
      'Onboarding workshops',
    ],
    cta: 'Contact Sales',
    badge: 'Institutions',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aditya Verma',
    role: 'B.Tech, NIT Trichy',
    text: 'SkillOrbit completely changed how I prepared for placements. The AI roadmap told me exactly what to learn and in what order. I landed a software engineer role at a top product company.',
    avatar: 'AV',
  },
  {
    name: 'Sneha Iyer',
    role: 'MCA, VIT University',
    text: 'The mock interview coach was a game-changer. I went from freezing up in technical interviews to confidently solving problems and explaining my approach.',
    avatar: 'SI',
  },
  {
    name: 'Rahul Krishnan',
    role: 'B.E., Anna University',
    text: 'The resume builder caught things I never would have noticed. My ATS score went from 45 to 92 after following the suggestions. Got 3 interview calls within a week.',
    avatar: 'RK',
  },
  {
    name: 'Priya Singh',
    role: 'B.Sc CS, Delhi University',
    text: 'As a non-engineering CS student, I felt lost. SkillOrbit\'s skill gap analysis showed me a clear path and the project generator gave me real things to build for my portfolio.',
    avatar: 'PS',
  },
  {
    name: 'Karthik Reddy',
    role: 'B.Tech, BITS Pilani',
    text: 'The 24×7 AI career chatbot feels like having a mentor always available. Whether it was a doubt at 2am or a career question, I always got helpful guidance.',
    avatar: 'KR',
  },
  {
    name: 'Divya Sharma',
    role: 'Placement Officer, IIIT Hyderabad',
    text: 'The College Dashboard gives me real-time visibility into every student\'s readiness. I can see exactly who needs help and where, across the entire batch.',
    avatar: 'DS',
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Who is SkillOrbit for?',
    answer: 'SkillOrbit is built for engineering students across all years — 1st year through final year — pursuing B.Tech, B.E., MCA, BCA, or B.Sc Computer Science. It also serves colleges, placement officers, and career counselors through the College plan.',
  },
  {
    question: 'How does the AI career assessment work?',
    answer: 'Our AI analyzes your current skills, personality traits, and interests, then recommends the best career paths for you. The assessment takes about 15 minutes and produces a detailed report with personalized recommendations.',
  },
  {
    question: 'Can I use SkillOrbit for free?',
    answer: 'Yes! The Free plan includes the AI Career Assessment, basic Skill Gap Analysis, one AI Roadmap, community access, and the Progress Dashboard. You can upgrade to Pro anytime for unlimited access to all AI tools.',
  },
  {
    question: 'How is the AI Resume Builder different from regular builders?',
    answer: 'Our resume builder uses AI to optimize for ATS (Applicant Tracking Systems), score your resume in real-time, correct grammar, optimize keywords, and even simulate recruiter feedback — so your resume actually gets past screening.',
  },
  {
    question: 'Does SkillOrbit help with actual job placement?',
    answer: 'Yes. Our AI recommends internships and jobs based on your skills, resume, interests, location, and eligibility. We also prepare you with mock interviews, coding practice, and portfolio building so you\'re ready when opportunities arrive.',
  },
  {
    question: 'Can my college get access for all students?',
    answer: 'Absolutely. The College plan includes the full Pro feature set for every student plus a dedicated dashboard for placement officers with batch analytics, skill reports, and placement readiness tracking. Contact our sales team to set it up.',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 50000, suffix: '+', label: 'Students Guided' },
  { value: 95, suffix: '%', label: 'Placement Readiness' },
  { value: 1200, suffix: '+', label: 'Hiring Partners' },
  { value: 24, suffix: '/7', label: 'AI Mentor Access' },
];
